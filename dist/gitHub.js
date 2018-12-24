[
// src/gitHub/AlloyTeam/AlloyFinger.js
{
    properties: {
        link: 'https://github.com/AlloyTeam/AlloyFinger',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.AlloyFinger'
            ]
        ]
    }
}
,
// src/gitHub/Appboy/appboy-web-sdk.js
{
    properties: {
        link: 'https://github.com/Appboy/appboy-web-sdk',
        notes: [],
        platform: 'GitHub',
        tests: [
            'https://www.mynbc5.com/article/trump-says-gen-mattis-to-retire-as-defense-secretary-in-early-2019/25647058'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.appboy'
            ]
        ]
    }
}
,
// src/gitHub/CSSLint/csslint.js
{
    properties: {
        link: 'https://github.com/CSSLint/csslint',
        notes: [],
        platform: 'GitHub',
        tests: [
            'http://csslint.net/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.CSSLint'
            ]
        ]
    },
    versions: {
        references: [
            'window.CSSLint.version'
        ]
    }
}
,
// src/gitHub/CanopyTax/single-spa.js
{
    properties: {
        link: 'https://github.com/CanopyTax/single-spa',
        platform: 'GitHub',
        tests: [
            'https://single-spa.surge.sh/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.singleSpaNavigate'
            ]
        ]
    }
}
,
// src/gitHub/CodeSeven/toastr.js
{
    properties: {
        link: 'https://github.com/CodeSeven/toastr',
        notes: [],
        platform: 'GitHub',
        tests: [
            'https://appsumo.com/stencil-2018/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.toastr'
            ]
        ]
    },
    versions: {
        references: [
            'window.toastr.version'
        ]
    }
}
,
// src/gitHub/DmitryBaranovskiy/raphael.js
{
    properties: {
        link: 'https://github.com/DmitryBaranovskiy/raphael',
        platform: 'GitHub',
        tests: [
            'http://lisperator.net/uglifyjs/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.Raphael'
            ]
        ]
    },
    versions: {
        references: [
            'window.Raphael.version'
        ]
    }
}
,
// src/gitHub/Dogfalo/materialize.js
{
    properties: {
        link: 'https://github.com/Dogfalo/materialize',
        platform: 'GitHub',
        tests: [
            'https://materializecss.com/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.M',
                'window.M.AutoInit'
            ]
        ]
    },
    versions: {
        references: [
            'window.M.version'
        ]
    }
}
,
// src/gitHub/Eonasdan/bootstrap-datetimepicker.js
{
    properties: {
        link: 'https://github.com/Eonasdan/bootstrap-datetimepicker',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        statements: [
            [
                'window.jQuery(\'body\').datetimepicker'
            ]
        ]
    }
}
,
// src/gitHub/FezVrasta/popper.js.js
{
    properties: {
        link: 'https://github.com/FezVrasta/popper.js',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.Popper'
            ]
        ]
    }
}
,
// src/gitHub/FortAwesome/Font-Awesome.js
{
    properties: {
        link: 'https://github.com/FortAwesome/Font-Awesome',
        notes: [
            'https://i.imgur.com/3AhoAeu.jpg',
            'https://i.imgur.com/z3zoICN.jpg',
            'https://i.imgur.com/nMIVbUf.jpg'
        ],
        platform: 'GitHub',
        tests: [
            'https://tim.fyi',
            'https://getstencil.com/blog',
            'https://lodash.com/docs/4.17.11'
        ],
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'Font_Awesome',
            sections: []
        }
    },
    tests: {
        patterns: {
            page: [
                [/\<link[^>]+fontawesome/i],
                [/\<link[^>]+font\-awesome/i],
                [/href="https?:\/\/use\.fontawesome\.com/i]
            ]
        }
    },
    versions: {
        patterns: {
            page: [
                /<link[^>]+font\-awesome\/([0-9\.]+)\//i,
                /Font\-Awesome\/v([0-9\.]+)\//i,
                /font\-awesome[^>]+ver=v([0-9\.]+)/i,
                /fontawesome\/([0-9\.]+)\//i
            ]
        }
    }
}
,
// src/gitHub/FrDH/jQuery.dotdotdot.js
{
    properties: {
        licenses: {
            commercial: {
                paid: true
            }
        },
        link: 'https://github.com/FrDH/jQuery.dotdotdot',
        platform: 'GitHub',
        tests: [
            'https://keen.io/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.jQuery.dotdotdot',
                'window.jQuery.dotdotdot.defaults'
            ]
        ]
    },
    versions: {
        references: [
            'window.jQuery.dotdotdot.version'
        ]
    }
}
,
// src/gitHub/GetmeUK/ContentTools.js
{
    properties: {
        link: 'https://github.com/GetmeUK/ContentTools',
        notes: [],
        platform: 'GitHub',
        tests: [
            'http://getcontenttools.com/demo#what-are-you-waiting-for'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.ContentTools',
                'window.ContentTools.Tools'
            ]
        ]
    }
}
,
// src/gitHub/JedWatson/react-select.js
{
    properties: {
        link: 'https://github.com/JedWatson/react-select',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        patterns: {
            page: [
                [/id="react-select/i]
            ]
        }
    }
}
,
// src/gitHub/Leaflet/Leaflet.js
{
    properties: {
        link: 'https://github.com/Leaflet/Leaflet',
        platform: 'GitHub',
        tests: [
            'https://www.meteor.com/'
        ],
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'Leaflet_(software)',
            sections: []
        }
    },
    tests: {
        references: [
            [
                'window.L',
                'window.L.Control',
                'window.L.Browser'
            ]
        ]
    },
    versions: {
        references: [
            'window.L.version'
        ]
    }
}
,
// src/gitHub/MikeMcl/big.js.js
{
    properties: {
        link: 'https://github.com/MikeMcl/big.js',
        notes: [],
        platform: 'GitHub',
        tests: [
            'http://mikemcl.github.io/big.js/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.Big',
                'window.Big.version'
            ]
        ]
    },
    versions: {
        references: [
            'window.Big.version'
        ]
    }
}
,
// src/gitHub/MithrilJS/mithril.js.js
{
    properties: {
        link: 'https://github.com/MithrilJS/mithril.js',
        notes: [],
        platform: 'GitHub',
        tests: [
            'https://www.pexels.com/',
            'https://mithril.js.org/api.html'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.m',
                'window.m.buildQueryString',
                'window.m.parseQueryString',
                'window.m.request'
            ]
        ]
    },
    versions: {
        references: [
            'window.m.version'
        ]
    }
}
,
// src/gitHub/Modernizr/Modernizr.js
{
    properties: {
        donate: {
            link: 'https://www.paypal.me/modernizr'
        },
        link: 'https://github.com/Modernizr/Modernizr',
        platform: 'GitHub',
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'Modernizr',
            sections: []
        }
    },
    tests: {
        references: [
            [
                'window.Modernizr'
            ]
        ]
    },
    versions: {
        references: [
            'window.Modernizr._version'
        ]
    }
}
,
// src/gitHub/Mottie/tablesorter.js
{
    properties: {
        link: 'https://github.com/Mottie/tablesorter',
        platform: 'GitHub',
        tests: [
            'https://newscapegroup.com/',
            'https://mottie.github.io/tablesorter/docs/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.jQuery.tablesorter',
                'window.jQuery.tablesorter.addParser'
            ]
        ]
    },
    versions: {
        references: [
            'window.jQuery.tablesorter.version'
        ]
    }
}
,
// src/gitHub/NYTimes/backbone.stickit.js
{
    properties: {
        link: 'https://github.com/NYTimes/backbone.stickit',
        notes: [],
        platform: 'GitHub',
        tests: [
            'https://nytimes.github.io/backbone.stickit/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.Backbone.Stickit'
            ]
        ]
    }
}
,
// src/gitHub/NYTimes/ice.js
{
    properties: {
        link: 'https://github.com/NYTimes/ice',
        notes: [],
        platform: 'GitHub',
        tests: [
            'http://nytimes.github.io/ice/demo/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.ice',
                'window.ice.Bookmark',
                'window.ice.Selection'
            ]
        ]
    }
}
,
// src/gitHub/NYTimes/pourover.js
{
    properties: {
        link: 'https://github.com/NYTimes/pourover',
        notes: [],
        platform: 'GitHub',
        tests: [
            'http://nytimes.github.io/pourover/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.PourOver'
            ]
        ]
    }
}
,
// src/gitHub/OwlCarousel2/OwlCarousel2.js
{
    properties: {
        link: 'https://github.com/OwlCarousel2/OwlCarousel2',
        name: 'Owl Carousel 2',
        platform: 'GitHub',
        tests: [
            'https://www.newyorkjets.com/'
        ],
        type: 'repository'
    },
    tests: {
        statements: [
            [
                'window.jQuery(\'html\').owlCarousel'
            ]
        ]
    }
}
,
// src/gitHub/PaulAdamDavis/Arctic-Scroll.js
{
    properties: {
        link: 'https://github.com/PaulAdamDavis/Arctic-Scroll',
        notes: [],
        platform: 'GitHub',
        tests: [
            'http://pauladamdavis.github.io/Arctic-Scroll/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.jQuery.fn.arctic_scroll'
            ]
        ]
    }
}
,
// src/gitHub/Pixabay/jQuery-autoComplete.js
{
    properties: {
        link: 'https://github.com/Pixabay/jQuery-autoComplete',
        notes: [],
        platform: 'GitHub',
        tests: [
            'https://goodies.pixabay.com/jquery/auto-complete/demo.html'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.jQuery.fn.autoComplete',
                'window.jQuery.fn.autoComplete.defaults'
            ]
        ]
    }
}
,
// src/gitHub/Polymer/polymer.js
{
    properties: {
        link: 'https://github.com/Polymer/polymer',
        platform: 'GitHub',
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'Polymer_(library)',
            sections: []
        }
    },
    tests: {
        references: [
            [
                'window.Polymer'
            ]
        ]
    },
    versions: {
        references: [
            'window.Polymer.version'
        ]
    }
}
,
// src/gitHub/Prinzhorn/skrollr.js
{
    properties: {
        link: 'https://github.com/Prinzhorn/skrollr',
        notes: [],
        platform: 'GitHub',
        tests: [
            'http://prinzhorn.github.io/skrollr/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.skrollr'
            ]
        ]
    },
    versions: {
        references: [
            'window.skrollr.VERSION'
        ]
    }
}
,
// src/gitHub/PrismJS/prism.js
{
    properties: {
        link: 'https://github.com/PrismJS/prism',
        notes: [],
        platform: 'GitHub',
        tests: [
            'https://prismjs.com/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.Prism',
                'window.Prism.highlight'
            ]
        ]
    }
}
,
// src/gitHub/RubaXa/Sortable.js
{
    properties: {
        link: 'https://github.com/RubaXa/Sortable',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.Sortable'
            ]
        ]
    },
    versions: {
        references: [
            'window.Sortable.version'
        ]
    }
}
,
// src/gitHub/SginalR/SginalR.js
{
    properties: {
        link: 'https://github.com/SignalR/SignalR',
        notes: [],
        platform: 'GitHub',
        tests: [
            'https://www.wsj.com/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.jQuery.signalR'
            ]
        ]
    },
    versions: {
        references: [
            'window.jQuery.signalR.version'
        ]
    }
}
,
// src/gitHub/Sjeiti/TinySort.js
{
    properties: {
        link: 'https://github.com/Sjeiti/TinySort',
        notes: [],
        platform: 'GitHub',
        tests: [
            'http://tinysort.sjeiti.com/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.tinysort',
                'window.tinysort.defaults'
            ]
        ]
    }
}
,
// src/gitHub/Stuk/jszip.js
{
    uses: [
        'gitHub/nodeca/pako'
    ],
    properties: {
        link: 'https://github.com/Stuk/jszip',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.JSZip'
            ]
        ]
    },
    versions: {
        references: [
            'window.JSZip.version'
        ]
    }
}
,
// src/gitHub/TryGhost/Ghost.js
{
    properties: {
        donate: {
            link: 'https://opencollective.com/ghost'
        },
        link: 'https://github.com/TryGhost/Ghost',
        notes: [],
        platform: 'GitHub',
        tests: [
            'https://blog.ghost.org/'
        ],
        type: 'repository'
    },
    tests: {
        patterns: {
            cookies: [
                [
                    /ghost-auth/i,
                    /ghost-auth\.sig/i
                ]
            ],
            headers: [
                [
                    /x-ghost-cache-status/i
                ]
            ],
            page: [
                [
                    /<meta[^>]+content\="Ghost /i
                ]
            ]
        }
    },
    versions: {
        patterns: {
            page: [
                /<meta[^>]+name="generator"[^>]+content="Ghost ([^"]+)"/i,
                /<meta[^>]+content="Ghost ([^"]+)"[^>]+name="generator"/i
            ]
        }
    }
}
,
// src/gitHub/TurnWheel/jReject.js
{
    properties: {
        link: 'https://github.com/TurnWheel/jReject',
        platform: 'GitHub',
        tests: [
            'http://jreject.turnwheel.com/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.jQuery.reject'
            ]
        ]
    }
}
,
// src/gitHub/Valve/fingerprintjs2.js
{
    properties: {
        link: 'https://github.com/Valve/fingerprintjs2',
        notes: [],
        platform: 'GitHub',
        tests: [
            'http://valve.github.io/fingerprintjs2/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.Fingerprint2'
            ]
        ]
    },
    versions: {
        references: [
            'window.Fingerprint2.VERSION'
        ]
    }
}
,
// src/gitHub/VincentGarreau/particles.js.js
{
    properties: {
        link: 'https://github.com/VincentGarreau/particles.js',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.particlesJS'
            ]
        ]
    }
}
,
// src/gitHub/Voog/wysihtml.js
{
    properties: {
        alternatives: [
            'https://github.com/tinymce/tinymce',
            'https://github.com/froala/wysiwyg-editor',
            'https://github.com/yabwe/medium-editor',
            'https://github.com/ckeditor/ckeditor5',
            'https://github.com/ckeditor/ckeditor-dev'
        ],
        link: 'https://github.com/Voog/wysihtml',
        name: 'wysihtml',
        platform: 'GitHub',
        tests: [
            'http://wysihtml.com/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.wysihtml5'
            ]
        ]
    },
    versions: {
        references: [
            'window.wysihtml5.version'
        ]
    }
}
,
// src/gitHub/WeCodePixels/theia-sticky-sidebar.js
{
    properties: {
        link: 'https://github.com/WeCodePixels/theia-sticky-sidebar',
        notes: [],
        platform: 'GitHub',
        tests: [
            'http://htmlpreview.github.io/?https://github.com/liviucmg/theia-sticky-sidebar/blob/master/examples/4-columns.html'
        ],
        type: 'repository'
    },
    tests: {
        statements: [
            [
                'window.jQuery(\'div\').theiaStickySidebar'
            ]
        ]
    }
}
,
// src/gitHub/WordPress/WordPress.js
{
    dependencies: [
        'https://github.com/php/php-src'
    ],
    properties: {
        donate: {
            link: 'https://wordpressfoundation.org/donate/'
        },
        link: 'https://github.com/WordPress/WordPress',
        platform: 'GitHub',
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'WordPress',
            sections: []
        }
    },
    tests: {
        patterns: {
            page: [
                [/\<link[^>]+wp\-content\/plugins/i],
                [/\<link[^>]+wp\-content\/themes/i],
                [/\<link[^>]+wp\-content\/uploads/i],
                [/\<link[^>]+wp\-includes/i]
            ]
        }
    },
    versions: {
        patterns: {
            page: [
                /<meta[^>]+content\="WordPress ([0-9\.]+)/i
            ]
        }
    }
}
,
// src/gitHub/aFarkas/html5shiv.js
{
    properties: {
        link: 'https://github.com/aFarkas/html5shiv',
        notes: [
            'https://i.imgur.com/VaUooX0.png'
        ],
        platform: 'GitHub',
        tests: [
            'https://ca.octobersveryown.com'
        ],
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'HTML5_Shiv',
            sections: []
        }
    },
    tests: {
        patterns: {
            page: [
                [/\/html5shiv\./i],
                [/\/html5shiv\//i]
            ]
        },
        references: [
            [
                'window.html5'
            ]
        ]
    },
    versions: {
        patterns: {
            page: [
                /html5shiv\/([0-9\.]+)\/html5shiv/i
            ]
        },
        references: [
            'window.html5.version'
        ]
    }
}
,
// src/gitHub/aFarkas/lazysizes.js
{
    properties: {
        link: 'https://github.com/aFarkas/lazysizes',
        notes: [],
        platform: 'GitHub',
        tests: [
            'https://www.microsoft.com/en-ca'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.lazySizes',
                'window.lazySizes.cfg'
            ]
        ]
    }
}
,
// src/gitHub/aFarkas/respimage.js
{
    properties: {
        link: 'https://github.com/aFarkas/respimage',
        notes: [],
        platform: 'GitHub',
        tests: [
            'https://ca.octobersveryown.com'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.respimage',
                'window.respimage._'
            ]
        ]
    },
    versions: {
        references: [
            'window.respimage.version'
        ]
    }
}
,
// src/gitHub/adobe-webplatform/Snap.svg.js
{
    properties: {
        link: 'https://github.com/adobe-webplatform/Snap.svg',
        platform: 'GitHub',
        tests: [
            'http://snapsvg.io/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.Snap',
                'window.Snap.parseTransformString',
            ]
        ]
    },
    versions: {
        references: [
            'window.Snap.version'
        ]
    }
}
,
// src/gitHub/adobe-webplatform/eve.js
{
    properties: {
        link: 'https://github.com/adobe-webplatform/eve',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.eve',
                'window.eve.listeners',
                'window.eve.on'
            ]
        ]
    },
    versions: {
        references: [
            'window.eve.version'
        ]
    }
}
,
// src/gitHub/airbnb/polyglot.js.js
{
    properties: {
        link: 'https://github.com/airbnb/polyglot.js',
        notes: [],
        platform: 'GitHub',
        tests: [
            'https://www.bestbuy.ca/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.Polyglot',
                'window.Polyglot.prototype.locale'
            ]
        ]
    },
    versions: {
        references: [
            'window.Polyglot.VERSION'
        ]
    }
}
,
// src/gitHub/airbrake/airbrake-js.js
{
    properties: {
        link: 'https://github.com/airbrake/airbrake-js',
        name: 'Airbrake-JS',
        platform: 'GitHub',
        tests: [
            'https://headwayapp.co/stencil-updates#/settings/profile'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.airbrakeJs',
                'window.airbrakeJs.Client'
            ]
        ]
    }
}
,
// src/gitHub/ajaxorg/ace.js
{
    properties: {
        link: 'https://github.com/ajaxorg/ace',
        platform: 'GitHub',
        tests: [
            'https://ace.c9.io/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.ace',
                'window.ace.edit'
            ]
        ]
    },
    versions: {
        references: [
            'window.ace.version'
        ]
    }
}
,
// src/gitHub/akamai/boomerang.js
{
    properties: {
        link: 'https://github.com/akamai/boomerang',
        platform: 'GitHub',
        tests: [
            'https://www.cbc.ca/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.BOOMR'
            ]
        ]
    },
    versions: {
        references: [
            'window.BOOMR.version'
        ]
    }
}
,
// src/gitHub/algolia/algoliasearch-client-javascript.js
{
    properties: {
        link: 'https://github.com/algolia/algoliasearch-client-javascript',
        platform: 'GitHub',
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'Algolia',
            sections: []
        }
    },
    tests: {
        references: [
            [
                'window.algoliasearch'
            ]
        ]
    },
    versions: {
        references: [
            'window.algoliasearch.version'
        ]
    }
}
,
// src/gitHub/algolia/docsearch.js
{
    properties: {
        link: 'https://github.com/algolia/docsearch',
        platform: 'GitHub',
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'Algolia',
            sections: []
        }
    },
    tests: {
        references: [
            [
                'window.docsearch'
            ]
        ]
    },
    versions: {
        references: [
            'window.docsearch.version'
        ]
    }
}
,
// src/gitHub/algolia/instantsearch.js.js
{
    properties: {
        link: 'https://github.com/algolia/instantsearch.js',
        platform: 'GitHub',
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'Algolia',
            sections: []
        }
    },
    tests: {
        references: [
            [
                'window.instantsearch',
                'window.instantsearch.version'
            ]
        ]
    },
    versions: {
        references: [
            'window.instantsearch.version'
        ]
    }
}
,
// src/gitHub/alicelieutier/smoothScroll.js
{
    properties: {
        link: 'https://github.com/alicelieutier/smoothScroll',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.smoothScroll'
            ]
        ]
    },
}
,
// src/gitHub/alizahid/slinky.js
{
    properties: {
        link: 'https://github.com/alizahid/slinky',
        platform: 'GitHub',
        tests: [
            'https://alizahid.github.io/slinky/'
        ],
        type: 'repository'
    },
    tests: {
        statements: [
            [
                'new window.Slinky().jump'
            ],
            [
                'window.jQuery.fn.slinky'
            ]
        ]
    }
}
,
// src/gitHub/alvarotrigo/fullPage.js.js
{
    properties: {
        link: 'https://github.com/alvarotrigo/fullPage.js',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.fullpage'
            ],
            [
                'window.jQuery.fn.fullpage'
            ]
        ]
    }
}
,
// src/gitHub/ampproject/amphtml.js
{
    properties: {
        link: 'https://github.com/ampproject/amphtml',
        notes: [],
        platform: 'GitHub',
        tests: [
            'https://www.independent.co.uk/news/world/americas/us-politics/trump-james-mattis-defense-secretary-white-house-tweet-replace-retire-latest-a8693756.html'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.AMP_CONFIG'
            ]
        ]
    },
    versions: {
        references: [
            'window.AMP_CONFIG.v'
        ]
    }
}
,
// src/gitHub/andris9/jStorage.js
{
    properties: {
        link: 'https://github.com/andris9/jStorage',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.jQuery.jStorage'
            ]
        ]
    },
    versions: {
        references: [
            'window.jQuery.jStorage.version'
        ]
    }
}
,
// src/gitHub/angular-ui/bootstrap.js
{
    properties: {
        link: 'https://github.com/angular-ui/bootstrap',
        notes: [],
        platform: 'GitHub',
        tags: [
            'angular'
        ],
        tests: [
            'http://angular-ui.github.io/bootstrap/'
        ],
        type: 'repository'
    },
    tests: {
        statements: [
            [
                'window.angular.module(\'ui.bootstrap\')'
            ]
        ]
    }
}
,
// src/gitHub/angular/angular.js
{
    properties: {
        link: 'https://github.com/angular/angular.js',
        platform: 'GitHub',
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'Angular_(application_platform)',
            sections: []
        }
    },
    tests: {
        strings: {
            page: [
                [
                    'ng-version="'
                ]
            ]
        },
        references: [
            [
                'ng.coreTokens',
                'ng.probe'
            ]
        ]
    },
    versions: {
        patterns: {
            page: [
                /ng-version="([^"]+)/i
            ]
        }
    }
}
,
// src/gitHub/angular/angular.js.js
{
    properties: {
        link: 'https://github.com/angular/angular.js',
        platform: 'GitHub',
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'AngularJS',
            sections: []
        }
    },
    tests: {
        references: [
            [
                'window.angular'
            ]
        ]
    },
    versions: {
        references: [
            'window.angular.version.full'
        ]
    }
}
,
// src/gitHub/angular/zone.js.js
{
    properties: {
        link: 'https://github.com/angular/zone.js',
        platform: 'GitHub',
        tests: [
            'https://ui-router.github.io/sample-app-angular/#/home'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.Zone',
                'window.Zone.assertZonePatched'
            ]
        ]
    }
}
,
// src/gitHub/ankane/chartkick.js.js
{
    properties: {
        link: 'https://github.com/ankane/chartkick.js',
        notes: [],
        platform: 'GitHub',
        tests: [
            'https://www.accountdock.com/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.Chartkick',
                'window.Chartkick.options'
            ]
        ]
    }
}
,
// src/gitHub/apache/httpd.js
{
    properties: {
        donate: {
            link: 'https://www.apache.org/foundation/contributing.html'
        },
        link: 'https://github.com/apache/httpd',
        platform: 'GitHub',
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'Apache_HTTP_Server',
            sections: []
        }
    },
    tests: {
        patterns: {
            headers: [
                [
                    /server\: apache/i
                ]
            ]
        }
    },
    versions: {
        patterns: {
            headers: [
                /server\: apache\/([0-9\.]+)/i
            ]
        }
    }
}
,
// src/gitHub/apache/tomcat.js
{
    properties: {
        donate: {
            link: 'https://www.apache.org/foundation/contributing.html'
        },
        link: 'https://github.com/apache/tomcat',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        patterns: {
            headers: [
                [
                    /server\: apache\-coyote/i
                ]
            ]
        }
    },
    versions: {
        patterns: {
            headers: [
                /server\: apache\-coyote\/([0-9\.]+)/i
            ]
        }
    }
}
,
// src/gitHub/appleple/SmartPhoto.js
{
    properties: {
        link: 'https://github.com/appleple/SmartPhoto',
        notes: [],
        platform: 'GitHub',
        tests: [],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.SmartPhoto',
                'window.SmartPhoto.prototype.increment'
            ]
        ]
    }
}
,
// src/gitHub/aramk/crayon-syntax-highlighter.js
{
    properties: {
        link: 'https://github.com/aramk/crayon-syntax-highlighter',
        notes: [],
        platform: 'GitHub',
        tests: [
            'https://wecodepixels.com/shop/theia-sticky-sidebar-for-wordpress/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.CrayonSyntax',
                'window.CrayonSyntaxSettings'
            ]
        ]
    },
    versions: {
        references: [
            'window.CrayonSyntaxSettings.version'
        ]
    }
}
,
// src/gitHub/arasatasaygin/is.js.js
{
    properties: {
        link: 'https://github.com/arasatasaygin/is.js',
        notes: [],
        platform: 'GitHub',
        tests: [
            'https://www.bundestag.de/en/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.is',
                'window.is.affirmative',
                'window.is.weekday',
                'window.is.weekend',
                'window.is.VERSION'
            ]
        ]
    },
    versions: {
        references: [
            'window.is.VERSION'
        ]
    }
}
,
// src/gitHub/artpolikarpov/fotorama.js
{
    properties: {
        link: 'https://github.com/artpolikarpov/fotorama',
        platform: 'GitHub',
        tests: [
            'http://fotorama.io/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.jQuery.Fotorama'
            ],
            [
                'window.jQuery.fn.fotorama'
            ]
        ]
    },
    versions: {
        references: [
            'window.fotoramaVersion'
        ]
    }
}
,
// src/gitHub/auth0/auth0.js.js
{
    properties: {
        link: 'https://github.com/auth0/auth0.js',
        notes: [],
        platform: 'GitHub',
        tests: [
            'https://community.dentistry.com/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.auth0',
                'window.auth0.WebAuth'
            ]
        ]
    },
    versions: {
        references: [
            'window.auth0.version'
        ]
    }
}
,
// src/gitHub/auth0/lock.js
{
    properties: {
        link: 'https://github.com/auth0/lock',
        notes: [],
        platform: 'GitHub',
        tests: [
            'https://www.browserstack.com/docs'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.Auth0Lock'
            ]
        ]
    },
    versions: {
        references: [
            'window.Auth0Lock.version'
        ]
    }
}
,
// src/gitHub/aws/aws-sdk-js.js
{
    properties: {
        link: 'https://github.com/aws/aws-sdk-js',
        name: 'AWS SDK for JavaScript',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.AWS'
            ]
        ]
    },
    versions: {
        references: [
            'window.AWS.VERSION'
        ]
    }
}
,
// src/gitHub/axios/axios.js
{
    properties: {
        link: 'https://github.com/axios/axios',
        notes: [],
        platform: 'GitHub',
        tests: [],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.axios'
            ]
        ]
    }
}
,
// src/gitHub/babel/babel.js
{
    properties: {
        link: 'https://github.com/babel/babel',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.Babel'
            ]
        ]
    },
    versions: {
        references: [
            'window.Babel.version'
        ]
    }
}
,
// src/gitHub/badlerdashy/sails.js
{
    dependencies: [
        'https://github.com/nodejs/node'
    ],
    properties: {
        link: 'https://github.com/balderdashy/sails',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        patterns: {
            headers: [
                [
                    /x\-powered\-by.{0,20}sails/i
                ]
            ]
        }
    }
}
,
// src/gitHub/basecamp/trix.js
{
    properties: {
        link: 'https://github.com/basecamp/trix',
        notes: [],
        platform: 'GitHub',
        tests: [
            'https://trix-editor.org/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.Trix'
            ]
        ]
    },
    versions: {
        references: [
            'window.Trix.version'
        ]
    }
}
,
// src/gitHub/bchanx/slidr.js
{
    properties: {
        link: 'https://github.com/bchanx/slidr',
        notes: [],
        platform: 'GitHub',
        tests: [
            'http://bchanx.com/slidr'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.slidr',
                'window.slidr.create',
                'window.slidr.version'
            ]
        ]
    },
    versions: {
        statements: [
            'window.slidr.version()'
        ]
    }
}
,
// src/gitHub/bcit-ci/CodeIgniter.js
{
    dependencies: [
        'https://github.com/php/php-src'
    ],
    properties: {
        link: 'https://github.com/bcit-ci/CodeIgniter',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        patterns: {
            cookies: [
                [
                    /ci_session/i
                ]
            ]
        }
    }
}
,
// src/gitHub/benoitc/gunicorn.js
{
    properties: {
        link: 'https://github.com/benoitc/gunicorn',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        patterns: {
            headers: [
                [
                    /server\: gunicorn\//i
                ]
            ]
        }
    },
    versions: {
        patterns: {
            headers: [
                /server\: gunicorn\/([0-9\.]+)/i
            ]
        }
    }
}
,
// src/gitHub/bfintal/Counter-Up.js
{
    properties: {
        link: 'https://github.com/bfintal/Counter-Up',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.jQuery.fn.counterUp'
            ]
        ]
    }
}
,
// src/gitHub/blueimp/Bootstrap-Image-Gallery.js
{
    properties: {
        link: 'https://github.com/blueimp/Bootstrap-Image-Gallery',
        platform: 'GitHub',
        tags: [],
        tests: [],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.dead.dead.dead'
            ]
        ]
    }
}
,
// src/gitHub/blueimp/Gallery.js
{
    properties: {
        link: 'https://github.com/blueimp/Gallery',
        platform: 'GitHub',
        tags: [],
        tests: [
            'https://blueimp.github.io/Gallery/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.blueimp.Gallery'
            ]
        ]
    }
}
,
// src/gitHub/blueimp/JavaScript-MD5.js
{
    properties: {
        link: 'https://github.com/blueimp/JavaScript-MD5',
        platform: 'GitHub',
        tags: [
            'encryption'
        ],
        tests: [
            'https://getstencil.com/app'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.md5'
            ]
        ]
    }
}
,
// src/gitHub/blueimp/jQuery-File-Upload.js
{
    properties: {
        link: 'https://github.com/blueimp/jQuery-File-Upload',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        statements: [
            [
                'window.jQuery(\'body\').fileupload'
            ]
        ]
    }
}
,
// src/gitHub/bramstein/fontfaceobserver.js
{
    properties: {
        link: 'https://github.com/bramstein/fontfaceobserver',
        name: 'Font Face Observer',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.FontFaceObserver'
            ]
        ]
    }
}
,
// src/gitHub/brandonaaron/jquery-cssHooks.js
{
    properties: {
        link: 'https://github.com/brandonaaron/jquery-cssHooks',
        notes: [],
        platform: 'GitHub',
        notes: [
            'https://i.imgur.com/vqFVVa8.jpg'
        ],
        tests: [
            'https://sumo.com/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.jQuery.dead.dead.dead',
                'window.jQuery.cssHooks',
                'window.jQuery.cssHooks.height'
            ]
        ]
    }
}
,
// src/gitHub/brianreavis/sifter.js.js
{
    properties: {
        link: 'https://github.com/brianreavis/sifter.js',
        notes: [],
        platform: 'GitHub',
        tests: [
            'http://selectize.github.io/selectize.js/'
        ],
        type: 'repository'
    },
    tests: {
        statements: [
            [
                'new window.Sifter()',
                'new window.Sifter().settings'
            ]
        ]
    }
}
,
// src/gitHub/bryanbraun/anchorjs.js
{
    properties: {
        link: 'https://github.com/bryanbraun/anchorjs',
        notes: [],
        platform: 'GitHub',
        tests: [
            'https://domvm.github.io/domvm/',
            'https://www.bryanbraun.com/anchorjs/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.AnchorJS',
                'window.anchors.options'
            ]
        ]
    }
}
,
// src/gitHub/bugsnag/bugsnag-js.js
{
    properties: {
        link: 'https://github.com/bugsnag/bugsnag-js',
        platform: 'GitHub',
        tests: [
            'https://mailchimp.com/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.bugsnagClient'
            ]
        ]
    },
    versions: {
        references: [
            'window.bugsnagClient.notifier.version'
        ]
    }
}
,
// src/gitHub/c3js/c3.js
{
    properties: {
        link: 'https://github.com/c3js/c3',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.c3',
                'window.c3.chart'
            ]
        ]
    },
    versions: {
        references: [
            'window.c3.version'
        ]
    }
}
,
// src/gitHub/cakephp/cakephp.js
{
    dependencies: [
        'https://github.com/php/php-src'
    ],
    properties: {
        link: 'https://github.com/cakephp/cakephp',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        patterns: {
            cookies: [
                [
                    /CAKEPHP/i
                ]
            ]
        }
    }
}
,
// src/gitHub/caolan/async.js
{
    properties: {
        link: 'https://github.com/caolan/async',
        platform: 'GitHub',
        tests: [
            'http://caolan.github.io/async/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.async',
                'window.async.concat'
            ]
        ]
    }
}
,
// src/gitHub/carhartl/jquery-cookie.js
{
    properties: {
        link: 'https://github.com/carhartl/jquery-cookie',
        name: 'jQuery.cookie',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.$.cookie',
                'window.$.removeCookie'
            ]
        ]
    }
}
,
// src/gitHub/cbopp-art/lightcase.js
{
    properties: {
        link: 'https://github.com/cbopp-art/lightcase',
        notes: [],
        platform: 'GitHub',
        tags: [
            'lightbox'
        ],
        tests: [],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.lightcase',
                'window.lightcase.init',
                'window.lightcase.start'
            ]
        ]
    }
}
,
// src/gitHub/cburgmer/rasterizeHTML.js.js
{
    properties: {
        link: 'https://github.com/cburgmer/rasterizeHTML.js',
        notes: [],
        platform: 'GitHub',
        tests: [
            'http://cburgmer.github.io/rasterizeHTML.js/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.rasterizeHTML'
            ]
        ]
    }
}
,
// src/gitHub/ccampbell/gator.js
{
    properties: {
        donate: {
            link: 'https://craig.is/accepting-donations?ref=gator'
        },
        link: 'https://github.com/ccampbell/gator',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.Gator',
                'window.Gator.prototype.off'
            ]
        ]
    },
}
,
// src/gitHub/ccampbell/mousetrap.js
{
    properties: {
        donate: {
            link: 'https://craig.is/accepting-donations?ref=mousetrap'
        },
        link: 'https://github.com/ccampbell/mousetrap',
        tests: [
            'https://twitter.com/alfonsocuaron'
        ],
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.Mousetrap',
                'window.Mousetrap.addKeycodes',
                'window.Mousetrap.init'
            ]
        ]
    },
}
,
// src/gitHub/ccampbell/rainbow.js
{
    properties: {
        link: 'https://github.com/ccampbell/rainbow',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.Rainbow',
                'window.Rainbow.addClass',
                'window.Rainbow.extend'
            ]
        ]
    },
}
,
// src/gitHub/cferdinandi/smooth-scroll.js
{
    properties: {
        link: 'https://github.com/cferdinandi/smooth-scroll',
        notes: [],
        platform: 'GitHub',
        tests: [
            'https://www.london.gov.uk/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.SmoothScroll'
            ]
        ]
    }
}
,
// src/gitHub/chaijs/chai.js
{
    properties: {
        link: 'https://github.com/chaijs/chai',
        notes: [],
        platform: 'GitHub',
        tests: [
            'https://www.chaijs.com/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.chai',
                'window.chai.assert'
            ]
        ]
    },
    versions: {
        references: [
            'window.chai.version'
        ]
    }
}
,
// src/gitHub/chartjs/Chart.js.js
{
    properties: {
        link: 'https://github.com/chartjs/Chart.js',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.Chart',
                'window.Chart.canvasHelpers',
                'window.Chart.helpers'
            ]
        ]
    }
}
,
// src/gitHub/chieffancypants/angular-loading-bar.js
{
    properties: {
        link: 'https://github.com/chieffancypants/angular-loading-bar',
        notes: [],
        platform: 'GitHub',
        tags: [
            'angular'
        ],
        tests: [
            'https://genius.com/'
        ],
        type: 'repository'
    },
    tests: {
        statements: [
            [
                'window.angular.module(\'angular-loading-bar\')'
            ]
        ]
    }
}
,
// src/gitHub/ckeditor/ckeditor-dev.js
{
    properties: {
        link: 'https://github.com/ckeditor/ckeditor-dev',
        notes: [],
        platform: 'GitHub',
        tests: [
            'https://ckeditor.com/ckeditor-4/demo/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.CKEDITOR'
            ]
        ]
    },
    versions: {
        references: [
            'window.CKEDITOR.version'
        ]
    }
}
,
// src/gitHub/ckeditor/ckeditor5.js
{
    properties: {
        link: 'https://github.com/ckeditor/ckeditor5',
        notes: [],
        platform: 'GitHub',
        tests: [
            'https://ckeditor.com/ckeditor-5/demo/#classic'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.CKEDITOR_VERSION'
            ]
        ]
    },
    versions: {
        references: [
            'window.CKEDITOR_VERSION'
        ]
    }
}
,
// src/gitHub/cloudinary/cloudinary_js.js
{
    properties: {
        link: 'https://github.com/cloudinary/cloudinary_js',
        platform: 'GitHub',
        tests: [
            'https://cloudinary.com/console'
        ],
        type: 'repository'
    },
    tests: {
        patterns: {
            page: [
                [
                    /http[s]?:\/\/cloudinary\-res\.cloudinary\.com\//i
                ],
                [
                    /http[s]?:\/\/res\.closudinary\.com\//i
                ]
            ]
        }
    }
}
,
// src/gitHub/codemirror/CodeMirror.js
{
    properties: {
        link: 'https://github.com/codemirror/CodeMirror',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.CodeMirror'
            ]
        ]
    },
    versions: {
        references: [
            'window.CodeMirror.version'
        ]
    }
}
,
// src/gitHub/cowboy/jquery-tiny-pubsub.js
{
    properties: {
        link: 'https://github.com/cowboy/jquery-tiny-pubsub',
        platform: 'GitHub',
        tests: [
            'https://www.spotify.com/us/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.jQuery.publish',
                'window.jQuery.subscribe',
                'window.jQuery.unsubscribe'
            ]
        ]
    }
}
,
// src/gitHub/craftcms/cms.js
{
    dependencies: [
        'https://github.com/yiisoft/yii'
    ],
    properties: {
        link: 'https://github.com/craftcms/cms',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        patterns: {
            cookies: [
                [
                    /CraftSessionId/i
                ]
            ]
        }
    }
}
,
// src/gitHub/cubiq/iscroll.js
{
    properties: {
        link: 'https://github.com/cubiq/iscroll',
        notes: [],
        platform: 'GitHub',
        tests: [
            'https://www.thewatergatehotel.com/offers/good-morning',
            'http://iscrolljs.com/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.IScroll',
                'window.IScroll.utils'
            ]
        ]
    },
    versions: {
        references: [
            'window.IScroll.version'
        ]
    }
}
,
// src/gitHub/cujojs/curl.js
{
    properties: {
        link: 'https://github.com/cujojs/curl',
        notes: [],
        platform: 'GitHub',
        tests: [
            'http://cujojs.com/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.curl',
                'window.curl.version'
            ]
        ]
    },
    versions: {
        references: [
            'window.curl.version'
        ]
    }
}
,
// src/gitHub/d3/d3.js
{
    properties: {
        link: 'https://github.com/d3/d3',
        platform: 'GitHub',
        tests: [
            'https://bower.io/'
        ],
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'D3.js',
            sections: []
        }
    },
    tests: {
        references: [
            [
                'window.d3',
                'window.d3.version'
            ]
        ]
    },
    versions: {
        references: [
            'window.d3.version'
        ]
    }
}
,
// src/gitHub/danialfarid/ng-file-upload.js
{
    properties: {
        link: 'https://github.com/danialfarid/ng-file-upload',
        notes: [],
        platform: 'GitHub',
        tags: [
            'angular'
        ],
        tests: [
            'https://www.algolia.com/users/sign_in'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.ngFileUpload'
            ]
        ],
        statements: [
            [
                'window.angular.module(\'ngFileUpload\')'
            ]
        ]
    },
    versions: {
        references: [
            'window.ngFileUpload.version'
        ],
        statements: [
            'window.angular.module(\'ngFileUpload\').version'
        ]
    }
}
,
// src/gitHub/dankogai/js-base64.js
{
    properties: {
        link: 'https://github.com/dankogai/js-base64',
        platform: 'GitHub',
        tests: [
            'https://www.iconfinder.com/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.Base64'
            ]
        ]
    },
    versions: {
        references: [
            'window.Base64.version'
        ]
    }
}
,
// src/gitHub/davatron5000/FitText.js.js
{
    properties: {
        link: 'https://github.com/davatron5000/FitText.js',
        notes: [],
        platform: 'GitHub',
        tests: [
            'http://fittextjs.com/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.jQuery.fn.fitText'
            ]
        ]
    }
}
,
// src/gitHub/davatron5000/FitVids.js.js
{
    properties: {
        link: 'https://github.com/davatron5000/FitVids.js',
        notes: [],
        platform: 'GitHub',
        tests: [
            'http://fitvidsjs.com/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.jQuery.fn.fitVids'
            ]
        ]
    }
}
,
// src/gitHub/davatron5000/Lettering.js.js
{
    properties: {
        link: 'https://github.com/davatron5000/Lettering.js',
        notes: [],
        platform: 'GitHub',
        tests: [
            'http://letteringjs.com/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.jQuery.fn.lettering'
            ]
        ]
    }
}
,
// src/gitHub/davidbau/seedrandom.js
{
    properties: {
        link: 'https://github.com/davidbau/seedrandom',
        notes: [],
        platform: 'GitHub',
        tests: [
            'https://d3js.org/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.Math.seedrandom'
            ]
        ]
    }
}
,
// src/gitHub/desandro/imagesloaded.js
{
    properties: {
        link: 'https://github.com/desandro/imagesloaded',
        platform: 'GitHub',
        tests: [
            'https://imagesloaded.desandro.com/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.imagesLoaded'
            ]
        ],
        statements: [
            [
                'window.jQuery(\'html\').imagesLoaded'
            ]
        ]
    }
}
,
// src/gitHub/desandro/masonry.js
{
    properties: {
        link: 'https://github.com/desandro/masonry',
        platform: 'GitHub',
        tests: [
            'https://masonry.desandro.com/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.Masonry',
                'window.Masonry.Item',
                'window.Masonry.compatOptions'
            ]
        ]
    }
}
,
// src/gitHub/devbridge/jQuery-Autocomplete.js
{
    properties: {
        link: 'https://github.com/devbridge/jQuery-Autocomplete',
        name: 'Ajax Autocomplete for jQuery',
        platform: 'GitHub',
        tests: [
            'https://www.newyorkjets.com/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.jQuery.fn.autocomplete',
                'window.jQuery.fn.devbridgeAutocomplete'
            ]
        ]
    }
}
,
// src/gitHub/dimsemenov/Magnific-Popup.js
{
    properties: {
        link: 'https://github.com/dimsemenov/Magnific-Popup',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.jQuery.magnificPopup'
            ],
            [
                'window.Zepto.fn.magnificPopup'
            ]
        ]
    }
}
,
// src/gitHub/dimsemenov/photoswipe.js
{
    properties: {
        licenses: {
            commercial: {
                paid: true
            }
        },
        link: 'https://github.com/dimsemenov/photoswipe',
        notes: [],
        platform: 'GitHub',
        tests: [],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.PhotoSwipe'
            ]
        ]
    }
}
,
// src/gitHub/dinbror/blazy.js
{
    properties: {
        link: 'https://github.com/dinbror/blazy',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.Blazy'
            ]
        ]
    }
}
,
// src/gitHub/dirkgroenen/SVGMagic.js
{
    properties: {
        link: 'https://github.com/dirkgroenen/SVGMagic',
        notes: [],
        platform: 'GitHub',
        tests: [
            'http://dirkgroenen.nl/SVGMagic/index.html'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.jQuery.fn.svgmagic'
            ]
        ]
    }
}
,
// src/gitHub/dirkgroenen/jQuery-viewport-checker.js
{
    properties: {
        link: 'https://github.com/dirkgroenen/jQuery-viewport-checker',
        notes: [],
        platform: 'GitHub',
        tests: [
            'http://www.spiegel.de/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.jQuery.fn.viewportChecker'
            ]
        ]
    }
}
,
// src/gitHub/django/django.js
{
    dependencies: [
        'https://github.com/python/cpython'
    ],
    properties: {
        donate: {
            link: 'https://www.djangoproject.com/fundraising/'
        },
        link: 'https://github.com/django/django',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        strings: {
            page: [
                [
                    'csrfmiddlewaretoken'
                ]
            ]
        }
    }
}
,
// src/gitHub/dojo/framework.js
{
    properties: {
        link: 'https://github.com/dojo/framework',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.dojo'
            ]
        ]
    },
    versions: {
        statements: [
            'dojo.version.major.toString() + \'.\' + dojo.version.minor.toString()'
        ]
    }
}
,
// src/gitHub/dollarshaveclub/shave.js
{
    properties: {
        link: 'https://github.com/dollarshaveclub/shave',
        platform: 'GitHub',
        tags: [
            'company',
            'truncate',
        ],
        tests: [
            'https://www.washingtonpost.com/local/legal-issues/russian-maria-butina-pleads-guilty-in-effort-to-forge-kremlin-bond-with-us-conservatives/2018/12/13/c27f2d26-fe4f-11e8-ad40-cdfd0e0dd65a_story.html?utm_term=.f0ae9474d229',
            'https://dollarshaveclub.github.io/shave/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.jQuery.fn.shave'
            ],
            [
                'window.shave'
            ]
        ]
    }
}
,
// src/gitHub/domvm/domvm.js
{
    properties: {
        link: 'https://github.com/domvm/domvm',
        notes: [],
        platform: 'GitHub',
        tests: [
            'https://www.sporcle.com/games/RaysRule2010/daily_dose'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.domvm'
            ]
        ]
    }
}
,
// src/gitHub/dordille/moment-isoduration.js
{
    properties: {
        link: 'https://github.com/dordille/moment-isoduration',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.moment.duration.fromIsoduration'
            ]
        ]
    }
}
,
// src/gitHub/douglascrockford/JSON-js.js
{
    properties: {
        link: 'https://github.com/douglascrockford/JSON-js',
        notes: [],
        platform: 'GitHub',
        tests: [
            'https://onsen.io/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.dead.dead.dead'
            ]
        ]
    }
}
,
// src/gitHub/drupal/drupal.js
{
    dependencies: [
        'https://github.com/php/php-src'
    ],
    properties: {
        donate: {
            link: 'https://www.drupal.org/association/donate'
        },
        link: 'https://github.com/drupal/drupal',
        platform: 'GitHub',
        tests: [
            'https://www.drupal.org/'
        ],
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'Drupal',
            sections: []
        }
    },
    tests: {
        patterns: {
            headers: [
                [
                    /x\-generator\: drupal/i
                ],
                [
                    /x\-drupal\-cache/i
                ]
            ]
        }
    },
    versions: {
        patterns: {
            headers: [
                /x\-generator\: drupal ([0-9\.]+)/i
            ]
        }
    }
}
,
// src/gitHub/dtao/lazy.js.js
{
    properties: {
        link: 'https://github.com/dtao/lazy.js',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.Lazy',
                'window.Lazy.generate'
            ]
        ]
    },
    versions: {
        references: [
            'window.Lazy.VERSION'
        ]
    }
}
,
// src/gitHub/eligrey/FileSaver.js
{
    properties: {
        link: 'https://github.com/eligrey/FileSaver.js',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        statements: [
            [
                'window.saveAs.toString().match(/blob, name/i)'
            ],
            [
                'window.saveAs.toString().match(/e,t,n/i)'
            ]
        ]
    }
}
,
// src/gitHub/embedly/embedly-jquery.js
{
    properties: {
        link: 'https://github.com/embedly/embedly-jquery',
        notes: [],
        platform: 'GitHub',
        tags: [
            'embedly',
            'jQuery'
        ],
        tests: [
            'https://genius.com/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.jQuery.fn.embedly'
            ]
        ]
    }
}
,
// src/gitHub/embedly/player.js.js
{
    properties: {
        link: 'https://github.com/embedly/player.js',
        notes: [],
        platform: 'GitHub',
        tags: [
            'embedly',
            'video'
        ],
        tests: [
            'https://crooked.com/',
            'http://playerjs.io/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.playerjs',
                'window.playerjs.DEBUG'
            ]
        ]
    },
    versions: {
        references: [
            'window.playerjs.VERSION'
        ]
    }
}
,
// src/gitHub/emberjs/ember.js.js
{
    properties: {
        donate: {
            link: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QRRZTQ5GM7PSY'
        },
        link: 'https://github.com/emberjs/ember.js',
        platform: 'GitHub',
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'Ember.js',
            sections: []
        }
    },
    tests: {
        references: [
            [
                'window.Ember'
            ]
        ]
    },
    versions: {
        references: [
            'window.Ember.VERSION'
        ]
    }
}
,
// src/gitHub/emojione/emojione.js
{
    properties: {
        link: 'https://github.com/emojione/emojione',
        platform: 'GitHub',
        tags: [
            'emojis'
        ],
        type: 'repository'
    },
    tests: {
        strings: {
            page: [
                [
                    'emojione"'
                ]
            ]
        }
    }
}
,
// src/gitHub/enyo/dropzone.js
{
    properties: {
        donate: {
            link: 'https://www.paypal.com/donate/?token=mu0A9N-XyO2nAhmbMz8GfqaK-S9FRvd_3o4xiMvNXyb1sdq7IiIC5cbArisq96_ELC6ClW'
        },
        link: 'https://github.com/enyo/dropzone',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.Dropzone',
                'window.Dropzone.isValidFile',
                'window.Dropzone.version'
            ]
        ]
    },
    versions: {
        references: [
            'window.Dropzone.version'
        ]
    }
}
,
// src/gitHub/expressjs/express.js
{
    properties: {
        link: 'https://github.com/expressjs/express',
        platform: 'GitHub',
        tests: [
            'https://www.nbcnews.com/politics/national-security/russians-launched-pro-jill-stein-social-media-blitz-help-trump-n951166'
        ],
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'Express.js',
            sections: []
        }
    },
    tests: {
        patterns: {
            headers: [
                [
                    /x\-powered\-by.{0,20}express/i
                ]
            ]
        }
    }
}
,
// src/gitHub/fabricjs/fabric.js.js
{
    properties: {
        link: 'https://github.com/fabricjs/fabric.js',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.fabric'
            ]
        ]
    },
    versions: {
        references: [
            'window.fabric.version'
        ]
    }
}
,
// src/gitHub/facebook/hhvm.js
{
    properties: {
        link: 'https://github.com/facebook/hhvm',
        platform: 'GitHub',
        tests: [
            'https://www.mediawiki.org/wiki/API:Query#Title_normalization'
        ],
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'HHVM',
            sections: []
        }
    },
    tests: {
        patterns: {
            headers: [
                [
                    /x\-powered\-by\: hhvm/i
                ]
            ]
        }
    },
    versions: {
        patterns: {
            headers: [
                /x\-powered\-by\: hhvm\/([0-9\.\-a-z]+)/i
            ]
        }
    }
}
,
// src/gitHub/facebook/immutable-js.js
{
    properties: {
        link: 'https://github.com/facebook/immutable-js',
        notes: [],
        platform: 'GitHub',
        tests: [
            'http://facebook.github.io/immutable-js/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.Immutable'
            ]
        ]
    },
    versions: {
        references: [
            'window.Immutable.version'
        ]
    }
}
,
// src/gitHub/facebook/react.js
{
    properties: {
        link: 'https://github.com/facebook/react',
        platform: 'GitHub',
        tests: [
            'https://www.cbc.ca/'
        ],
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'React_(JavaScript_library)',
            sections: []
        }
    },
    tests: {
        patterns: {
            page: [
                [/data\-reactroot/i],
                [/data\-reactid/i],
                [/react\-root/i]
            ]
        },
        references: [
            [
                'window.React'
            ]
        ]
    },
    versions: {
        references: [
            'window.React.version',
            'window.ReactDOM.version'
        ]
    }
}
,
// src/gitHub/faisalman/ua-parser-js.js
{
    properties: {
        donate: {
            link: 'https://www.paypal.me/faisalman/'
        },
        link: 'https://github.com/faisalman/ua-parser-js',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.UAParser'
            ]
        ]
    },
    versions: {
        references: [
            'window.UAParser.VERSION'
        ]
    }
}
,
// src/gitHub/fancyapps/fancyBox.js
{
    properties: {
        link: 'https://github.com/fancyapps/fancyBox',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.jQuery.fancybox'
            ]
        ]
    },
    versions: {
        references: [
            'window.jQuery.fancybox.version'
        ]
    }
}
,
// src/gitHub/fengyuanchen/cropper.js
{
    properties: {
        link: 'https://github.com/fengyuanchen/cropper',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.jQuery.fn.cropper'
            ]
        ]
    }
}
,
// src/gitHub/fengyuanchen/cropperjs.js
{
    properties: {
        link: 'https://github.com/fengyuanchen/cropperjs',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.Cropper',
                'window.Cropper.noConflict'
            ]
        ]
    }
}
,
// src/gitHub/fengyuanchen/datepicker.js
{
    properties: {
        alternatives: [
            'https://github.com/Eonasdan/bootstrap-datetimepicker'
        ],
        tests: [
            'https://fengyuanchen.github.io/datepicker/'
        ],
        link: 'https://github.com/fengyuanchen/datepicker',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.jQuery.fn.datepicker',
                'window.jQuery.fn.datepicker.noConflict',
                '!window.jQuery.fn.datepicker.dates'
            ]
        ]
    }
}
,
// src/gitHub/fengyuanchen/viewer.js
{
    properties: {
        link: 'https://github.com/fengyuanchen/viewer',
        platform: 'GitHub',
        tests: [
            'https://fengyuanchen.github.io/viewer/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.jQuery.fn.viewer',
                'window.jQuery.fn.viewer.name',
                'window.jQuery.fn.viewer.noConflict'
            ]
        ]
    }
}
,
// src/gitHub/fians/Waves.js
{
    properties: {
        link: 'https://github.com/fians/Waves',
        notes: [],
        platform: 'GitHub',
        tests: [
            'http://fian.my.id/Waves/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.Waves',
                'window.Waves.init'
            ]
        ]
    }
}
,
// src/gitHub/filamentgroup/grunticon.js
{
    properties: {
        link: 'https://github.com/filamentgroup/grunticon',
        name: 'Grunticon',
        notes: [],
        platform: 'GitHub',
        tests: [
            'https://www.bbc.com/news/entertainment-arts-46524504'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.grunticon'
            ]
        ]
    }
}
,
// src/gitHub/filamentgroup/loadCSS.js
{
    properties: {
        link: 'https://github.com/filamentgroup/loadCSS',
        notes: [],
        platform: 'GitHub',
        tests: [
            'https://www.filamentgroup.com/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.loadCSS'
            ]
        ]
    }
}
,
// src/gitHub/filepicker/filepicker-js.js
{
    properties: {
        link: 'https://github.com/filepicker/filepicker-js',
        notes: [],
        platform: 'GitHub',
        tests: [
            'https://www.accountdock.com/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.filepicker',
                'window.filepicker.version'
            ]
        ]
    },
    versions: {
        references: [
            'window.filepicker.version'
        ]
    }
}
,
// src/gitHub/flatlogic/bootstrap-tabcollapse.js
{
    properties: {
        link: 'https://github.com/flatlogic/bootstrap-tabcollapse',
        notes: [],
        platform: 'GitHub',
        tests: [
            'https://www.toronto.ca/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.jQuery.fn.tabCollapse',
                'window.jQuery.fn.tabCollapse.Constructor'
            ]
        ]
    }
}
,
// src/gitHub/flot/flot.js
{
    properties: {
        link: 'https://github.com/flot/flot',
        notes: [],
        platform: 'GitHub',
        tests: [
            'http://www.flotcharts.org/flot/examples/basic-usage/index.html'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.jQuery.plot',
                'window.jQuery.plot.plugins',
                'window.jQuery.plot.version'
            ]
        ]
    },
    versions: {
        references: [
            'window.jQuery.plot.version'
        ]
    }
}
,
// src/gitHub/flowplayer/flowplayer.js
{
    properties: {
        link: 'https://github.com/flowplayer/flowplayer',
        notes: [],
        platform: 'GitHub',
        tests: [
            'https://flowplayer.com/blog/flowplayer-native',
            'https://greensock.com/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.flowplayer'
            ]
        ]
    },
    versions: {
        references: [
            'window.flowplayer.version'
        ]
    }
}
,
// src/gitHub/froala/wysiwyg-editor.js
{
    properties: {
        link: 'https://github.com/froala/wysiwyg-editor',
        notes: [],
        platform: 'GitHub',
        tests: [
            'https://www.froala.com/wysiwyg-editor'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.jQuery.FroalaEditor'
            ]
        ]
    },
    versions: {
        references: [
            'window.jQuery.FroalaEditor.VERSION'
        ]
    }
}
,
// src/gitHub/ftlabs/fastclick.js
{
    properties: {
        link: 'https://github.com/ftlabs/fastclick',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.FastClick'
            ]
        ]
    }
}
,
// src/gitHub/fullcalendar/fullcalendar.js
{
    properties: {
        link: 'https://github.com/fullcalendar/fullcalendar',
        notes: [],
        platform: 'GitHub',
        tags: [
            'calendars'
        ],
        tests: [
            'https://www.primefaces.org/primeng/#/',
            'https://fullcalendar.io/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.FullCalendar'
            ]
        ]
    },
    versions: {
        references: [
            'window.FullCalendar.version'
        ]
    }
}
,
// src/gitHub/gatsbyjs/gatsby.js
{
    dependencies: [
        'https://github.com/facebook/react'
    ],
    properties: {
        link: 'https://github.com/gatsbyjs/gatsby',
        notes: [],
        platform: 'GitHub',
        tests: [
            'https://insomnia.rest/blog/sustainable-profit'
        ],
        type: 'repository'
    },
    tests: {
        patterns: {
            page: [
                [
                    /<meta[^>]+content\="Gatsby /i
                ]
            ]
        },
        strings: {
            page: [
                [
                    '<div id="___gatsby">'
                ],
                [
                    '<style id="gatsby-inlined-css">'
                ]
            ]
        }
    },
    versions: {
        patterns: {
            page: [
                /<meta[^>]+content\="Gatsby ([^"]+)/i
            ]
        }
    }
}
,
// src/gitHub/geraintluff/sha256.js
{
    properties: {
        link: 'https://github.com/geraintluff/sha256',
        notes: [],
        platform: 'GitHub',
        tags: [
            'encryption'
        ],
        tests: [
            'http://geraintluff.github.io/sha256/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.sha256'
            ]
        ]
    }
}
,
// src/gitHub/getsentry/sentry-javascript.js
{
    properties: {
        link: 'https://github.com/getsentry/sentry-javascript',
        platform: 'GitHub',
        tests: [
            'https://getstencil.com/app'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.Raven'
            ],
            [
                'window.Sentry'
            ]
        ]
    },
    versions: {
        references: [
            'window.Raven.VERSION',
            'window.Sentry.SDK_VERSION'
        ]
    }
}
,
// src/gitHub/gfranko/jquery.tocify.js.js
{
    properties: {
        link: 'https://github.com/gfranko/jquery.tocify.js',
        notes: [],
        platform: 'GitHub',
        tests: [
            'https://developers.coinbase.com/api/v2',
            'http://gregfranko.com/jquery.tocify.js/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.jQuery.fn.tocify'
            ]
        ]
    },
    versions: {
        references: [
            'window.toc.version'
        ]
    }
}
,
// src/gitHub/gka/chroma.js.js
{
    properties: {
        link: 'https://github.com/gka/chroma.js',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.chroma'
            ]
        ]
    },
    versions: {
        references: [
            'window.chroma.version'
        ]
    }
}
,
// src/gitHub/gohugoio/hugo.js
{
    properties: {
        link: 'https://github.com/gohugoio/hugo',
        platform: 'GitHub',
        tests: [
            'https://1password.com/',
            'https://www.louisdurrant.co.uk/'
        ],
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'Hugo_(software)',
            sections: []
        }
    },
    tests: {
        patterns: {
            page: [
                [
                    /<meta[^>]+content\="Hugo /i
                ]
            ]
        }
    },
    versions: {
        patterns: {
            page: [
                /<meta[^>]+content\="Hugo ([^"]+)/i
            ]
        }
    }
}
,
// src/gitHub/goldfire/howler.js.js
{
    properties: {
        link: 'https://github.com/goldfire/howler.js',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.Howler'
            ]
        ]
    }
}
,
// src/gitHub/google/code-prettify.js
{
    properties: {
        link: 'https://github.com/google/code-prettify',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.prettyPrint'
            ]
        ]
    }
}
,
// src/gitHub/google/fonts.js
{
    properties: {
        link: 'https://github.com/google/fonts',
        notes: [
            'https://i.imgur.com/5G51k7k.jpg'
        ],
        platform: 'GitHub',
        tests: [
            'https://getstencil.com/blog'
        ],
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'Google_Fonts',
            sections: []
        }
    },
    tests: {
        patterns: {
            page: [
                [/dns-prefetch[^>]+fonts\.googleapis\.com/i],
                [/href="https?:\/\/fonts\.googleapis\.com/i]
            ]
        }
    }
}
,
// src/gitHub/google/material-design-icons.js
{
    properties: {
        link: 'https://github.com/google/material-design-icons',
        name: 'Material design icons',
        platform: 'GitHub',
        tests: [
            'https://lto.network/',
            'https://ionicons.com/'
        ],
        type: 'repository'
    },
    tests: {
        patterns: {
            page: [
                [
                    /\bmaterial-icons md-/i
                ]
            ]
        }
    }
}
,
// src/gitHub/google/recaptcha.js
{
    properties: {
        link: 'https://github.com/google/recaptcha',
        platform: 'GitHub',
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'ReCAPTCHA',
            sections: []
        }
    },
    tests: {
        references: [
            [
                'window.recaptcha'
            ]
        ],
        strings: {
            page: [
                ['g-recaptcha']
            ]
        }
    }
}
,
// src/gitHub/googleads/videojs-ima.js
{
    properties: {
        link: 'https://github.com/googleads/videojs-ima',
        notes: [],
        platform: 'GitHub',
        tests: [
            'https://www.mynbc5.com/article/trump-says-gen-mattis-to-retire-as-defense-secretary-in-early-2019/25647058'
        ],
        type: 'repository'
    },
    tests: {
        statements: [
            [
                'window.videojs(document.createElement(\'div\')).ima'
            ]
        ]
    }
}
,
// src/gitHub/greensock/GreenSock-JS.js
{
    properties: {
        link: 'https://github.com/greensock/GreenSock-JS',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.GreenSockGlobals'
            ]
        ]
    }
}
,
// src/gitHub/grevory/angular-local-storage.js
{
    properties: {
        link: 'https://github.com/grevory/angular-local-storage',
        platform: 'GitHub',
        tests: [
            'https://www.allrecipes.com/recipes/367/desserts/pies/'
        ],
        type: 'repository'
    },
    tests: {
        statements: [
            [
                'window.angular.module(\'LocalStorageModule\')'
            ]
        ]
    }
}
,
// src/gitHub/guillaumepotier/Parsley.js.js
{
    properties: {
        link: 'https://github.com/guillaumepotier/Parsley.js',
        notes: [],
        platform: 'GitHub',
        tests: [
            'https://www.helpscout.com/pricing/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.Parsley',
                'window.Parsley.options',
                'window.Parsley.version'
            ]
        ]
    },
    versions: {
        references: [
            'window.Parsley.version'
        ]
    }
}
,
// src/gitHub/hakimel/reveal.js.js
{
    properties: {
        link: 'https://github.com/hakimel/reveal.js',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.Reveal'
            ]
        ]
    },
    versions: {
        references: [
            'window.Reveal.VERSION'
        ]
    }
}
,
// src/gitHub/haltu/muuri.js
{
    properties: {
        link: 'https://github.com/haltu/muuri',
        platform: 'GitHub',
        tests: [
            'https://haltu.github.io/muuri/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.Muuri',
                'window.Muuri.defaultOptions'
            ]
        ]
    }
}
,
// src/gitHub/hammerjs/hammer.js.js
{
    properties: {
        link: 'https://github.com/hammerjs/hammer.js',
        platform: 'GitHub',
        tags: [],
        tests: [
            'https://www.wired.co.uk/article/yuval-noah-harari-extract-21-lessons-for-the-21st-century'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.Hammer'
            ]
        ]
    },
    versions: {
        references: [
            'window.Hammer.VERSION'
        ]
    }
}
,
// src/gitHub/hammerjs/jquery.hammer.js.js
{
    properties: {
        link: 'https://github.com/hammerjs/jquery.hammer.js',
        platform: 'GitHub',
        tags: [],
        tests: [
            'https://www.cnbc.com/'
        ],
        tests: [],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.jQuery.fn.hammer'
            ]
        ]
    }
}
,
// src/gitHub/harvesthq/chosen.js
{
    properties: {
        link: 'https://github.com/harvesthq/chosen',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.jQuery.fn.chosen'
            ]
        ]
    }
}
,
// src/gitHub/headjs/headjs.js
{
    properties: {
        link: 'https://github.com/headjs/headjs',
        name: 'Head JS',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.head.js'
            ]
        ]
    }
}
,
// src/gitHub/heiseonline/shariff.js
{
    properties: {
        link: 'https://github.com/heiseonline/shariff',
        notes: [],
        platform: 'GitHub',
        tests: [
            'https://www.bundestag.de/en/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.Shariff'
            ]
        ]
    }
}
,
// src/gitHub/hernansartorio/jquery-nice-select.js
{
    properties: {
        link: 'https://github.com/hernansartorio/jquery-nice-select',
        platform: 'GitHub',
        tests: [
            'https://www.jesusfilm.org/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.jQuery.fn.niceSelect'
            ]
        ]
    }
}
,
// src/gitHub/hexojs/hexo.js
{
    properties: {
        link: 'https://github.com/hexojs/hexo',
        notes: [],
        platform: 'GitHub',
        tests: [],
        type: 'repository'
    },
    tests: {
        patterns: {
            page: [
                [
                    /<meta[^>]+content\="Hexo /i
                ]
            ]
        }
    },
    versions: {
        patterns: {
            page: [
                /<meta[^>]+content\="Hexo ([^"]+)/i
            ]
        }
    }
}
,
// src/gitHub/hgoebl/mobile-detect.js
{
    properties: {
        link: 'https://github.com/hgoebl/mobile-detect.js',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.MobileDetect',
                'window.MobileDetect.isPhoneSized'
            ]
        ]
    }
}
,
// src/gitHub/highcharts/highcharts.js
{
    properties: {
        licenses: {
            commercial: {
                currency: 'USD',
                paid: true,
                range: [
                    1510,
                    635,
                    615,
                    445,
                    2770,
                    2005,
                    5230,
                    3780,
                    50,
                    165
                ]
            }
        },
        link: 'https://github.com/highcharts/highcharts',
        platform: 'GitHub',
        tests: [
            'https://www.tsn.ca/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.Highcharts'
            ]
        ]
    },
    versions: {
        references: [
            'window.Highcharts.version'
        ]
    }
}
,
// src/gitHub/highlightjs/highlight.js.js
{
    properties: {
        link: 'https://github.com/highlightjs/highlight.js',
        name: 'Highlight.js',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.hljs'
            ]
        ]
    }
}
,
// src/gitHub/hjson/hjson-js.js
{
    properties: {
        link: 'https://github.com/hjson/hjson-js',
        notes: [],
        platform: 'GitHub',
        tests: [
            'https://onsen.io/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.Hjson',
                'window.Hjson.parse',
                'window.Hjson.stringify'
            ]
        ]
    },
    versions: {
        references: [
            'window.Hjson.version'
        ]
    }
}
,
// src/gitHub/hjson/hjson.js
{
    properties: {
        link: 'https://github.com/hjson/hjson',
        notes: [],
        platform: 'GitHub',
        tests: [],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.dead.dead.dead'
            ]
        ]
    }
}
,
// src/gitHub/honeybadger-io/honeybadger-js.js
{
    properties: {
        link: 'https://github.com/honeybadger-io/honeybadger-js',
        platform: 'GitHub',
        tests: [
            'https://foundation.zurb.com/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.Honeybadger',
                'window.Honeybadger.log'
            ]
        ]
    },
    versions: {
        references: [
            'window.Honeybadger.version'
        ]
    }
}
,
// src/gitHub/htmlhint/HTMLHint.js
{
    properties: {
        link: 'https://github.com/htmlhint/HTMLHint',
        notes: [],
        platform: 'GitHub',
        tests: [
            'https://htmlhint.io/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.HTMLHint'
            ]
        ]
    },
    versions: {
        references: [
            'window.HTMLHint.version'
        ]
    }
}
,
// src/gitHub/iamcal/js-emoji.js
{
    properties: {
        link: 'https://github.com/iamcal/js-emoji',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.EmojiConvertor'
            ]
        ]
    }
}
,
// src/gitHub/ianstormtaylor/slate.js
{
    properties: {
        link: 'https://github.com/ianstormtaylor/slate',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        patterns: {
            page: [
                [/data\-slate\-content/i],
                [/data\-slate\-editor/i],
                [/data\-slate\-leaf/i]
            ]
        }
    }
}
,
// src/gitHub/ilkeryilmaz/timelinejs.js
{
    properties: {
        link: 'https://github.com/ilkeryilmaz/timelinejs',
        platform: 'GitHub',
        tests: [
            'https://ilkeryilmaz.github.io/timelinejs/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.Timeline',
                'window.Timeline.init',
                'window.Timeline.create_timeline'
            ]
        ]
    }
}
,
// src/gitHub/imakewebthings/jquery-waypoints.js
{
    properties: {
        link: 'https://github.com/imakewebthings/jquery-waypoints',
        notes: [
            "Marked the reference as dead.dead.dead since this repo does not exist anymore but is still referenced. Find a better way to mark this as dead"
        ],
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.dead.dead.dead'
            ]
        ]
    }
}
,
// src/gitHub/imakewebthings/waypoints.js
{
    properties: {
        link: 'https://github.com/imakewebthings/waypoints',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.Waypoint'
            ]
        ]
    }
}
,
// src/gitHub/impress/impress.js
{
    properties: {
        link: 'https://github.com/impress/impress.js',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.impress'
            ]
        ]
    }
}
,
// src/gitHub/imsky/holder.js
{
    properties: {
        link: 'https://github.com/imsky/holder',
        platform: 'GitHub',
        tags: [
            'images',
            'placeholders',
            'javascript'
        ],
        tests: [
            'http://holderjs.com/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.Holder'
            ]
        ]
    },
    versions: {
        references: [
            'window.Holder.version'
        ]
    }
}
,
// src/gitHub/ionic-team/ionic.js
{
    properties: {
        link: 'https://github.com/ionic-team/ionic',
        platform: 'GitHub',
        tests: [
            'https://ionicframework.com/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.IonicSiteComponents.components'
            ]
        ]
    }
}
,
// src/gitHub/ionic-team/ionicons.js
{
    properties: {
        link: 'https://github.com/ionic-team/ionicons',
        platform: 'GitHub',
        tests: [
            'https://lto.network/',
            'https://ionicons.com/'
        ],
        type: 'repository'
    },
    tests: {
        patterns: {
            page: [
                [
                    /\bion ion-\b/i
                ]
            ]
        }
    }
}
,
// src/gitHub/jackocnr/intl-tel-input.js
{
    properties: {
        donate: {
            link: 'https://www.paypal.me/jackoconnor/1usd'
        },
        link: 'https://github.com/jackocnr/intl-tel-input',
        name: 'International Telephone Input',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.intlTelInput'
            ],
            [
                'window.jQuery.fn.intlTelInput'
            ]
        ]
    },
    versions: {
        references: [
            'window.intlTelInputGlobals.version',
            'window.jQuery.fn.intlTelInput.version'
        ]
    }
}
,
// src/gitHub/jakiestfu/Medium.js.js
{
    properties: {
        link: 'https://github.com/jakiestfu/Medium.js',
        notes: [],
        platform: 'GitHub',
        tests: [
            'http://jakiestfu.github.io/Medium.js/docs/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.Medium',
                'window.Medium.Action',
                'window.Medium.Cache'
            ]
        ]
    },
    versions: {
        references: [
            'window.Medium.version'
        ]
    }
}
,
// src/gitHub/jakiestfu/Ripple.js.js
{
    properties: {
        link: 'https://github.com/jakiestfu/Ripple.js',
        notes: [],
        platform: 'GitHub',
        tests: [
            'http://jakiestfu.github.io/Ripple.js/demo/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.jQuery.ripple',
                'window.jQuery.ripple.version'
            ]
        ]
    },
    versions: {
        references: [
            'window.jQuery.ripple.version'
        ]
    }
}
,
// src/gitHub/jakiestfu/Snap.js.js
{
    properties: {
        link: 'https://github.com/jakiestfu/Snap.js',
        notes: [],
        platform: 'GitHub',
        tests: [
            'http://jakiestfu.github.io/Snap.js/demo/apps/default.html'
        ],
        type: 'repository'
    },
    tests: {
        statements: [
            [
                'new window.Snap(document.createElement(\'div\')).open'
            ]
        ]
    }
}
,
// src/gitHub/janl/mustache.js
{
    properties: {
        link: 'https://github.com/janl/mustache.js',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.Mustache'
            ]
        ]
    },
    versions: {
        references: [
            'window.Mustache.version'
        ]
    }
}
,
// src/gitHub/jaredreich/pell.js
{
    properties: {
        link: 'https://github.com/jaredreich/pell',
        notes: [],
        platform: 'GitHub',
        tests: [
            'https://www.cssscript.com/demo/minimalist-wysiwyg-editor-pell-js/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.pell',
                'window.pell.default',
                'window.pell.init',
                'window.pell.__esModule'
            ]
        ]
    }
}
,
// src/gitHub/jashkenas/backbone.js
{
    dependencies: [
        'https://github.com/jashkenas/underscore'
    ],
    properties: {
        link: 'https://github.com/jashkenas/backbone',
        platform: 'GitHub',
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'Backbone.js',
            sections: []
        }
    },
    tests: {
        references: [
            [
                'window.Backbone'
            ]
        ]
    },
    versions: {
        references: [
            'window.Backbone.VERSION'
        ]
    }
}
,
// src/gitHub/jashkenas/underscore.js
{
    properties: {
        link: 'https://github.com/jashkenas/underscore',
        platform: 'GitHub',
        tests: [
            'https://torontolife.com/food/torontos-best-pies/'
        ],
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'Underscore.js',
            sections: []
        }
    },
    tests: {
        references: [
            [
                'window._',
                'window._.each',
                '!window._.at'
            ],
            [
                'window._u',
                'window._u.each',
                '!window._u.at'
            ]
        ]
    },
    versions: {
        references: [
            'window._.VERSION',
            'window._u.VERSION'
        ]
    }
}
,
// src/gitHub/jasny/bootstrap.js
{
    properties: {
        link: 'https://github.com/jasny/bootstrap',
        notes: [],
        platform: 'GitHub',
        tests: [
            'https://animals.howstuffworks.com/fish/sharks/shark.htm'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.jQuery.fn.offcanvas',
                'window.jQuery.fn.rowlink'
            ]
        ]
    }
}
,
// src/gitHub/jaysalvat/buzz.js
{
    properties: {
        link: 'https://github.com/jaysalvat/buzz',
        platform: 'GitHub',
        tests: [
            'http://buzz.jaysalvat.com/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.buzz',
                'window.buzz.defaults',
                'window.buzz.sounds',
                'window.buzz.types'
            ]
        ]
    }
}
,
// src/gitHub/jaysalvat/jquery.facedetection.js
{
    properties: {
        link: 'https://github.com/jaysalvat/jquery.facedetection',
        platform: 'GitHub',
        tests: [
            'http://facedetection.jaysalvat.com/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.jQuery.fn.faceDetection'
            ]
        ]
    }
}
,
// src/gitHub/jaysalvat/vegas.js
{
    properties: {
        link: 'https://github.com/jaysalvat/vegas',
        platform: 'GitHub',
        tests: [
            'http://vegas.jaysalvat.com/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.jQuery.vegas',
                'window.jQuery.vegas.defaults',
                'window.jQuery.vegas.isVideoCompatible'
            ]
        ]
    }
}
,
// src/gitHub/jaywcjlove/hotkeys.js
{
    properties: {
        link: 'https://github.com/jaywcjlove/hotkeys',
        notes: [],
        platform: 'GitHub',
        tests: [
            'https://wangchujiang.com/hotkeys/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.hotkeys',
                'window.hotkeys.deleteScope',
                'window.hotkeys.filter',
                'window.hotkeys.isPressed'
            ]
        ]
    }
}
,
// src/gitHub/jmosbech/StickyTableHeaders.js
{
    properties: {
        link: 'https://github.com/jmosbech/StickyTableHeaders',
        platform: 'GitHub',
        tests: [],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.jQuery.fn.stickyTableHeaders'
            ]
        ]
    }
}
,
// src/gitHub/jonom/jquery-focuspoint.js
{
    properties: {
        link: 'https://github.com/jonom/jquery-focuspoint',
        notes: [],
        platform: 'GitHub',
        tests: [
            'http://jonom.github.io/jquery-focuspoint/demos/grid/lizard.html'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.jQuery.fn.focusPoint'
            ]
        ]
    }
}
,
// src/gitHub/jonsamwell/angular-auto-validate.js
{
    properties: {
        link: 'https://github.com/jonsamwell/angular-auto-validate',
        notes: [],
        platform: 'GitHub',
        tests: [
            'http://jonsamwell.github.io/angular-auto-validate/'
        ],
        type: 'repository'
    },
    tests: {
        statements: [
            [
                'window.angular.module(\'jcs-autoValidate\')'
            ]
        ]
    }
}
,
// src/gitHub/jonschlinkert/remarkable.js
{
    properties: {
        link: 'https://github.com/jonschlinkert/remarkable',
        platform: 'GitHub',
        tests: [
            'https://jonschlinkert.github.io/remarkable/demo/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.Remarkable',
                'window.Remarkable.utils'
            ]
        ]
    }
}
,
// src/gitHub/jplayer/jPlayer.js
{
    properties: {
        donate: {
            link: 'http://jplayer.org/donate/'
        },
        link: 'https://github.com/jplayer/jPlayer',
        notes: [],
        platform: 'GitHub',
        tests: [
            'https://www.roblox.com/groups/group.aspx?gid=2788849'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.jQuery.jPlayer',
                'window.jQuery.jPlayer.browser'
            ]
        ]
    },
    versions: {
        references: [
            'window.jQuery.jPlayer.prototype.version.script'
        ]
    }
}
,
// src/gitHub/jquery-form/form.js
{
    properties: {
        link: 'https://github.com/jquery-form/form',
        notes: [],
        platform: 'GitHub',
        tests: [
            'http://malsup.com/jquery/form/#ajaxForm'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.jQuery.fn.ajaxForm',
                'window.jQuery.fn.ajaxSubmit',
                'window.jQuery.fn.formSerialize',
                'window.jQuery.fn.fieldSerialize',
                'window.jQuery.fn.fieldValue'
            ]
        ]
    }
}
,
// src/gitHub/jquery-validation/jquery-validation.js
{
    properties: {
        link: 'https://github.com/jquery-validation/jquery-validation',
        notes: [],
        platform: 'GitHub',
        tests: [
            'https://jqueryvalidation.org/files/demo/errorcontainer-demo.html'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.jQuery.fn.validate',
                'window.jQuery.fn.valid',
                'window.jQuery.fn.rules',
                'window.jQuery.validator',
                'window.jQuery.validator.addClassRules'
            ]
        ]
    }
}
,
// src/gitHub/jquery/jquery-migrate.js
{
    properties: {
        donate: {
            link: 'https://js.foundation/about/donate'
        },
        link: 'https://github.com/jquery/jquery-migrate',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.jQuery',
                'window.jQuery.migrateWarnings'
            ]
        ]
    },
    versions: {
        references: [
            'window.jQuery.migrateVersion'
        ]
    }
}
,
// src/gitHub/jquery/jquery-mousewheel.js
{
    properties: {
        donate: {
            link: 'https://js.foundation/about/donate'
        },
        link: 'https://github.com/jquery/jquery-mousewheel',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.jQuery.fn.mousewheel',
                'window.jQuery.fn.unmousewheel',
            ]
        ]
    },
    versions: {
        references: [
            'window.jQuery.event.special.mousewheel.version'
        ]
    }
}
,
// src/gitHub/jquery/jquery-ui.js
{
    properties: {
        donate: {
            link: 'https://js.foundation/about/donate'
        },
        link: 'https://github.com/jquery/jquery-ui',
        name: 'jQuery UI',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.jQuery.ui'
            ]
        ]
    },
    versions: {
        references: [
            'window.jQuery.ui.version'
        ]
    }
}
,
// src/gitHub/jquery/jquery.js
{
    properties: {
        donate: {
            link: 'https://js.foundation/about/donate'
        },
        link: 'https://github.com/jquery/jquery',
        notes: [
            'https://i.imgur.com/6QH50iS.jpg'
        ],
        platform: 'GitHub',
        tests: [
            'http://holderjs.com/',
            'https://stackoverflow.com/'
        ],
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'JQuery',
            sections: []
        }
    },
    tests: {
        references: [
            [
                'window.jQuery'
            ]
        ]
    },
    versions: {
        patterns: {
            page: [
                /<script[^>]+googleapis[^>]+jquery\/([0-9\.]+)\/jquery/i
            ]
        },
        references: [
            'window.jQuery.fn.jquery'
        ]
    }
}
,
// src/gitHub/jquerytools/jquerytools.js
{
    properties: {
        link: 'https://github.com/jquerytools/jquerytools',
        notes: [],
        platform: 'GitHub',
        tests: [
            'http://jquerytools.org/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.jQuery.tools',
                'window.jQuery.tools.tooltip'
            ]
        ]
    },
    versions: {
        references: [
            'window.jQuery.tools.version'
        ]
    }
}
,
// src/gitHub/jrburke/requirejs.js
{
    properties: {
        link: 'https://github.com/requirejs/requirejs',
        name: 'RequireJS',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.requirejs'
            ]
        ]
    },
    versions: {
        references: [
            'window.requirejs.version'
        ]
    }
}
,
// src/gitHub/js-cookie/js-cookie.js
{
    properties: {
        link: 'https://github.com/js-cookie/js-cookie',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.Cookies.get',
                'window.Cookies.set',
                'window.Cookies.remove',
                'window.Cookies.withConverter'
            ]
        ]
    }
}
,
// src/gitHub/jsbin/jsbin.js
{
    properties: {
        link: 'https://github.com/jsbin/jsbin',
        notes: [],
        platform: 'GitHub',
        tests: [
            'https://api.nasa.gov/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.jsbin',
                'window.jsbin.static'
            ],
            [
                'window.jsbinified'
            ]
        ]
    },
    versions: {
        references: [
            'window.jsbin.version'
        ]
    }
}
,
// src/gitHub/jsor/jcarousel.js
{
    properties: {
        link: 'https://github.com/jsor/jcarousel',
        notes: [],
        platform: 'GitHub',
        tests: [
            'https://sorgalla.com/jcarousel/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.jQuery.jCarousel'
            ]
        ]
    },
    versions: {
        references: [
            'window.jQuery.jCarousel.version'
        ]
    }
}
,
// src/gitHub/jsor/lity.js
{
    properties: {
        link: 'https://github.com/jsor/lity',
        name: 'Lity',
        notes: [],
        platform: 'GitHub',
        tests: [
            'https://sorgalla.com/lity/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.lity'
            ]
        ]
    },
    versions: {
        references: [
            'window.lity.version'
        ]
    }
}
,
// src/gitHub/julianshapiro/velocity.js
{
    properties: {
        link: 'https://github.com/julianshapiro/velocity',
        notes: [],
        platform: 'GitHub',
        tests: [
            'https://appsumo.com/stencil-2018/',
            'https://account.microsoft.com/privacy/ad-settings/signedout'
        ],
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'Velocity_(JavaScript_library)',
            sections: []
        }
    },
    tests: {
        references: [
            [
                'window.jQuery.fn.velocity'
            ],
            [
                'window.jQuery.Velocity'
            ]
        ]
    },
    versions: {
        statements: [
            'window.jQuery.fn.velocity.version.major + \'.\' + window.jQuery.fn.velocity.version.minor + \'.\' + window.jQuery.fn.velocity.version.patch',
            'window.jQuery.Velocity.version.major + \'.\' + window.jQuery.Velocity.version.minor + \'.\' + window.jQuery.Velocity.version.patch'
        ]
    }
}
,
// src/gitHub/jwplayer/jwplayer.js
{
    properties: {
        link: 'https://github.com/jwplayer/jwplayer',
        platform: 'GitHub',
        tests: [
            'http://www.news-gazette.com/'
        ],
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'JW_Player',
            sections: []
        }
    },
    tests: {
        references: [
            [
                'window.jwplayer'
            ]
        ]
    },
    versions: {
        references: [
            'window.jwplayer.version'
        ]
    }
}
,
// src/gitHub/keen/keen-js.js
{
    properties: {
        link: 'https://github.com/keen/keen-js',
        platform: 'GitHub',
        tests: [
            'https://open.vanillaforums.com/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.dead.dead.dead'
            ]
        ]
    }
}
,
// src/gitHub/keen/keen-tracking.js.js
{
    properties: {
        link: 'https://github.com/keen/keen-tracking.js',
        platform: 'GitHub',
        tests: [
            'https://keen.io/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.Keen',
                'window.Keen.Request'
            ]
        ]
    },
    versions: {
        references: [
            'window.Keen.version'
        ]
    }
}
,
// src/gitHub/kenwheeler/slick.js
{
    properties: {
        link: 'https://github.com/kenwheeler/slick',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        statements: [
            [
                '$(\'body\').slick'
            ]
        ]
    }
}
,
// src/gitHub/kkapsner/CanvasBlocker.js
{
    properties: {
        link: 'https://github.com/kkapsner/CanvasBlocker',
        notes: [],
        platform: 'GitHub',
        tests: [],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.dead.dead.dead'
            ]
        ]
    }
}
,
// src/gitHub/knockout/knockout.js
{
    properties: {
        link: 'https://github.com/knockout/knockout',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.ko',
                'window.ko.version'
            ]
        ]
    },
    versions: {
        references: [
            'window.ko.version'
        ]
    }
}
,
// src/gitHub/kriskowal/q.js
{
    properties: {
        link: 'https://github.com/kriskowal/q',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.Q',
                'window.Q.Promise',
                'window.Q.reject'
            ]
        ]
    }
}
,
// src/gitHub/krux/postscribe.js
{
    properties: {
        link: 'https://github.com/krux/postscribe',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.postscribe'
            ]
        ]
    }
}
,
// src/gitHub/lancedikson/bowser.js
{
    properties: {
        link: 'https://github.com/lancedikson/bowser',
        platform: 'GitHub',
        test: [
            'https://www.bundestag.de/en/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.bowser',
                'window.bowser.name'
            ]
        ]
    }
}
,
// src/gitHub/laravel/laravel.js
{
    dependencies: [
        'https://github.com/php/php-src'
    ],
    properties: {
        link: 'https://github.com/laravel/laravel',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        patterns: {
            cookies: [
                [
                    /laravel_session/i
                ]
            ]
        }
    }
}
,
// src/gitHub/leongersen/noUiSlider.js
{
    properties: {
        link: 'https://github.com/leongersen/noUiSlider',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.noUiSlider'
            ]
        ]
    },
    versions: {
        references: [
            'window.noUiSlider.version'
        ]
    }
}
,
// src/gitHub/liabru/jquery-match-height.js
{
    properties: {
        link: 'https://github.com/liabru/jquery-match-height',
        notes: [],
        platform: 'GitHub',
        tests: [
            'https://www.london.gov.uk/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.jQuery.fn.matchHeight'
            ]
        ]
    },
    versions: {
        references: [
            'window.jQuery.fn.matchHeight.version'
        ]
    }
}
,
// src/gitHub/likeastore/ngDialog.js
{
    properties: {
        link: 'https://github.com/likeastore/ngDialog',
        notes: [],
        platform: 'GitHub',
        tags: [
            'angular'
        ],
        tests: [
            'https://www.bestbuy.ca/'
        ],
        type: 'repository'
    },
    tests: {
        statements: [
            [
                'window.angular.module(\'ngDialog\')'
            ]
        ]
    }
}
,
// src/gitHub/linkedin/dustjs.js
{
    properties: {
        link: 'https://github.com/linkedin/dustjs',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.dust',
                'window.dust._aliases'
            ]
        ]
    },
    versions: {
        references: [
            'window.dust.version'
        ]
    }
}
,
// src/gitHub/lodash/lodash.js
{
    properties: {
        link: 'https://github.com/lodash/lodash',
        platform: 'GitHub',
        tests: [
            'https://lodash.com/'
        ],
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'Lodash',
            sections: []
        }
    },
    tests: {
        references: [
            [
                'window._',
                'window._.at'
            ],
            [
                'window.__lodash'
            ]
        ]
    },
    versions: {
        references: [
            'window._.VERSION',
            'window.__lodash.VERSION'
        ]
    }
}
,
// src/gitHub/lukaszfiszer/selectnav.js.js
{
    properties: {
        link: 'https://github.com/lukaszfiszer/selectnav.js',
        notes: [],
        platform: 'GitHub',
        tests: [
            'https://www.lrs.org/library-user-surveys-on-the-web/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.selectnav'
            ]
        ]
    }
}
,
// src/gitHub/luruke/barba.js.js
{
    properties: {
        link: 'https://github.com/luruke/barba.js',
        notes: [],
        platform: 'GitHub',
        tests: [
            'https://www.eight.nl/',
            'http://barbajs.org/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.Barba',
                'window.Barba.BaseTransition'
            ]
        ]
    },
    versions: {
        references: [
            'window.Barba.version'
        ]
    }
}
,
// src/gitHub/maaaaark/bcSwipe.js
{
    properties: {
        link: 'https://github.com/maaaaark/bcSwipe',
        notes: [],
        platform: 'GitHub',
        tags: [
            'jQuery'
        ],
        tests: [
            'https://crooked.com/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.jQuery.fn.bcSwipe'
            ]
        ]
    }
}
,
// src/gitHub/madrobby/keymaster.js
{
    properties: {
        link: 'https://github.com/madrobby/keymaster',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.key',
                'window.key.getScope',
                'window.key.setScope',
                'window.key.unbind'
            ]
        ]
    }
}
,
// src/gitHub/madrobby/zepto.js
{
    properties: {
        link: 'https://github.com/madrobby/zepto',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.Zepto'
            ]
        ]
    }
}
,
// src/gitHub/malsup/blockui.js
{
    properties: {
        link: 'https://github.com/malsup/blockui',
        notes: [],
        platform: 'GitHub',
        tests: [
            'https://www.bestbuy.ca/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.jQuery.blockUI'
            ]
        ]
    },
    versions: {
        references: [
            'window.jQuery.blockUI.version'
        ]
    }
}
,
// src/gitHub/malsup/cycle2.js
{
    properties: {
        donate: {
            link: 'https://www.paypal.com/webapps/shoppingcart?flowlogging_id=5c45f4c86b318&mfid=1545295058279_5c45f4c86b318#/checkout/openButton'
        },
        link: 'https://github.com/malsup/cycle2',
        notes: [],
        platform: 'GitHub',
        tests: [
            'https://www.sandiego.gov/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.jQuery.fn.cycle',
                'window.jQuery.fn.cycle.version'
            ]
        ]
    },
    versions: {
        statements: [
            'window.jQuery.fn.cycle.version().split(\' \').pop()'
        ]
    }
}
,
// src/gitHub/mapbox/mapbox-gl-js.js
{
    properties: {
        link: 'https://github.com/mapbox/mapbox-gl-js',
        platform: 'GitHub',
        tests: [
            'https://www.jesusfilm.org/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.mapboxgl'
            ]
        ]
    },
    versions: {
        references: [
            'window.mapboxgl.version'
        ]
    }
}
,
// src/gitHub/mapbox/mapbox.js
{
    properties: {
        link: 'https://github.com/mapbox/mapbox.js',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.L.mapbox'
            ]
        ]
    },
    versions: {
        references: [
            'window.L.mapbox.VERSION'
        ]
    }
}
,
// src/gitHub/marcandre/detect_swipe.js
{
    properties: {
        link: 'https://github.com/marcandre/detect_swipe',
        platform: 'GitHub',
        tests: [
            'https://www.lonelyplanet.com/vietnam'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.jQuery.detectSwipe',
                'window.jQuery.detectSwipe.version',
                'window.jQuery.detectSwipe.threshold'
            ]
        ]
    },
    versions: {
        references: [
            'window.jQuery.detectSwipe.version'
        ]
    }
}
,
// src/gitHub/marcj/css-element-queries.js
{
    properties: {
        link: 'https://github.com/marcj/css-element-queries',
        platform: 'GitHub',
        tests: [
            'http://htmlpreview.github.io/?https://github.com/liviucmg/theia-sticky-sidebar/blob/master/examples/4-columns.html'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.ResizeSensor',
                'window.ResizeSensor.detach'
            ]
        ]
    }
}
,
// src/gitHub/marcj/jquery-selectBox.js
{
    properties: {
        link: 'https://github.com/marcj/jquery-selectBox',
        platform: 'GitHub',
        tests: [
            'https://greensock.com/',
            'http://marcj.github.io/jquery-selectBox/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.SelectBox',
                'window.SelectBox.prototype.getOptions'
            ],
            [
                'window.jQuery.fn.selectBox'
            ]
        ]
    },
    versions: {
        references: [
            'window.SelectBox.prototype.version'
        ]
    }
}
,
// src/gitHub/marioizquierdo/jquery.serializeJSON.js
{
    properties: {
        link: 'https://github.com/marioizquierdo/jquery.serializeJSON',
        notes: [],
        platform: 'GitHub',
        tests: [
            'https://www.foodora.ca/fr/?r=1'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.jQuery.fn.serializeJSON'
            ]
        ]
    }
}
,
// src/gitHub/marionettejs/backbone.marionette.js
{
    properties: {
        link: 'https://github.com/marionettejs/backbone.marionette',
        notes: [],
        platform: 'GitHub',
        tests: [
            'https://secure.helpscout.net/conversation/630081877/9026/?folderId=1453481',
            'https://marionettejs.com/docs/v3.5.1/marionette.configuration.html'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.Marionette'
            ],
            [
                'window.Backbone.Marionette'
            ]
        ]
    },
    versions: {
        references: [
            'window.Marionette.VERSION',
            'window.Backbone.Marionette.VERSION'
        ]
    }
}
,
// src/gitHub/markedjs/marked.js
{
    properties: {
        link: 'https://github.com/markedjs/marked',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.marked'
            ]
        ]
    }
}
,
// src/gitHub/mathiasbynens/jquery-placeholder.js
{
    properties: {
        link: 'https://github.com/mathiasbynens/jquery-placeholder',
        notes: [],
        platform: 'GitHub',
        tests: [
            'https://mathiasbynens.github.io/jquery-placeholder/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.jQuery.fn.placeholder'
            ]
        ]
    }
}
,
// src/gitHub/mathjax/MathJax.js
{
    properties: {
        link: 'https://github.com/mathjax/MathJax',
        notes: [],
        platform: 'GitHub',
        tests: [
            'https://www.mathjax.org/'
        ],
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'MathJax',
            sections: []
        }
    },
    tests: {
        references: [
            [
                'window.MathJax'
            ]
        ]
    },
    versions: {
        references: [
            'window.MathJax.version'
        ]
    }
}
,
// src/gitHub/matomo-org/matomo.js
{
    properties: {
        link: 'https://github.com/matomo-org/matomo',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.Matomo',
                'window.Matomo.addPlugin'
            ]
        ]
    }
}
,
// src/gitHub/mattbryson/TouchSwipe-Jquery-Plugin.js
{
    properties: {
        link: 'https://github.com/mattbryson/TouchSwipe-Jquery-Plugin',
        platform: 'GitHub',
        tests: [
            'https://www.tsx.com/',
            'http://www.africa-business.com/news-africa/wp-content/plugins/bwp-minify/cache/minify_jquery.themepunch.tools.min,jquery.themepunch.revolution.min_68fa8acd2b8e0474c1b74ef316b329fa'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.jQuery.fn.swipe',
                'window.jQuery.fn.swipe.directions'
            ],
            [
                'window.jQuery.fn.swipetp',
                'window.jQuery.fn.swipetp.directions'
            ]
        ]
    },
    versions: {
        references: [
            'window.jQuery.fn.swipe.version',
            'window.jQuery.fn.swipetp.version'
        ]
    }
}
,
// src/gitHub/mattmccray/liquid.js.js
{
    properties: {
        link: 'https://github.com/mattmccray/liquid.js',
        notes: [],
        platform: 'GitHub',
        tags: [
            'Shopify'
        ],
        tests: [
            'https://makitweb.com/take-screenshot-of-webpage-with-html2canvas/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.Liquid',
                'window.Liquid.author'
            ]
        ]
    },
    versions: {
        references: [
            'window.Liquid.version'
        ]
    }
}
,
// src/gitHub/maxwellito/vivus.js
{
    properties: {
        link: 'https://github.com/maxwellito/vivus',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.Vivus'
            ]
        ]
    }
}
,
// src/gitHub/mediaelement/mediaelement.js
{
    properties: {
        link: 'https://github.com/mediaelement/mediaelement',
        notes: [],
        platform: 'GitHub',
        tests: [
            'http://council.gov.ru/en/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.mejs'
            ]
        ]
    },
    versions: {
        references: [
            'window.mejs.version'
        ]
    }
}
,
// src/gitHub/meltingice/CamanJS.js
{
    properties: {
        link: 'https://github.com/meltingice/CamanJS',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.Caman'
            ]
        ]
    },
    versions: {
        references: [
            'window.Caman.version.release'
        ]
    }
}
,
// src/gitHub/metafizzy/flickity.js
{
    properties: {
        licenses: {
            commercial: {
                paid: true
            }
        },
        link: 'https://github.com/metafizzy/flickity',
        notes: [],
        platform: 'GitHub',
        tests: [
            'https://flickity.metafizzy.co/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.Flickity',
                'window.Flickity.createMethods'
            ]
        ]
    }
}
,
// src/gitHub/metafizzy/infinite-scroll.js
{
    properties: {
        licenses: {
            commercial: {
                paid: true
            }
        },
        link: 'https://github.com/metafizzy/infinite-scroll',
        notes: [],
        platform: 'GitHub',
        tests: [
            'https://infinite-scroll.com/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.InfiniteScroll',
                'window.InfiniteScroll.create'
            ]
        ]
    }
}
,
// src/gitHub/metafizzy/packery.js
{
    properties: {
        licenses: {
            commercial: {
                paid: true
            }
        },
        link: 'https://github.com/metafizzy/packery',
        notes: [],
        platform: 'GitHub',
        tests: [
            'https://packery.metafizzy.co/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.Packery',
                'window.Packery.Item'
            ]
        ]
    }
}
,
// src/gitHub/meteor/meteor.js
{
    properties: {
        link: 'https://github.com/meteor/meteor',
        platform: 'GitHub',
        tests: [
            'https://www.meteor.com/'
        ],
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'Meteor_(web_framework)',
            sections: []
        }
    },
    tests: {
        patterns: {
            page: [
                [
                    /<link[^>]+__meteor-css__/i
                ]
            ]
        },
        references: [
            [
                'window.Meteor'
            ]
        ]
    },
    versions: {
        statements: [
            'window.Meteor.release.split(\'@\').pop()'
        ]
    }
}
,
// src/gitHub/michelson/Dante.js
{
    properties: {
        donate: {
            link: 'https://www.paypal.com/donate/?token=ZN8qFse7x5V0u6lkZukifIViHBdMyZHw_U00485i77q8yOsy6lgP1iPMaGcbO8ENH1sKRW&country.x=AL&locale.x=AL'
        },
        link: 'https://github.com/michelson/Dante',
        notes: [],
        platform: 'GitHub',
        tests: [
            'http://michelson.github.io/Dante/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.Dante'
            ]
        ]
    },
    versions: {
        references: [
            'window.Dante.version'
        ]
    }
}
,
// src/gitHub/mnater/Hyphenator.js
{
    properties: {
        link: 'https://github.com/mnater/Hyphenator',
        platform: 'GitHub',
        tests: [
            'https://new.siemens.com/global/en.html'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.Hyphenator'
            ]
        ]
    },
    versions: {
        references: [
            'window.Hyphenator.version'
        ]
    }
}
,
// src/gitHub/mobxjs/mobx.js
{
    properties: {
        link: 'https://github.com/mobxjs/mobx',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.__mobxGlobal'
            ]
        ]
    }
}
,
// src/gitHub/moment/luxon.js
{
    properties: {
        link: 'https://github.com/moment/luxon',
        name: 'Luxon',
        platform: 'GitHub',
        tags: [
            'datetime'
        ],
        tests: [
            'https://moment.github.io/luxon/docs/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.luxon',
                'window.luxon.DateTime'
            ]
        ]
    }
}
,
// src/gitHub/moment/moment-timezone.js
{
    properties: {
        link: 'https://github.com/moment/moment-timezone',
        name: 'Moment Timezone',
        platform: 'GitHub',
        tags: [
            'datetime'
        ],
        tests: [
            'http://momentjs.com/timezone/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.moment',
                'window.moment.tz'
            ]
        ]
    },
    versions: {
        references: [
            'window.moment.tz.version'
        ]
    }
}
,
// src/gitHub/moment/moment.js
{
    properties: {
        link: 'https://github.com/moment/moment',
        name: 'Moment.js',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.moment'
            ]
        ]
    },
    versions: {
        references: [
            'window.moment.version'
        ]
    }
}
,
// src/gitHub/mootools/mootools-core.js
{
    properties: {
        link: 'https://github.com/mootools/mootools-core',
        platform: 'GitHub',
        tests: [
            'https://updates.getstencil.com/60+-new-google-fonts-83564'
        ],
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'MooTools',
            sections: []
        }
    },
    tests: {
        references: [
            [
                'window.MooTools'
            ]
        ]
    },
    versions: {
        references: [
            'window.MooTools.version'
        ]
    }
}
,
// src/gitHub/mootools/slick.js
{
    properties: {
        link: 'https://github.com/mootools/slick',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.Slick',
                'window.Slick.contains',
                'window.Slick.escapeRegExp'
            ]
        ]
    },
    versions: {
        references: [
            'window.Slick.version'
        ]
    }
}
,
// src/gitHub/mozilla/pdf.js.js
{
    properties: {
        donate: {
            link: 'https://donate.mozilla.org/en-US/'
        },
        link: 'https://github.com/mozilla/pdf.js',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.pdfjsLib'
            ],
            [
                'window.PDFJS'
            ]
        ]
    },
    versions: {
        references: [
            'window.pdfjsLib.version',
            'window.PDFJS.version'
        ]
    }
}
,
// src/gitHub/mozilla/vtt.js.js
{
    properties: {
        donate: {
            link: 'https://donate.mozilla.org/en-US/'
        },
        link: 'https://github.com/mozilla/vtt.js',
        platform: 'GitHub',
        tests: [
            'https://videojs.com/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.vttjs'
            ]
        ]
    }
}
,
// src/gitHub/mrdoob/three.js
{
    properties: {
        link: 'https://github.com/mrdoob/three.js',
        platform: 'GitHub',
        tests: [
            'http://goinghome.302chanwoo.com/'
        ],
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'Three.js',
            sections: []
        }
    },
    tests: {
        references: [
            [
                'window.THREE'
            ]
        ]
    },
    versions: {
        references: [
            'window.THREE.REVISION'
        ]
    }
}
,
// src/gitHub/nanostudio-org/nanogallery2.js
{
    properties: {
        link: 'https://github.com/nanostudio-org/nanogallery2',
        notes: [],
        platform: 'GitHub',
        tags: [
            'lightbox'
        ],
        tests: [],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.NGHammer',
                'window.jQuery.nanogallery2',
                'window.jQuery.fn.nanogallery2'
            ]
        ]
    },
    versions: {
        references: [
            'window.NGHammer.version'
        ]
    }
}
,
// src/gitHub/naver/billboard.js.js
{
    properties: {
        link: 'https://github.com/naver/billboard.js',
        platform: 'GitHub',
        tests: [
            'https://github.com/naver/billboard.js'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.bb',
                'window.bb.chart',
                'window.bb.generate'
            ]
        ]
    },
    versions: {
        references: [
            'window.bb.version'
        ]
    }
}
,
// src/gitHub/nckprsn/scrollme.js
{
    properties: {
        link: 'https://github.com/nckprsn/scrollme',
        notes: [],
        platform: 'GitHub',
        tests: [
            'http://scrollme.nckprsn.com/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.scrollme',
                'window.scrollme.init',
                'window.scrollme.update_viewport'
            ]
        ]
    }
}
,
// src/gitHub/neilj/Squire.js
{
    properties: {
        link: 'https://github.com/neilj/Squire',
        notes: [],
        platform: 'GitHub',
        tests: [
            'http://neilj.github.io/Squire/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.Squire',
                'window.Squire.empty'
            ]
        ]
    }
}
,
// src/gitHub/netlify/netlify-cms.js
{
    properties: {
        link: 'https://github.com/netlify/netlify-cms',
        platform: 'GitHub',
        tests: [
            'https://www.netlifycms.org/'
        ],
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'Netlify',
            sections: []
        }
    },
    tests: {
        patterns: {
            headers: [
                [
                    /server\: Netlify/i
                ]
            ]
        }
    }
}
,
// src/gitHub/nfl/react-helmet.js
{
    properties: {
        link: 'https://github.com/nfl/react-helmet',
        platform: 'GitHub',
        tags: [
            'react'
        ],
        tests: [
            'https://www.cbc.ca/'
        ],
        type: 'repository'
    },
    tests: {
        strings: {
            page: [
                [
                    'data-react-helmet'
                ]
            ]
        }
    }
}
,
// src/gitHub/nginx/nginx.js
{
    properties: {
        donate: {
            link: 'https://www.apache.org/foundation/contributing.html'
        },
        link: 'https://github.com/nginx/nginx',
        platform: 'GitHub',
        related: [
            'https://github.com/apache/httpd'
        ],
        similar: [
            'https://github.com/apache/httpd'
        ],
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'Nginx',
            sections: []
        }
    },
    tests: {
        patterns: {
            headers: [
                [
                    /server\: nginx/i
                ]
            ]
        }
    },
    versions: {
        patterns: {
            headers: [
                /server\: nginx\/([0-9\.]+)/i
            ]
        }
    }
}
,
// src/gitHub/nienines/cowboy.js
{
    properties: {
        link: 'https://github.com/ninenines/cowboy',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        patterns: {
            headers: [
                [
                    /server\: cowboy/i
                ]
            ]
        }
    }
}
,
// src/gitHub/niklasvh/html2canvas.js
{
    properties: {
        link: 'https://github.com/niklasvh/html2canvas',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.html2canvas'
            ]
        ]
    }
}
,
// src/gitHub/nk-o/jarallax.js
{
    properties: {
        link: 'https://github.com/nk-o/jarallax',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.jarallax'
            ]
        ]
    }
}
,
// src/gitHub/noelboss/featherlight.js
{
    properties: {
        link: 'https://github.com/noelboss/featherlight',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.jQuery.featherlight'
            ]
        ]
    }
}
,
// src/gitHub/novus/nvd3.js
{
    properties: {
        link: 'https://github.com/novus/nvd3',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.nv',
                'window.nv.utils',
                'window.nv.render'
            ]
        ]
    },
    versions: {
        references: [
            'window.nv.version'
        ]
    }
}
,
// src/gitHub/nuxt/nuxt.js.js
{
    properties: {
        link: 'https://github.com/nuxt/nuxt.js',
        notes: [],
        platform: 'GitHub',
        tests: [
            'https://nuxtjs.org/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.$nuxt'
            ]
        ]
    }
}
,
// src/gitHub/oblador/angular-scroll.js
{
    properties: {
        link: 'https://github.com/oblador/angular-scroll',
        notes: [],
        platform: 'GitHub',
        tags: [
            'angular'
        ],
        tests: [
            'https://www.emojicopy.com/',
            'http://oblador.github.io/angular-scroll/'
        ],
        type: 'repository'
    },
    tests: {
        statements: [
            [
                'window.angular.module(\'duScroll\')'
            ]
        ]
    }
}
,
// src/gitHub/olado/doT.js
{
    properties: {
        link: 'https://github.com/olado/doT',
        notes: [],
        platform: 'GitHub',
        tests: [
            'http://olado.github.io/doT/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.doT'
            ]
        ]
    },
    versions: {
        references: [
            'window.doT.version'
        ]
    }
}
,
// src/gitHub/olivernn/lunr.js.js
{
    properties: {
        link: 'https://github.com/olivernn/lunr.js',
        platform: 'GitHub',
        tests: [
            'https://trello.com/b/Gh237agh/indigo-me',
            'https://vanillaforums.com/en/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.lunr',
                'window.lunr.tokenizer'
            ]
        ]
    },
    versions: {
        references: [
            'window.lunr.version'
        ]
    }
}
,
// src/gitHub/openexchangerates/accounting.js.js
{
    properties: {
        link: 'https://github.com/openexchangerates/accounting.js',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.accounting',
                'window.accounting.formatMoney'
            ]
        ]
    },
    versions: {
        references: [
            'window.accounting.version'
        ]
    }
}
,
// src/gitHub/openlayers/ol2.js
{
    properties: {
        link: 'https://github.com/openlayers/ol2',
        notes: [],
        platform: 'GitHub',
        tests: [
            'https://www.mercycorps.org/articles/climate-change-affects-poverty',
            'http://openlayers.org/two/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.OpenLayers'
            ]
        ]
    },
    versions: {
        references: [
            'window.OpenLayers.VERSION_NUMBER'
        ]
    }
}
,
// src/gitHub/openresty/openresty.js
{
    dependencies: [
        'https://github.com/nginx/nginx'
    ],
    properties: {
        donate: {
            link: 'https://openresty.org/en/donate-online.html'
        },
        link: 'https://github.com/openresty/openresty',
        name: 'OpenResty',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        patterns: {
            headers: [
                [
                    /server\: openresty/i
                ]
            ]
        }
    }
}
,
// src/gitHub/oyvindkinsey/easyXDM.js
{
    properties: {
        link: 'https://github.com/oyvindkinsey/easyXDM',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.easyXDM'
            ]
        ]
    },
    versions: {
        references: [
            'window.easyXDM.version'
        ]
    }
}
,
// src/gitHub/palantir/plottable.js
{
    properties: {
        link: 'https://github.com/palantir/plottable',
        notes: [],
        platform: 'GitHub',
        tags: [
            'd3',
            'charts'
        ],
        tests: [
            'https://bower.io/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.Plottable'
            ]
        ]
    },
    versions: {
        references: [
            'window.Plottable.version'
        ]
    }
}
,
// src/gitHub/paldepind/flyd.js
{
    properties: {
        link: 'https://github.com/paldepind/flyd',
        notes: [],
        platform: 'GitHub',
        tests: [
            'http://paldepind.github.io/flyd/examples/sum/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.flyd',
                'window.flyd.stream'
            ]
        ]
    }
}
,
// src/gitHub/paperjs/paper.js.js
{
    properties: {
        link: 'https://github.com/paperjs/paper.js',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.paper'
            ]
        ]
    },
    versions: {
        references: [
            'window.paper.version'
        ]
    }
}
,
// src/gitHub/parcel-bundler/parcel.js
{
    properties: {
        link: 'https://github.com/parcel-bundler/parcel',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.parcelRequire'
            ]
        ]
    }
}
,
// src/gitHub/peachananr/tiltedpage_scroll.js
{
    properties: {
        link: 'https://github.com/peachananr/tiltedpage_scroll',
        notes: [],
        platform: 'GitHub',
        tests: [
            'http://www.thepetedesign.com/demos/tiltedpage_scroll_demo.html'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.jQuery.fn.tiltedpage_scroll'
            ]
        ]
    }
}
,
// src/gitHub/php/php-src.js
{
    properties: {
        link: 'https://github.com/php/php-src',
        platform: 'GitHub',
        tests: [
            'http://www.cbc.radio-canada.ca/en/'
        ],
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'PHP',
            sections: []
        }
    },
    tests: {
        patterns: {
            headers: [
                [
                    /x\-powered\-by\: php/i
                ]
            ]
        }
    },
    versions: {
        patterns: {
            headers: [
                /x\-powered\-by\: php\/([0-9\.]+)/i
            ]
        }
    }
}
,
// src/gitHub/phusion/passenger.js
{
    properties: {
        link: 'https://github.com/phusion/passenger',
        notes: [],
        platform: 'GitHub',
        tests: [
            'https://blog.ghost.org/'
        ],
        type: 'repository'
    },
    tests: {
        patterns: {
            headers: [
                [
                    /x\-powered\-by.+Phusion Passenger/i
                ]
            ]
        }
    },
    versions: {
        patterns: {
            headers: [
                /x\-powered\-by.+Phusion Passenger ([0-9\.]+)/i
            ]
        }
    }
}
,
// src/gitHub/pixxelfactory/jInvertScroll.js
{
    properties: {
        link: 'https://github.com/pixxelfactory/jInvertScroll',
        platform: 'GitHub',
        tests: [
            'https://www.pixxelfactory.net/jInvertScroll/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.jQuery.jInvertScroll'
            ]
        ]
    }
}
,
// src/gitHub/pmsi-alignalytics/dimple.js
{
    properties: {
        link: 'https://github.com/pmsi-alignalytics/dimple',
        platform: 'GitHub',
        tests: [
            'http://dimplejs.org/examples_viewer.html?id=lines_dual_measure'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.dimple',
                'window.dimple.chart',
                'window.dimple.plot'
            ]
        ]
    },
    versions: {
        references: [
            'window.dimple.version'
        ]
    }
}
,
// src/gitHub/pure-css/pure.js
{
    properties: {
        link: 'https://github.com/pure-css/pure',
        notes: [],
        platform: 'GitHub',
        tags: [
            'css'
        ],
        tests: [
            'https://stores.kotisdesign.com/gimlet'
        ],
        type: 'repository'
    },
    tests: {
        patterns: {
            page: [
                [
                    /<div[^>]+class="[^"]*pure-u-(?:sm-|md-|lg-|xl-)?\d-\d/i
                ],
                [
                    /class="[^"]*pure-g[^"]*"/i
                ]
            ]
        }
    }
}
,
// src/gitHub/quilljs/quill.js
{
    properties: {
        link: 'https://github.com/quilljs/quill',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.Quill'
            ]
        ]
    },
    versions: {
        references: [
            'window.Quill.version'
        ]
    }
}
,
// src/gitHub/rails/rails.js
{
    properties: {
        link: 'https://github.com/AlloyTeam/AlloyFinger',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.AlloyFinger'
            ]
        ]
    }
}
,
// src/gitHub/rnmp/salvattore.js
{
    properties: {
        link: 'https://github.com/rnmp/salvattore',
        name: 'Salvattore',
        platform: 'GitHub',
        tests: [
            'https://www.allrecipes.com/recipes/367/desserts/pies/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.salvattore'
            ]
        ]
    }
}
,
// src/gitHub/robflaherty/jquery-scrolldepth.js
{
    properties: {
        link: 'https://github.com/robflaherty/jquery-scrolldepth',
        platform: 'GitHub',
        tags: [
            'google analytics',
            'scroll'
        ],
        test: [
            'https://blog.mozilla.org/firefox/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.jQuery.scrollDepth'
            ]
        ]
    }
}
,
// src/gitHub/rstacruz/jquery.transit.js
{
    properties: {
        link: 'https://github.com/rstacruz/jquery.transit',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.jQuery.transit'
            ]
        ]
    }
}
,
// src/gitHub/rstacruz/js2coffee.js
{
    properties: {
        link: 'https://github.com/rstacruz/js2coffee',
        platform: 'GitHub',
        tests: [
            'http://js2.coffee/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.js2coffee'
            ]
        ]
    },
    versions: {
        references: [
            'window.js2coffee.version'
        ]
    }
}
,
// src/gitHub/rstacruz/nprogress.js
{
    properties: {
        link: 'https://github.com/rstacruz/nprogress',
        platform: 'GitHub',
        tests: [
            'http://ricostacruz.com/nprogress/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.NProgress'
            ]
        ]
    },
    versions: {
        references: [
            'window.NProgress.version'
        ]
    }
}
,
// src/gitHub/running-coder/jquery-typeahead.js
{
    properties: {
        link: 'https://github.com/running-coder/jquery-typeahead',
        notes: [],
        platform: 'GitHub',
        see: [
            'https://github.com/twitter/typeahead.js'
        ],
        tags: [
            'jQuery'
        ],
        tests: [
            'http://www.runningcoder.org/jquerytypeahead/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.jQuery.fn.typeahead',
                'window.Typeahead'
            ]
        ]
    },
    versions: {
        references: [
            'window.Typeahead.version'
        ]
    }
}
,
// src/gitHub/sachinchoolur/lightGallery.js
{
    properties: {
        link: 'https://github.com/sachinchoolur/lightGallery',
        notes: [],
        platform: 'GitHub',
        tests: [],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.jQuery.fn.lightGallery',
                'window.jQuery.fn.lightGallery.modules'
            ]
        ]
    }
}
,
// src/gitHub/sachinchoolur/lightgallery.js.js
{
    properties: {
        link: 'https://github.com/sachinchoolur/lightgallery.js',
        notes: [],
        platform: 'GitHub',
        tests: [
            'https://sachinchoolur.github.io/lightgallery.js/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.lightGallery'
            ]
        ]
    }
}
,
// src/gitHub/sachinchoolur/lightslider.js
{
    properties: {
        link: 'https://github.com/sachinchoolur/lightslider',
        notes: [],
        platform: 'GitHub',
        tests: [
            'http://sachinchoolur.github.io/lightslider/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.jQuery.fn.lightSlider'
            ]
        ]
    }
}
,
// src/gitHub/scaron/prettyphoto.js
{
    properties: {
        link: 'https://github.com/scaron/prettyphoto',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.jQuery.fn.prettyPhoto'
            ]
        ]
    }
}
,
// src/gitHub/sciactive/pnotify.js
{
    properties: {
        link: 'https://github.com/sciactive/pnotify',
        notes: [],
        platform: 'GitHub',
        tests: [
            'https://sciactive.com/pnotify/',
            'https://packagemapping.com/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.PNotify'
            ]
        ]
    },
    versions: {
        references: [
            'window.PNotify.prototype.version'
        ]
    }
}
,
// src/gitHub/scottjehl/Respond.js
{
    properties: {
        link: 'https://github.com/scottjehl/Respond',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.respond'
            ]
        ]
    }
}
,
// src/gitHub/scottjehl/picturefill.js
{
    properties: {
        link: 'https://github.com/scottjehl/picturefill',
        name: 'Picturefill',
        platform: 'GitHub',
        tests: [
            'https://www.newyorkjets.com/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.picturefill'
            ]
        ]
    }
}
,
// src/gitHub/segmentio/analytics.js.js
{
    properties: {
        link: 'https://github.com/segmentio/analytics.js',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.analytics.Integrations'
            ]
        ]
    },
    versions: {
        references: [
            'window.analytics.VERSION'
        ]
    }
}
,
// src/gitHub/select2/select2.js
{
    properties: {
        link: 'https://github.com/select2/select2',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.Select2'
            ],
            [
                'window.jQuery.fn.select2'
            ]
        ]
    }
}
,
// src/gitHub/selectize/selectize.js.js
{
    properties: {
        alternatives: [
            'https://github.com/harvesthq/chosen',
            'https://github.com/select2/select2',
            'https://github.com/xoxco/jQuery-Tags-Input'
        ],
        link: 'https://github.com/selectize/selectize.js',
        notes: [],
        platform: 'GitHub',
        tests: [
            'http://selectize.github.io/selectize.js/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.Selectize',
                'window.Selectize.defaults'
            ],
            [
                'window.jQuery.fn.selectize',
                'window.jQuery.fn.selectize.defaults'
            ]
        ]
    }
}
,
// src/gitHub/simonwhitaker/github-fork-ribbon-css.js
{
    properties: {
        link: 'https://github.com/simonwhitaker/github-fork-ribbon-css',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        patterns: {
            page: [
                [/\[github\-fork\-ribbon\]/i]
            ]
        }
    }
}
,
// src/gitHub/sindresorhus/screenfull.js.js
{
    properties: {
        link: 'https://github.com/sindresorhus/screenfull.js',
        notes: [],
        platform: 'GitHub',
        tests: [
            'https://sindresorhus.com/screenfull.js/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.screenfull'
            ]
        ]
    }
}
,
// src/gitHub/slevithan/xregexp.js
{
    properties: {
        link: 'https://github.com/slevithan/xregexp',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.XRegExp',
                'window.XRegExp.version'
            ]
        ]
    },
    versions: {
        references: [
            'window.XRegExp.version'
        ]
    }
}
,
// src/gitHub/snapappointments/bootstrap-select.js
{
    properties: {
        link: 'https://github.com/snapappointments/bootstrap-select',
        platform: 'GitHub',
        tags: [
            'bootstrap',
            'dropdown'
        ],
        tests: [
            'https://snappa.com/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.jQuery.fn.selectpicker'
            ]
        ]
    }
}
,
// src/gitHub/snookca/prepareTransition.js
{
    properties: {
        link: 'https://github.com/snookca/prepareTransition',
        name: 'prepareTransition jQuery Plugin',
        platform: 'GitHub',
        tests: [
            'https://ca.octobersveryown.com/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.jQuery.fn.prepareTransition'
            ]
        ]
    }
}
,
// src/gitHub/socketio/socket.io.js
{
    properties: {
        link: 'https://github.com/socketio/socket.io',
        notes: [],
        platform: 'GitHub',
        tests: [
            'https://socket.io/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.io',
                'window.io.Socket'
            ]
        ]
    }
}
,
// src/gitHub/sockjs/sockjs-client.js
{
    properties: {
        link: 'https://github.com/sockjs/sockjs-client',
        platform: 'GitHub',
        tests: [
            'https://www.nytimes.com/interactive/2016/sports/olympics/rio-olympics-photo-firehose.html'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.SockJS',
                'window.SockJS.prototype._debug',
                'window.SockJS.prototype._dispatchOpen'
            ]
        ]
    },
    versions: {
        references: [
            'window.SockJS.version'
        ]
    }
}
,
// src/gitHub/sofish/pen.js
{
    properties: {
        link: 'https://github.com/sofish/pen',
        notes: [],
        platform: 'GitHub',
        tests: [
            'https://sofish.github.io/pen/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.Pen',
                'window.Pen.prototype.toMd'
            ]
        ]
    }
}
,
// src/gitHub/somewebmedia/hc-sticky.js
{
    properties: {
        link: 'https://github.com/somewebmedia/hc-sticky',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.hcSticky'
            ],
            [
                'window.jQuery.fn.hcSticky'
            ]
        ]
    }
}
,
// src/gitHub/sorccu/cufon.js
{
    properties: {
        link: 'https://github.com/sorccu/cufon',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.Cufon'
            ]
        ]
    }
}
,
// src/gitHub/soundar24/roundSlider.js
{
    properties: {
        link: 'https://github.com/soundar24/roundSlider',
        platform: 'GitHub',
        tests: [
            'https://roundsliderui.com/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.jQuery.fn.roundSlider'
            ]
        ]
    },
    versions: {
        references: [
            'window.jQuery.fn.roundSlider.prototype.version'
        ]
    }
}
,
// src/gitHub/sphinx-doc/sphinx.js
{
    properties: {
        link: 'https://github.com/sphinx-doc/sphinx',
        notes: [
            'https://i.imgur.com/vTzFde7.jpg'
        ],
        platform: 'GitHub',
        tests: [
            'http://varnish-cache.org/'
        ],
        type: 'repository'
    },
    tests: {
        patterns: {
            page: [
                [
                    /Powered by.{0,200}Sphinx/i
                ]
            ]
        },
        references: [
            [
                'window.DOCUMENTATION_OPTIONS',
                'window.DOCUMENTATION_OPTIONS.URL_ROOT'
            ]
        ]
    }
}
,
// src/gitHub/square/crossfilter.js
{
    properties: {
        link: 'https://github.com/square/crossfilter',
        notes: [],
        platform: 'GitHub',
        tests: [
            'http://square.github.io/crossfilter/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.crossfilter',
                'window.crossfilter.bisect'
            ]
        ]
    },
    versions: {
        references: [
            'window.crossfilter.version'
        ]
    }
}
,
// src/gitHub/staaky/strip.js
{
    properties: {
        licenses: {
            commercial: {
                paid: true
            }
        },
        link: 'https://github.com/staaky/strip',
        notes: [],
        platform: 'GitHub',
        tests: [],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.Strip',
                'window.Strip.Skins'
            ]
        ]
    },
    versions: {
        references: [
            'window.Strip.version'
        ]
    }
}
,
// src/gitHub/stripe/jquery.payment.js
{
    properties: {
        link: 'https://github.com/stripe/jquery.payment',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.jQuery.fn.payment'
            ]
        ]
    }
}
,
// src/gitHub/styled-components/styled-components.js
{
    properties: {
        link: 'https://github.com/styled-components/styled-components',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        patterns: {
            page: [
                [/data\-styled\-components/i]
            ]
        }
    }
}
,
// src/gitHub/sweetalert2/sweetalert2.js
{
    properties: {
        donate: {
            link: 'https://www.patreon.com/limonte'
        },
        link: 'https://github.com/sweetalert2/sweetalert2',
        notes: [],
        platform: 'GitHub',
        tests: [
            'https://sweetalert2.github.io/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.swal',
                'window.swal.setDefaults',
            ],
            [
                'window.Swal',
                'window.Swal.setDefaults',
            ],
            [
                'window.sweetAlert',
                'window.sweetAlert.setDefaults',
            ],
            [
                'window.SweetAlert',
                'window.SweetAlert.setDefaults',
            ],
            [
                'window.Sweetalert2',
                'window.Sweetalert2.setDefaults',
            ]
        ]
    },
    versions: {
        references: [
            'window.swal.version',
            'window.Swal.version',
            'window.sweetAlert.version',
            'window.SweetAlert.version',
            'window.Sweetalert2.version'
        ]
    }
}
,
// src/gitHub/swfobject/swfobject.js
{
    properties: {
        link: 'https://github.com/swfobject/swfobject',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.swfobject'
            ]
        ]
    }
}
,
// src/gitHub/syntaxhighlighter/syntaxhighlighter.js
{
    properties: {
        donate: {
            link: 'http://alexgorbatchev.com/SyntaxHighlighter/donate.html'
        },
        link: 'https://github.com/syntaxhighlighter/syntaxhighlighter',
        notes: [],
        platform: 'GitHub',
        tests: [
            'http://alexgorbatchev.com/SyntaxHighlighter/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.SyntaxHighlighter'
            ]
        ]
    }
}
,
// src/gitHub/systemjs/systemjs.js
{
    properties: {
        link: 'https://github.com/systemjs/systemjs',
        notes: [],
        platform: 'GitHub',
        tests: [
            'https://ng-semantic.herokuapp.com/#/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.System',
                'window.System.import',
                'window.System.register'
            ]
        ]
    },
    versions: {
        references: [
            'window.System.version'
        ]
    }
}
,
// src/gitHub/ten1seven/what-input.js
{
    properties: {
        link: 'https://github.com/ten1seven/what-input',
        notes: [],
        platform: 'GitHub',
        tests: [
            'https://ten1seven.github.io/what-input/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.whatInput'
            ]
        ]
    }
}
,
// src/gitHub/timdown/rangy.js
{
    properties: {
        link: 'https://github.com/timdown/rangy',
        notes: [],
        platform: 'GitHub',
        tests: [
            'http://jakiestfu.github.io/Medium.js/docs/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.rangy'
            ]
        ]
    },
    versions: {
        references: [
            'window.rangy.version'
        ]
    }
}
,
// src/gitHub/tinymce/tinymce.js
{
    properties: {
        link: 'https://github.com/tinymce/tinymce',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.tinyMCE'
            ]
        ]
    },
    versions: {
        statements: [
            'window.tinyMCE.majorVersion + \'.\' + window.tinyMCE.minorVersion'
        ]
    }
}
,
// src/gitHub/tmont/sunlight.js
{
    properties: {
        link: 'https://github.com/tmont/sunlight',
        notes: [],
        platform: 'GitHub',
        tests: [
            'http://sunlightjs.com/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.Sunlight'
            ]
        ]
    },
    versions: {
        references: [
            'window.Sunlight.version'
        ]
    }
}
,
// src/gitHub/totaljs/framework.js
{
    dependencies: [
        'https://github.com/nodejs/node'
    ],
    properties: {
        link: 'https://github.com/totaljs/framework',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        patterns: {
            headers: [
                [
                    /x\-powered\-by.{0,20}total\.js/i
                ]
            ]
        }
    }
}
,
// src/gitHub/transloadit/uppy.js
{
    properties: {
        link: 'https://github.com/transloadit/uppy',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.Uppy'
            ]
        ]
    }
}
,
// src/gitHub/travist/jsencrypt.js
{
    properties: {
        link: 'https://github.com/travist/jsencrypt',
        notes: [],
        platform: 'GitHub',
        tags: [
            'encryption',
            'security'
        ],
        tests: [
            'https://makitweb.com/take-screenshot-of-webpage-with-html2canvas/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.JSEncrypt'
            ]
        ]
    },
    versions: {
        references: [
            'window.JSEncrypt.version'
        ]
    }
}
,
// src/gitHub/turbolinks/turbolinks.js
{
    properties: {
        link: 'https://github.com/turbolinks/turbolinks',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.Turbolinks'
            ]
        ]
    }
}
,
// src/gitHub/tuupola/jquery_lazyload.js
{
    properties: {
        link: 'https://github.com/tuupola/jquery_lazyload',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.jQuery.fn.lazyload',
                'window.window.jQuery.belowthefold',
                'window.window.jQuery.rightoffold'
            ]
        ]
    }
}
,
// src/gitHub/twbs/bootstrap.js
{
    properties: {
        link: 'https://github.com/twbs/bootstrap',
        name: 'Bootstrap',
        notes: [
            'https://i.imgur.com/BrbdjkX.jpg'
        ],
        platform: 'GitHub',
        tests: [
            'https://www.bootstrapcdn.com/'
        ],
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'Bootstrap_(front-end_framework)',
            sections: []
        }
    },
    tests: {
        patterns: {
            page: [
                [
                    /\<link[^>]+\/bootstrap\//i
                ]
            ]
        },
        references: [
            [
                'window.jQuery.fn.tooltip'
            ]
        ]
    },
    versions: {
        patterns: {
            page: [
                /\<link[^>]+\/bootstrap\/([0-9\.]+)\//i
            ]
        },
        references: [
            'window.jQuery.fn.tooltip.Constructor.VERSION'
        ]
    }
}
,
// src/gitHub/twitter/hogan.js.js
{
    properties: {
        link: 'https://github.com/twitter/hogan.js',
        notes: [
            'https://i.imgur.com/6SVB6Yc.jpg'
        ],
        platform: 'GitHub',
        tests: [
            'https://ocs.ca/collections/dried-flower-cannabis?page=1'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.Hogan'
            ]
        ]
    },
    versions: {
        patterns: {
            page: [
                /hogan\.js\/([0-9\.]+)\/hogan/i
            ]
        }
    }
}
,
// src/gitHub/twitter/twemoji.js
{
    properties: {
        link: 'https://github.com/twitter/twemoji',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.twemoji.parse'
            ]
        ]
    }
}
,
// src/gitHub/twitter/typeahead.js.js
{
    properties: {
        link: 'https://github.com/twitter/typeahead.js',
        platform: 'GitHub',
        see: [
            'https://github.com/running-coder/jquery-typeahead'
        ],
        tests: [
            'http://twitter.github.io/typeahead.js/'
        ],
        type: 'repository'
    },
    tests: {
        statements: [
            [
                'window.jQuery(\'html\').typeahead && !window.Typeahead'
            ]
        ]
    }
}
,
// src/gitHub/typekit/webfontloader.js
{
    properties: {
        link: 'https://github.com/typekit/webfontloader',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.WebFont'
            ]
        ]
    }
}
,
// src/gitHub/upstage/showup.js
{
    properties: {
        link: 'https://github.com/upstage/showup',
        platform: 'GitHub',
        tests: [
            'http://assemble.io/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.jQuery.fn.showUp'
            ]
        ]
    }
}
,
// src/gitHub/urish/angular-moment.js
{
    properties: {
        link: 'https://github.com/urish/angular-moment',
        notes: [],
        platform: 'GitHub',
        tags: [
            'angularjs',
            'moment'
        ],
        tests: [
            'https://genius.com/'
        ],
        type: 'repository'
    },
    tests: {
        statements: [
            [
                'window.angular.module(\'angularMoment\')'
            ]
        ]
    }
}
,
// src/gitHub/uxsolutions/bootstrap-datepicker.js
{
    properties: {
        link: 'https://github.com/uxsolutions/bootstrap-datepicker',
        platform: 'GitHub',
        tests: [
            'https://uxsolutions.github.io/bootstrap-datepicker/?markup=input&format=&weekStart=&startDate=&endDate=&startView=0&minViewMode=0&maxViewMode=4&todayBtn=false&clearBtn=false&language=en&orientation=auto&multidate=&multidateSeparator=&keyboardNavigation=on&forceParse=on#sandbox'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.jQuery.fn.datepicker.DPGlobal'
            ]
        ]
    },
    versions: {
        references: [
            'window.jQuery.fn.datepicker.version'
        ]
    }
}
,
// src/gitHub/vanilla/vanilla.js
{
    properties: {
        link: 'https://github.com/vanilla/vanilla',
        platform: 'GitHub',
        tests: [
            'https://open.vanillaforums.com/'
        ],
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'Vanilla_Forums',
            sections: []
        }
    },
    tests: {
        patterns: {
            page: [
                [
                    /<body[^>]id=\"(?:DiscussionsPage|vanilla)/i
                ]
            ]
        },
        references: [
            [
                'window.Vanilla',
                'window.Vanilla.parent',
                'window.Vanilla.scrollTo'
            ],
            [
                'window.vanillaforum'
            ]
        ]
    }
}
,
// src/gitHub/vdw/Tabslet.js
{
    properties: {
        link: 'https://github.com/vdw/Tabslet',
        notes: [],
        platform: 'GitHub',
        tests: [
            'http://vdw.github.io/Tabslet/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.jQuery.fn.tabslet'
            ]
        ]
    }
}
,
// src/gitHub/videojs/video.js.js
{
    properties: {
        link: 'https://github.com/videojs/video.js',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.videojs'
            ]
        ]
    },
    versions: {
        references: [
            'window.videojs.VERSION'
        ]
    }
}
,
// src/gitHub/vimeo/player.js.js
{
    properties: {
        link: 'https://github.com/vimeo/player.js',
        platform: 'GitHub',
        tags: [
            'video',
            'vimeo'
        ],
        tests: [
            'https://snappa.com/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.Vimeo.Player'
            ]
        ]
    }
}
,
// src/gitHub/virgiliud/jquery.anchorScroll.js
{
    properties: {
        link: 'https://github.com/virgiliud/jquery.anchorScroll',
        platform: 'GitHub',
        tests: [
            'http://www.virgiliudiaconu.com/work/anchor-scroll'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.jQuery.anchorScroll'
            ]
        ]
    }
}
,
// src/gitHub/vitch/jScrollPane.js
{
    properties: {
        link: 'https://github.com/vitch/jScrollPane',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.jQuery.fn.jScrollPane'
            ]
        ]
    }
}
,
// src/gitHub/vuejs/vue-router.js
{
    properties: {
        donate: {
            link: 'https://vuejs.org/support-vuejs/'
        },
        link: 'https://github.com/vuejs/vue-router',
        platform: 'GitHub',
        tests: [
            'https://element.eleme.io/#/en-US'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.VueRouter'
            ]
        ]
    },
    versions: {
        references: [
            'window.VueRouter.version'
        ]
    }
}
,
// src/gitHub/vuejs/vue.js
{
    properties: {
        donate: {
            link: 'https://vuejs.org/support-vuejs/'
        },
        link: 'https://github.com/vuejs/vue',
        name: 'Vue.js',
        platform: 'GitHub',
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'Vue.js',
            sections: []
        }
    },
    tests: {
        patterns: {
            page: [
                [/data\-vue\-meta/i],
                [/data\-vue\-meta\-server\-rendered/i]
            ]
        },
        references: [
            [
                'window.Vue'
            ],
            [
                'window.__VUE_HOT_MAP__'
            ]
        ]
    },
    versions: {
        references: [
            'window.Vue.version'
        ]
    }
}
,
// src/gitHub/w3co/jcf.js
{
    properties: {
        link: 'https://github.com/w3co/jcf',
        platform: 'GitHub',
        tests: [
            'https://www.psd2html.com/js-custom-forms/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.jcf',
                'window.jcf.addModule'
            ]
        ]
    },
    versions: {
        references: [
            'window.jcf.version'
        ]
    }
}
,
// src/gitHub/weareoutman/clockpicker.js
{
    properties: {
        link: 'https://github.com/weareoutman/clockpicker',
        notes: [],
        platform: 'GitHub',
        tests: [
            'http://weareoutman.github.io/clockpicker/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.jQuery.fn.clockpicker'
            ]
        ]
    }
}
,
// src/gitHub/webpack/webpack.js
{
    properties: {
        link: 'https://github.com/webpack/webpack',
        platform: 'GitHub',
        tests: [
            'https://www.cbc.ca/'
        ],
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'Webpack',
            sections: []
        }
    },
    tests: {
        references: [
            [
                'window.webpackJsonp'
            ],
            [
                'window.webpackManifest'
            ]
        ]
    }
}
,
// src/gitHub/wenzhixin/bootstrap-table.js
{
    properties: {
        link: 'https://github.com/wenzhixin/bootstrap-table',
        notes: [],
        platform: 'GitHub',
        tests: [
            'https://www.accountdock.com/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.jQuery.fn.bootstrapTable'
            ]
        ]
    }
}
,
// src/gitHub/wikimedia/mediawiki.js
{
    properties: {
        link: 'https://github.com/wikimedia/mediawiki',
        platform: 'GitHub',
        tests: [
            'https://en.wikipedia.org/wiki/Fire_at_Sea'
        ],
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'MediaWiki',
            sections: []
        }
    },
    tests: {
        patterns: {
            page: [
                [
                    /<meta[^>]+content\="MediaWiki /i
                ]
            ]
        }
    },
    versions: {
        patterns: {
            page: [
                /<meta[^>]+content\="MediaWiki ([^"]+)/i
            ]
        }
    }
}
,
// src/gitHub/wilddeer/Peppermint.js
{
    properties: {
        link: 'https://github.com/wilddeer/Peppermint',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.Peppermint'
            ]
        ],
        statements: [
            [
                'window.jQuery(\'test\').Peppermint'
            ]
        ]
    }
}
,
// src/gitHub/wilddeer/Sniffer.js
{
    properties: {
        link: 'https://github.com/wilddeer/Sniffer',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.Sniff',
                'window.Sniff.browser',
                'window.Sniff.features',
                'window.Sniff.os'
            ]
        ]
    }
}
,
// src/gitHub/wilddeer/stickyfill.js
{
    properties: {
        link: 'https://github.com/wilddeer/stickyfill',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.Stickyfill',
                'window.Stickyfill.stickies'
            ]
        ]
    }
}
,
// src/gitHub/woocommerce/FlexSlider.js
{
    properties: {
        link: 'https://github.com/woocommerce/FlexSlider',
        notes: [],
        platform: 'GitHub',
        tests: [
            'https://woocommerce.com/flexslider/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.jQuery.fn.flexslider'
            ]
        ]
    }
}
,
// src/gitHub/woocommerce/selectWoo.js
{
    properties: {
        link: 'https://github.com/woocommerce/selectWoo',
        notes: [],
        platform: 'GitHub',
        tests: [
            'https://www.bundestag.de/en/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.jQuery.fn.selectWoo'
            ]
        ]
    }
}
,
// src/gitHub/woocommerce/woocommerce.js
{
    properties: {
        link: 'https://github.com/woocommerce/woocommerce',
        notes: [],
        platform: 'GitHub',
        tests: [
            'https://woocommerce.com/flexslider/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.woocommerce_params'
            ]
        ]
    },
    versions: {
        patterns: {
            page: [
                /<meta[^>]+content\="WooCommerce ([0-9\.]+)/i
            ]
        }
    }
}
,
// src/gitHub/worseisbetter/galleria.js
{
    properties: {
        link: 'https://github.com/worseisbetter/galleria',
        notes: [],
        platform: 'GitHub',
        tests: [
            'https://galleria.io/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.Galleria',
                'window.Galleria.MAC',
                'window.Galleria.DATA'
            ]
        ]
    },
    versions: {
        references: [
            'window.Galleria.version'
        ]
    }
}
,
// src/gitHub/wycats/handlebars.js.js
{
    implies: [
        'gitHub/emberjs/ember.js'
    ],
    properties: {
        link: 'https://github.com/wycats/handlebars.js',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.Handlebars'
            ]
        ]
    },
    versions: {
        references: [
            'window.Handlebars.VERSION'
        ]
    }
}
,
// src/gitHub/xdan/jodit.js
{
    properties: {
        link: 'https://github.com/xdan/jodit',
        notes: [],
        platform: 'GitHub',
        tests: [
            'https://xdsoft.net/jodit/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.Jodit'
            ]
        ]
    }
}
,
// src/gitHub/xoxco/jQuery-Tags-Input.js
{
    properties: {
        link: 'https://github.com/xoxco/jQuery-Tags-Input',
        notes: [],
        platform: 'GitHub',
        tests: [
            'http://xoxco.com/projects/code/tagsinput/example.html'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.jQuery.fn.tagsInput',
                'window.jQuery.fn.tagsInput.importTags'
            ]
        ]
    }
}
,
// src/gitHub/yabwe/medium-editor.js
{
    properties: {
        link: 'https://github.com/yabwe/medium-editor',
        notes: [],
        platform: 'GitHub',
        tests: [
            'https://yabwe.github.io/medium-editor/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.MediumEditor'
            ]
        ]
    },
    versions: {
        statements: [
            'window.MediumEditor.version.toString()'
        ]
    }
}
,
// src/gitHub/yiisoft/yii.js
{
    dependencies: [
        'https://github.com/php/php-src'
    ],
    properties: {
        link: 'https://github.com/yiisoft/yii',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        patterns: {
            cookies: [
                [
                    /YII_CSRF_TOKEN/i
                ]
            ]
        }
    }
}
,
// src/gitHub/yui/yui3.js
{
    properties: {
        link: 'https://github.com/yui/yui3',
        platform: 'GitHub',
        tests: [
            'https://www.buildingabetterresponse.org/enrol/index.php?id=26'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.YUI'
            ]
        ]
    },
    versions: {
        references: [
            'window.YUI.version'
        ]
    }
}
,
// src/gitHub/zachleat/BixText.js
{
    properties: {
        link: 'https://github.com/zachleat/BigText',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.BigText',
                'window.BigText.noConflict'
            ]
        ],
        statements: [
            [
                'window.jQuery(\'body\').bigtext'
            ]
        ]
    }
}
,
// src/gitHub/zeit/next.js.js
{
    properties: {
        link: 'https://github.com/zeit/next.js',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.next',
                'window.next.router'
            ],
            [
                'window.__NEXT_DATA__'
            ]
        ]
    }
}
,
// src/gitHub/zenorocha/clipboard.js.js
{
    properties: {
        link: 'https://github.com/zenorocha/clipboard.js',
        notes: [
            'https://i.imgur.com/RVXNiwf.jpg'
        ],
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        patterns: {
            page: [
                [
                    /libs\/clipboard\.js\/[^\/]+\/clipboard\.js/i
                ],
                [
                    /libs\/clipboard\.js\/[^\/]+\/clipboard\.min\.js/i
                ]
            ]
        },
        references: [
            [
                'window.ClipboardJS'
            ]
        ]
    },
    versions: {
        patterns: {
            page: [
                /libs\/clipboard\.js\/([^\/]+)\/clipboard\.js/i,
                /libs\/clipboard\.js\/([^\/]+)\/clipboard\.min\.js/i
            ]
        }
    }
}
,
// src/gitHub/zeroclipboard/zeroclipboard.js
{
    properties: {
        link: 'https://github.com/zeroclipboard/zeroclipboard',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.ZeroClipboard'
            ]
        ]
    },
    versions: {
        references: [
            'window.ZeroClipboard.version'
        ]
    }
}
,
// src/gitHub/zloirock/core-js.js
{
    properties: {
        link: 'https://github.com/zloirock/core-js',
        platform: 'GitHub',
        tests: [
            'https://trello.com/b/Gh237agh/indigo-me'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.core',
                'window.core.Array'
            ]
        ]
    },
    versions: {
        references: [
            'window.core.version'
        ]
    }
}
,
// src/gitHub/zohararad/audio5js.js
{
    properties: {
        link: 'https://github.com/zohararad/audio5js',
        name: 'Audio5js',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.Audio5js'
            ]
        ]
    }
}
,
// src/gitHub/zurb/foundation-sites.js
{
    properties: {
        link: 'https://github.com/zurb/foundation-sites',
        platform: 'GitHub',
        tests: [
            'https://foundation.zurb.com/'
        ],
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'Foundation_(framework)',
            sections: []
        }
    },
    tests: {
        references: [
            [
                'window.Foundation'
            ]
        ]
    },
    versions: {
        references: [
            'window.Foundation.version'
        ]
    }
}

]
