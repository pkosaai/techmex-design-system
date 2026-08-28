/* ============================================================
   TECHMEX AUSTIN — DESIGN SYSTEM · techmex.js
   Portable component behavior. Copy this file alongside
   css/techmex.css. Both features are opt-in via data
   attributes — safe to include on any page.

   1. Animated counters:  <span data-count="130">0</span>
      counts 0 -> 130 when it enters the viewport.
   2. Countdown:          <div id="tmx-countdown"
                               data-target="2026-10-29T09:00:00-05:00">
      with children [data-unit="d|h|m|s"] updated every second.
   ============================================================ */

/* ---------- Animated counters (data-count) ---------- */
(function () {
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting || e.target.dataset.done) return;
      e.target.dataset.done = "1";
      var target = parseInt(e.target.dataset.count, 10), steps = 60, i = 0;
      var t = setInterval(function () {
        i++; e.target.textContent = Math.floor((target * i) / steps);
        if (i >= steps) { e.target.textContent = target; clearInterval(t); }
      }, 2000 / steps);
    });
  }, { threshold: 0.4 });
  document.querySelectorAll("[data-count]").forEach(function (el) { io.observe(el); });
})();

/* ---------- Countdown (#tmx-countdown[data-target]) ---------- */
(function () {
  var root = document.getElementById("tmx-countdown");
  if (!root) return;
  var target = new Date(root.dataset.target).getTime();
  function pad(n) { return String(n).padStart(2, "0"); }
  function tick() {
    var d = Math.max(0, target - Date.now());
    root.querySelector('[data-unit="d"]').textContent = pad(Math.floor(d / 864e5));
    root.querySelector('[data-unit="h"]').textContent = pad(Math.floor(d / 36e5) % 24);
    root.querySelector('[data-unit="m"]').textContent = pad(Math.floor(d / 6e4) % 60);
    root.querySelector('[data-unit="s"]').textContent = pad(Math.floor(d / 1e3) % 60);
  }
  tick(); setInterval(tick, 1000);
})();
