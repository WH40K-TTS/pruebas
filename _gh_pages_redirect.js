// Place this script in <head> of index.html (before any other scripts)
// It restores the route after the 404.html redirect trick
;(function () {
  var p = new URLSearchParams(location.search).get('p')
  if (p) {
    window.history.replaceState(null, '', p + location.hash)
  }
})()
