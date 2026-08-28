/* ============================================================
   TECHMEX DESIGN SYSTEM · styleguide.js
   Chrome for the style-guide PAGE ONLY: auto-generates the
   "View code" snippets from each [data-snippet] demo and wires
   the COPY buttons. Do NOT copy to other platforms.
   ============================================================ */

document.querySelectorAll("[data-snippet]").forEach(function (demo) {
  var details = demo.nextElementSibling;
  if (!details || !details.matches("details.sg-code")) return;
  var pre = details.querySelector("pre");
  var html = demo.innerHTML
    .replace(/^\n+|\s+$/g, "")
    .split("\n").map(function (l) { return l.replace(/^ {6}/, ""); }).join("\n");
  pre.textContent = html;
  details.querySelector(".sg-copy").addEventListener("click", function () {
    navigator.clipboard.writeText(pre.textContent);
    this.textContent = "COPIED ✓"; var b = this;
    setTimeout(function () { b.textContent = "COPY"; }, 1500);
  });
});
