let str = "Sacsam005";
let links = document.links;
let href;

let link = Array.from(links).forEach(function (e) {
  href = e.href;
  if (href.includes(str)) {
    console.log(href);
  }
});
