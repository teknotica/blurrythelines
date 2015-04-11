angular.module('filmsiteApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('js/app/templates/gallery.html',
    "<section class=\"section gallery\">\n" +
    "\t<gallery data=\"images\"></gallery>\n" +
    "</section>"
  );


  $templateCache.put('js/app/templates/intro.html',
    "<section class=\"section intro\"></section>"
  );


  $templateCache.put('js/app/templates/nav.html',
    "\n" +
    "    <ul class=\"navigation\">\n" +
    "        <li><a href=\"#intro\">Trailer</a></li>\n" +
    "        <li><a href=\"#gallery\">Gallery</a></li>\n" +
    "        <li><a href=\"#synopsis\">Synopsis</a></li>\n" +
    "    </ul>"
  );


  $templateCache.put('js/app/templates/synopsis.html',
    "<section class=\"section synopsis\">\n" +
    "\n" +
    "    <div class=\"twentytwenty-container\" twentytwenty>\n" +
    "      <img src=\"images/vfx/1_1.jpg\" />\n" +
    "      <img src=\"images/vfx/1_2.jpg\" />\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"twentytwenty-container\" twentytwenty>\n" +
    "      <img src=\"images/vfx/1_1.jpg\" />\n" +
    "      <img src=\"images/vfx/1_2.jpg\" />\n" +
    "    </div>\n" +
    "    \n" +
    "<!--     <video autoplay poster=\"images/home-cover.jpg\" id=\"intro-video\">\n" +
    "        <source src=\"images/intro.mp4\" type=\"video/mp4\">\n" +
    "    </video> -->\n" +
    "\n" +
    "</section>"
  );

}]);
