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
        type: 'repository'
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
        type: 'repository'
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
        type: 'repository'
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
// src/gitHub/OwlCarousel2/OwlCarousel2.js
{
    properties: {
        link: 'https://github.com/OwlCarousel2/OwlCarousel2',
        platform: 'GitHub',
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
// src/gitHub/Polymer/polymer.js
{
    properties: {
        link: 'https://github.com/Polymer/polymer',
        platform: 'GitHub',
        type: 'repository'
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
            'window.skrollr.version'
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
// src/gitHub/WordPress/WordPress.js
{
    dependencies: [
        'gitHub/php/php-src'
    ],
    properties: {
        donate: {
            link: 'https://wordpressfoundation.org/donate/'
        },
        link: 'https://github.com/WordPress/WordPress',
        platform: 'GitHub',
        type: 'repository'
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
        type: 'repository'
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
// src/gitHub/adobe-webplatform/Snap.svg.js
{
    properties: {
        link: 'https://github.com/adobe-webplatform/Snap.svg',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.Snap'
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
// src/gitHub/ajaxorg/ace.js
{
    properties: {
        link: 'https://github.com/ajaxorg/ace',
        platform: 'GitHub',
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
        type: 'repository'
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
        type: 'repository'
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
        type: 'repository'
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
        type: 'repository'
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
        type: 'repository'
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
// src/gitHub/apache/httpd.js
{
    properties: {
        donate: {
            link: 'https://www.apache.org/foundation/contributing.html'
        },
        link: 'https://github.com/apache/httpd',
        platform: 'GitHub',
        type: 'repository'
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
        'gitHub/nodejs/node'
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
// src/gitHub/bcit-ci/CodeIgniter.js
{
    dependencies: [
        'gitHub/php/php-src'
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
        'gitHub/php/php-src'
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
        'gitHub/yiisoft/yii'
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
        type: 'repository'
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
// src/gitHub/desandro/imagesloaded.js
{
    properties: {
        link: 'https://github.com/desandro/imagesloaded',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        statements: [
            [
                'window.jQuery(\'html\').imagesLoaded'
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
        'gitHub/python/cpython'
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
                ['csrfmiddlewaretoken']
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
        'gitHub/php/php-src'
    ],
    properties: {
        donate: {
            link: 'https://www.drupal.org/association/donate'
        },
        link: 'https://github.com/drupal/drupal',
        platform: 'GitHub',
        type: 'repository'
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
        type: 'repository'
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
        type: 'repository'
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
        type: 'repository'
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
        type: 'repository'
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
            'window.React.version'
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
        link: 'https://github.com/fengyuanchen/datepicker',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.jQuery.fn.datepicker',
                'window.jQuery.fn.datepicker.noConflict'
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
            'https://1password.com/'
        ],
        type: 'repository'
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
        type: 'repository'
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
// src/gitHub/google/recaptcha.js
{
    properties: {
        link: 'https://github.com/google/recaptcha',
        platform: 'GitHub',
        type: 'repository'
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
        link: 'https://github.com/highcharts/highcharts',
        platform: 'GitHub',
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
// src/gitHub/jackocnr/intl-tel-input.js
{
    properties: {
        donate: {
            link: 'https://www.paypal.me/jackoconnor/1usd'
        },
        link: 'https://github.com/jackocnr/intl-tel-input',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.jQuery.fn.intlTelInput'
            ]
        ]
    },
    versions: {
        references: [
            'window.jQuery.fn.intlTelInput.version'
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
// src/gitHub/jashkenas/backbone.js
{
    dependencies: [
        'gitHub/jashkenas/underscore'
    ],
    properties: {
        link: 'https://github.com/jashkenas/backbone',
        platform: 'GitHub',
        type: 'repository'
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
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window._',
                'window._.each',
                '!window._.at'
            ]
        ]
    },
    versions: {
        references: [
            'window._.VERSION'
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
        type: 'repository'
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
                'window.jsbinified'
            ]
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
            'https://appsumo.com/stencil-2018/'
        ],
        type: 'repository'
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
        type: 'repository'
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
// src/gitHub/kenwheeler/slick.js
{
    properties: {
        link: 'https://github.com/kenwheeler/slick',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        statements: [
            ['$(\'body\').slick']
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
        'gitHub/php/php-src'
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
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window._.at'
            ]
        ]
    },
    versions: {
        references: [
            'window._.VERSION'
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
            'https://www.tsx.com/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.jQuery.fn.swipe',
                'window.jQuery.fn.swipe.directions'
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
// src/gitHub/meteor/meteor.js
{
    properties: {
        link: 'https://github.com/meteor/meteor',
        platform: 'GitHub',
        type: 'repository'
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
        type: 'repository'
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
        type: 'repository'
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
// src/gitHub/netlify/netlify-cms.js
{
    properties: {
        link: 'https://github.com/netlify/netlify-cms',
        platform: 'GitHub',
        tests: [
            'https://www.netlifycms.org/'
        ],
        type: 'repository'
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
        type: 'repository'
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
            'https://trello.com/b/Gh237agh/indigo-me'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.lunr'
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
        'gitHub/nginx/nginx'
    ],
    properties: {
        donate: {
            link: 'https://openresty.org/en/donate-online.html'
        },
        link: 'https://github.com/openresty/openresty',
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
// src/gitHub/php/php-src.js
{
    properties: {
        link: 'https://github.com/php/php-src',
        platform: 'GitHub',
        type: 'repository'
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
        platform: 'GitHub',
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
        'gitHub/nodejs/node'
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
        notes: [
            'https://i.imgur.com/BrbdjkX.jpg'
        ],
        platform: 'GitHub',
        tests: [
            'https://www.bootstrapcdn.com/'
        ],
        type: 'repository'
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
                'window.jQuery(\'html\').typeahead',
                '!window.Typeahead'
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
        platform: 'GitHub',
        type: 'repository'
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
        type: 'repository'
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
                'jQuery(\'test\').Peppermint'
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
// src/gitHub/yiisoft/yii.js
{
    dependencies: [
        'gitHub/php/php-src'
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
// src/gitHub/zurb/foundation-sites.js
{
    properties: {
        link: 'https://github.com/zurb/foundation-sites',
        platform: 'GitHub',
        type: 'repository'
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
