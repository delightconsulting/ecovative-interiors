var galleryElems = document.querySelectorAll('.js-carousel');

for ( var i=0, len = galleryElems.length; i < len; i++ ) {
  var galleryElem = galleryElems[i];
  new Flickity( galleryElem, {
    cellSelector: '.carousel-cell',
    imagesLoaded: true,
    percentPosition: true,
    wrapAround: true
  });
}