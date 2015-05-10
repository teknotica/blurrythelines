angular.module('filmsiteApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('js/app/templates/gallery.html',
    "<section class=\"section gallery\">\n" +
    "\t<gallery data=\"galleryImages\" ng-if=\"imagesReady\"></gallery>\n" +
    "</section>"
  );


  $templateCache.put('js/app/templates/intro.html',
    "<section class=\"section intro\">\n" +
    "<!--     <video autoplay loop poster=\"images/sections/intro.jpg\" id=\"intro-video\">\n" +
    "        <source src=\"images/sections/intro.mp4\" type=\"video/mp4\">\n" +
    "    </video> -->\n" +
    "</section>"
  );


  $templateCache.put('js/app/templates/nav.html',
    "\n" +
    "    <ul class=\"navigation\">\n" +
    "        <li><a href=\"#intro\">Trailer</a></li>\n" +
    "        <li><a href=\"#gallery\">Gallery</a></li>\n" +
    "        <li><a href=\"#synopsis\">Synopsis</a></li>\n" +
    "        <li><a href=\"#vfx\">VFX</a></li>\n" +
    "    </ul>"
  );


  $templateCache.put('js/app/templates/synopsis.html',
    "<section class=\"section synopsis\">\n" +
    "    \n" +
    "<!--     <video autoplay poster=\"images/home-cover.jpg\" id=\"intro-video\">\n" +
    "        <source src=\"images/intro.mp4\" type=\"video/mp4\">\n" +
    "    </video> -->\n" +
    "\n" +
    "</section>"
  );


  $templateCache.put('js/app/templates/vfx.html',
    "<section class=\"section vfx\">\n" +
    "\t\n" +
    "\t<div class=\"twentytwenty-container\" twentytwenty>\n" +
    "\t\t<img src=\"images/vfx/1_1.png\" />\n" +
    "\t  \t<img src=\"images/vfx/1_2.png\" />\n" +
    "\t</div>    \n" +
    "\n" +
    "</section>"
  );

}]);
