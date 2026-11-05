(function () {
  var app = document.getElementById("app");

  // ---------- small helpers ----------
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function topicById(id) {
    for (var i = 0; i < TOPICS.length; i++) if (TOPICS[i].id === id) return TOPICS[i];
    return { id: id, name: id, color: "#14161a", blurb: "" };
  }
  function fmtDate(d) {
    var dt = new Date(d + "T00:00:00");
    if (isNaN(dt)) return esc(d);
    return dt.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
  }
  var entries = ENTRIES.slice().sort(function (a, b) { return b.date.localeCompare(a.date); });

  // A cover is the real image if you gave one, otherwise a plain coloured placeholder.
  function cover(e, cls) {
    var t = topicById(e.topic);
    var inner = e.cover
      ? '<img src="' + esc(e.cover) + '" alt="" loading="lazy">'
      : '<div class="ph"><span class="ph-type">' + esc(e.type) + '</span><span class="ph-topic">' + esc(t.name) + "</span></div>";
    return '<div class="cover ' + (cls || "") + '" style="--c:' + t.color + '">' + inner + "</div>";
  }

  function textLink(e, label) {
    if (e.pdf) return '<a class="textlink" href="' + esc(e.pdf) + '" target="_blank" rel="noopener">' + (label || "Read the PDF") + " &rarr;</a>";
    return '<span class="textlink off">PDF coming soon</span>';
  }

  // ---------- masthead / footer ----------
  document.title = SITE.name;
  document.getElementById("brand-name").textContent = SITE.name;
  document.getElementById("today").textContent = new Date().toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
  document.getElementById("footer-about").textContent = SITE.about;
  document.getElementById("link-email").href = SITE.email;
  document.getElementById("link-linkedin").href = SITE.linkedin;

  function renderNav(activeId) {
    var html = '<a href="#/" class="' + (!activeId ? "active" : "") + '">Home</a>';
    TOPICS.forEach(function (t) {
      html += '<a href="#/topic/' + t.id + '" style="--c:' + t.color + '" class="' + (activeId === t.id ? "active" : "") + '">' + esc(t.name) + "</a>";
    });
    document.getElementById("nav").innerHTML = html;
  }

  // ---------- item used in the home grid ----------
  function item(e) {
    var t = topicById(e.topic);
    var open = e.pdf ? '<a class="item" href="' + esc(e.pdf) + '" target="_blank" rel="noopener"' : '<div class="item"';
    var close = e.pdf ? "</a>" : "</div>";
    return (
      open + ' style="--c:' + t.color + '">' +
        cover(e) +
        '<p class="kicker">' + esc(t.name) + " &middot; " + esc(e.type) + "</p>" +
        "<h3>" + esc(e.title) + "</h3>" +
        '<p class="byline">' + esc(e.authors) + " &middot; " + fmtDate(e.date) + "</p>" +
        '<p class="sum">' + esc(e.summary) + "</p>" +
      close
    );
  }

  // ---------- HOME ----------
  function renderHome() {
    renderNav(null);
    var lead = entries[0];
    var html = "";

    if (lead) {
      var lt = topicById(lead.topic);
      var coverHtml = lead.pdf
        ? '<a class="lead-cover" href="' + esc(lead.pdf) + '" target="_blank" rel="noopener" aria-label="Open the PDF">' + cover(lead) + "</a>"
        : '<div class="lead-cover">' + cover(lead) + "</div>";
      html +=
        '<section class="lead" style="--c:' + lt.color + '">' +
          '<div class="lead-text">' +
            '<p class="kicker">Latest &middot; ' + esc(lt.name) + " &middot; " + esc(lead.type) + "</p>" +
            "<h1>" + esc(lead.title) + "</h1>" +
            '<p class="byline">' + esc(lead.authors) + " &middot; " + fmtDate(lead.date) + "</p>" +
            '<p class="dek">' + esc(lead.summary) + "</p>" +
            textLink(lead) +
          "</div>" + coverHtml +
        "</section>";
    }

    html += '<section><div class="sec-head"><h2>Latest publications</h2><div class="tabs" id="tabs"></div></div><div class="grid" id="grid"></div></section>';

    html += '<section><div class="sec-head"><h2>Browse by topic</h2></div><div class="topics">';
    TOPICS.forEach(function (t) {
      var n = entries.filter(function (e) { return e.topic === t.id; }).length;
      html +=
        '<a class="topic" href="#/topic/' + t.id + '" style="--c:' + t.color + '">' +
          "<h3>" + esc(t.name) + "</h3><p>" + esc(t.blurb) + '</p><span class="count">' + n + (n === 1 ? " publication" : " publications") + " &rarr;</span>" +
        "</a>";
    });
    html += "</div></section>";
    app.innerHTML = html;

    var current = "all";
    function drawGrid() {
      var list = entries.filter(function (e) { return current === "all" || e.topic === current; });
      document.getElementById("grid").innerHTML = list.length ? list.map(item).join("") : '<p class="empty">Nothing here yet.</p>';
      var tabs = '<button class="' + (current === "all" ? "on" : "") + '" data-t="all">All</button>';
      TOPICS.forEach(function (t) {
        tabs += '<button class="' + (current === t.id ? "on" : "") + '" data-t="' + t.id + '" style="--c:' + t.color + '">' + esc(t.name) + "</button>";
      });
      var box = document.getElementById("tabs");
      box.innerHTML = tabs;
      Array.prototype.forEach.call(box.querySelectorAll("button"), function (b) {
        b.addEventListener("click", function () { current = b.getAttribute("data-t"); drawGrid(); });
      });
    }
    drawGrid();
  }

  // ---------- TOPIC PAGE ----------
  function renderTopic(id) {
    var t = topicById(id);
    renderNav(id);
    var all = entries.filter(function (e) { return e.topic === id; });
    var types = [];
    all.forEach(function (e) { if (types.indexOf(e.type) === -1) types.push(e.type); });

    app.innerHTML =
      '<section class="t-head" style="--c:' + t.color + '"><div class="bar"></div><h1>' + esc(t.name) + "</h1><p>" + esc(t.blurb) + "</p></section>" +
      '<div class="tools" style="--c:' + t.color + '">' +
        '<input id="q" type="search" placeholder="Search title, author or summary" aria-label="Search">' +
        '<select id="type" aria-label="Filter by type"><option value="">All types</option>' +
        types.map(function (x) { return '<option value="' + esc(x) + '">' + esc(x) + "</option>"; }).join("") +
        "</select></div>" +
      '<ul class="list" id="list"></ul>';

    function draw() {
      var q = document.getElementById("q").value.toLowerCase().trim();
      var ty = document.getElementById("type").value;
      var rows = all.filter(function (e) {
        var text = (e.title + " " + e.authors + " " + e.summary).toLowerCase();
        return (!q || text.indexOf(q) !== -1) && (!ty || e.type === ty);
      });
      document.getElementById("list").innerHTML = rows.length
        ? rows.map(function (e) {
            var title = e.pdf ? '<a href="' + esc(e.pdf) + '" target="_blank" rel="noopener">' + esc(e.title) + "</a>" : esc(e.title);
            return (
              '<li class="row" style="--c:' + t.color + '">' +
                '<div class="row-meta"><span class="d">' + fmtDate(e.date) + '</span><span class="t">' + esc(e.type) + "</span></div>" +
                '<div class="row-main"><h3>' + title + "</h3>" +
                  '<p class="byline">' + esc(e.authors) + "</p>" +
                  '<p class="sum">' + esc(e.summary) + "</p>" + textLink(e) + "</div>" +
                cover(e) +
              "</li>"
            );
          }).join("")
        : '<li class="empty">' + (all.length ? "No results. Try a different search." : "Nothing published here yet. Check back soon.") + "</li>";
    }
    document.getElementById("q").addEventListener("input", draw);
    document.getElementById("type").addEventListener("change", draw);
    draw();
  }

  // ---------- tiny router (uses the # part of the address) ----------
  function route() {
    var h = location.hash || "#/";
    var m = h.match(/^#\/topic\/([\w-]+)/);
    if (m && TOPICS.some(function (t) { return t.id === m[1]; })) renderTopic(m[1]);
    else renderHome();
    window.scrollTo(0, 0);
  }
  window.addEventListener("hashchange", route);
  route();
})();
