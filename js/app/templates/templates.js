angular.module('filmsiteApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('js/app/templates/behind-the-scenes.html',
    "<section class=\"section gallery\" parallex>\n" +
    "    <div class=\"inner container\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"box no-padding col-md-8 col-sm-12 col-xs-12\" centered>\n" +
    "                <h1><span>05</span> Behind the scenes</h1>\n" +
    "                <div class=\"inner-box no-padding\">\n" +
    "                \t<ul class=\"inline-nav\">\n" +
    "                \t\t<li ng-repeat=\"g in galleries\"><a ng-click=\"loadGallery(g)\">{{g.alias}}</a></li>\n" +
    "                \t</ul>\n" +
    "                    <gallery data=\"gallery\" ng-if=\"imagesReady\"></gallery>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section>"
  );


  $templateCache.put('js/app/templates/crew.html',
    "<section class=\"section crew\" parallex>\n" +
    "    <div class=\"inner container\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"box no-padding col-md-8 col-sm-12 col-xs-12\" centered>\n" +
    "                <h1><span>03</span> Crew</h1>\n" +
    "                <div class=\"inner-box no-padding\">\n" +
    "                    <div class=\"crew-member col-md-4 col-sm-4 nat\">\n" +
    "                        <div>\n" +
    "                            <h2>Natalie Young</h2>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"crew-member col-md-4 col-sm-4 darren\">\n" +
    "                        <div>\n" +
    "                            <h2>Darren Odonoghue</h2>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"crew-member col-md-4 col-sm-4 jon\">\n" +
    "                        <div>\n" +
    "                            <h2>Jon Warnes</h2>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"crew-member col-md-4 col-sm-4 josh\">\n" +
    "                        <div>\n" +
    "                            <h2>Josh Bucker</h2>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"crew-member col-md-4 col-sm-4 silvia\">\n" +
    "                        <div>\n" +
    "                            <h2>Silvia Rebelo</h2>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"crew-member col-md-4 col-sm-4 extra\"></div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section>\n"
  );


  $templateCache.put('js/app/templates/home.html',
    "<section class=\"section home\" parallex>\n" +
    "</section>\n"
  );


  $templateCache.put('js/app/templates/nav.html',
    "<div id=\"nav-overlay\" class=\"no-animate closed\">    \n" +
    "    <nav id=\"nav\">\n" +
    "        <ul class=\"navigation\">\n" +
    "            <li ng-repeat=\"item in menuItems\">\n" +
    "            \t<span>\n" +
    "            \t\t<a href=\"#{{item.url}}\" ng-click=\"checkOverlay()\"><span>0{{$index+1}}</span> {{item.label}}</a>\t\n" +
    "            \t</span>            \t\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "    </nav>\n" +
    "</div>\n" +
    "<div class=\"title\"><a href=\"#home\">Blurring the lines</a></div>\n" +
    "<burger-icon></burger-icon>\n"
  );


  $templateCache.put('js/app/templates/synopsis.html',
    "<section class=\"section synopsis\" parallex>\n" +
    "    <div class=\"inner container\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"box no-padding col-md-6 col-sm-8 col-xs-12\" centered>\n" +
    "                <h1><span>02</span> Synopsis</h1>\n" +
    "                <div class=\"inner-box\">\n" +
    "                    <p>Blurring the lines is about consectetur adipisicing elit. Ullam esse sed eius. Nesciunt, laudantium perferendis. Recusandae natus facilis fugit corporis maiores quis earum aperiam reprehenderit laborum dicta. Ipsa minus, consequuntur.</p>\n" +
    "                    <p>Sint officia quaerat deleniti eligendi perferendis. Enim quam minus hic provident voluptates assumenda dolores id ipsum, ipsa necessitatibus maxime labore optio modi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam esse sed eius. Nesciunt, laudantium perferendis. Recusandae natus facilis fugit corporis maiores quis earum aperiam reprehenderit laborum dicta. Ipsa minus, consequuntur.</p>\n" +
    "                    <p>Sint officia quaerat deleniti eligendi perferendis. Enim quam minus hic provident voluptates assumenda dolores id ipsum, ipsa necessitatibus maxime labore optio modi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam esse sed eius. Nesciunt, laudantium perferendis.</p>\n" +
    "                </div>                \n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section>\n"
  );


  $templateCache.put('js/app/templates/vfx.html',
    "<section class=\"section vfx\" parallex>\n" +
    "    <div class=\"inner container\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"box no-padding col-md-8 col-sm-12 col-xs-12\" centered>\n" +
    "                <h1><span>04</span> VFX</h1>\n" +
    "                <div class=\"inner-box no-padding\">\n" +
    "                    <div class=\"vfx-item col-md-4\">\n" +
    "                        <div class=\"vfx-item twentytwenty-container\" twentytwenty>\n" +
    "                        \t<img src=\"images/vfx/1_1.png\" />\n" +
    "                          \t<img src=\"images/vfx/1_2.png\" />\n" +
    "                        </div>  \n" +
    "                    </div>\n" +
    "                    <div class=\"vfx-item col-md-4\">\n" +
    "                        <div class=\"vfx-item twentytwenty-container\" twentytwenty>\n" +
    "                        \t<img src=\"images/vfx/1_1.png\" />\n" +
    "                          \t<img src=\"images/vfx/1_2.png\" />\n" +
    "                        </div>  \n" +
    "                    </div>\n" +
    "                    <div class=\"vfx-item col-md-4\">\n" +
    "                        <div class=\"vfx-item twentytwenty-container\" twentytwenty>\n" +
    "                        \t<img src=\"images/vfx/1_1.png\" />\n" +
    "                          \t<img src=\"images/vfx/1_2.png\" />\n" +
    "                        </div>  \n" +
    "                    </div>\n" +
    "                    <div class=\"vfx-item col-md-4\">\n" +
    "                        <div class=\"vfx-item twentytwenty-container\" twentytwenty>\n" +
    "                        \t<img src=\"images/vfx/1_1.png\" />\n" +
    "                          \t<img src=\"images/vfx/1_2.png\" />\n" +
    "                        </div>  \n" +
    "                    </div>\n" +
    "                    <div class=\"vfx-item col-md-4\">\n" +
    "                        <div class=\"vfx-item twentytwenty-container\" twentytwenty>\n" +
    "                        \t<img src=\"images/vfx/1_1.png\" />\n" +
    "                          \t<img src=\"images/vfx/1_2.png\" />\n" +
    "                        </div>  \n" +
    "                    </div>\n" +
    "                    <div class=\"vfx-item col-md-4\">\n" +
    "                        <div class=\"vfx-item twentytwenty-container\" twentytwenty>\n" +
    "                        \t<img src=\"images/vfx/1_1.png\" />\n" +
    "                          \t<img src=\"images/vfx/1_2.png\" />\n" +
    "                        </div>  \n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section>\n"
  );


  $templateCache.put('js/app/directives/gallery/gallery.html',
    "<div id=\"zoomImage\" ng-if=\"zoomActive\">\n" +
    "    <div class=\"zoomInner\">\n" +
    "        <div class=\"zoomItem\" ng-style=\"{'background-image': 'url(images/gallery/{{data.current}}/originals/{{imgZoom}})'}\" ng-click=\"close()\"></div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"gallery-wrapper\">\n" +
    "    <div class=\"gallery-item\" ng-repeat=\"img in data.galleryImages\">\n" +
    "        <div class=\"image-wrapper col-md-3 col-sm-3\">\n" +
    "            <a class=\"image\" animate-zoom-image ng-click=\"zoom(img)\" ng-style=\"{'background-image': 'url(images/gallery/{{data.current}}/thumbs/{{img}})'}\"></a>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n"
  );

}]);
