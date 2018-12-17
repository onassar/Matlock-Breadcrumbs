[
// src/AlloyTeam/AlloyFinger.js
{
    properties: {
        link: 'https://github.com/AlloyTeam/AlloyFinger',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            ['window.AlloyFinger']
        ]
    }
}
,
// src/CSSLint/csslint.js
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
            ['window.CSSLint']
        ]
    },
    versions: {
        references: [
            'window.CSSLint.version'
        ]
    }
}
,
// src/CanopyTax/single-spa.js
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
            ['window.singleSpaNavigate']
        ]
    }
}
,
// src/CodeSeven/toastr.js
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
            ['window.toastr']
        ]
    },
    versions: {
        references: [
            'window.toastr.version'
        ]
    }
}
,
// src/Eonasdan/bootstrap-datetimepicker.js
{
    properties: {
        link: 'https://github.com/Eonasdan/bootstrap-datetimepicker',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        statements: [
            ['window.jQuery(\'body\').datetimepicker']
        ]
    }
}
,
// src/FezVrasta/popper.js.js
{
    properties: {
        link: 'https://github.com/FezVrasta/popper.js',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            ['window.Popper']
        ]
    }
}
,
// src/FortAwesome/Font-Awesome.js
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
// src/JedWatson/react-select.js
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
// src/Leaflet/Leaflet.js
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
// src/MikeMcl/big.js.js
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
// src/Modernizr/Modernizr.js
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
            ['window.Modernizr']
        ]
    },
    versions: {
        references: [
            'window.Modernizr._version'
        ]
    }
}
,
// src/OwlCarousel2/OwlCarousel2.js
{
    properties: {
        link: 'https://github.com/OwlCarousel2/OwlCarousel2',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        statements: [
            ['window.jQuery(\'html\').owlCarousel']
        ]
    }
}
,
// src/Polymer/polymer.js
{
    properties: {
        link: 'https://github.com/Polymer/polymer',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            ['window.Polymer']
        ]
    },
    versions: {
        references: [
            'window.Polymer.version'
        ]
    }
}
,
// src/Prinzhorn/skrollr.js
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
            ['window.skrollr']
        ]
    },
    versions: {
        references: [
            'window.skrollr.version'
        ]
    }
}
,
// src/RubaXa/Sortable.js
{
    properties: {
        link: 'https://github.com/RubaXa/Sortable',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            ['window.Sortable']
        ]
    },
    versions: {
        references: [
            'window.Sortable.version'
        ]
    }
}
,
// src/SginalR/SginalR.js
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
            ['window.jQuery.signalR']
        ]
    },
    versions: {
        references: [
            'window.jQuery.signalR.version'
        ]
    }
}
,
// src/Stuk/jszip.js
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
            ['window.JSZip']
        ]
    },
    versions: {
        references: [
            'window.JSZip.version'
        ]
    }
}
,
// src/TurnWheel/jReject.js
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
            ['window.jQuery.reject']
        ]
    }
}
,
// src/VincentGarreau/particles.js.js
{
    properties: {
        link: 'https://github.com/VincentGarreau/particles.js',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            ['window.particlesJS']
        ]
    }
}
,
// src/WordPress/WordPress.js
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
// src/aFarkas/html5shiv.js
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
            ['window.html5']
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
// src/adobe-webplatform/Snap.svg.js
{
    properties: {
        link: 'https://github.com/adobe-webplatform/Snap.svg',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            ['window.Snap']
        ]
    },
    versions: {
        references: [
            'window.Snap.version'
        ]
    }
}
,
// src/adobe-webplatform/eve.js
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
                'window.eve.separator',
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
// src/akamai/boomerang.js
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
            ['window.BOOMR']
        ]
    },
    versions: {
        references: [
            'window.BOOMR.version'
        ]
    }
}
,
// src/algolia/algoliasearch-client-javascript.js
{
    properties: {
        link: 'https://github.com/algolia/algoliasearch-client-javascript',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            ['window.algoliasearch']
        ]
    },
    versions: {
        references: [
            'window.algoliasearch.version'
        ]
    }
}
,
// src/algolia/docsearch.js
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
// src/algolia/instantsearch.js.js
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
// src/alvarotrigo/fullPage.js.js
{
    properties: {
        link: 'https://github.com/alvarotrigo/fullPage.js',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            ['window.fullpage'],
            ['window.jQuery.fn.fullpage']
        ]
    }
}
,
// src/andris9/jStorage.js
{
    properties: {
        link: 'https://github.com/andris9/jStorage',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            ['window.jQuery.jStorage']
        ]
    },
    versions: {
        references: [
            'window.jQuery.jStorage.version'
        ]
    }
}
,
// src/angular/angular.js
{
    properties: {
        link: 'https://github.com/angular/angular.js',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            ['window.angular']
        ]
    },
    versions: {
        references: [
            'window.angular.version.full'
        ]
    }
}
,
// src/angular/zone.js.js
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
// src/apache/httpd.js
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
// src/apache/tomcat.js
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
// src/aws/aws-sdk-js.js
{
    properties: {
        link: 'https://github.com/aws/aws-sdk-js',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            ['window.AWS']
        ]
    },
    versions: {
        references: [
            'window.AWS.VERSION'
        ]
    }
}
,
// src/badlerdashy/sails.js
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
// src/bcit-ci/CodeIgniter.js
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
// src/benoitc/gunicorn.js
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
// src/blueimp/jQuery-File-Upload.js
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
// src/bramstein/fontfaceobserver.js
{
    properties: {
        link: 'https://github.com/bramstein/fontfaceobserver',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            ['window.FontFaceObserver']
        ]
    }
}
,
// src/bugsnag/bugsnag-js.js
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
// src/cakephp/cakephp.js
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
// src/caolan/async.js
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
// src/carhartl/jquery-cookie.js
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
// src/ccampbell/mousetrap.js
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
// src/chartjs/Chart.js.js
{
    properties: {
        link: 'https://github.com/chartjs/Chart.js',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            ['window.Chart']
        ]
    }
}
,
// src/cloudinary/cloudinary_js.js
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
// src/codemirror/CodeMirror.js
{
    properties: {
        link: 'https://github.com/codemirror/CodeMirror',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            ['window.CodeMirror']
        ]
    },
    versions: {
        references: [
            'window.CodeMirror.version'
        ]
    }
}
,
// src/craftcms/cms.js
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
// src/cujojs/curl.js
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
// src/d3/d3.js
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
// src/desandro/imagesloaded.js
{
    properties: {
        link: 'https://github.com/desandro/imagesloaded',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        statements: [
            ['window.jQuery(\'html\').imagesLoaded']
        ]
    }
}
,
// src/dimsemenov/Magnific-Popup.js
{
    properties: {
        link: 'https://github.com/dimsemenov/Magnific-Popup',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            ['window.jQuery.magnificPopup'],
            ['window.Zepto.fn.magnificPopup']
        ]
    }
}
,
// src/dinbror/blazy.js
{
    properties: {
        link: 'https://github.com/dinbror/blazy',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            ['window.Blazy']
        ]
    }
}
,
// src/django/django.js
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
// src/dojo/framework.js
{
    properties: {
        link: 'https://github.com/dojo/framework',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            ['window.dojo']
        ]
    },
    versions: {
        statements: [
            'dojo.version.major.toString() + \'.\' + dojo.version.minor.toString()'
        ]
    }
}
,
// src/dollarshaveclub/shave.js
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
            ['window.jQuery.fn.shave'],
            ['window.shave']
        ]
    }
}
,
// src/drupal/drupal.js
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
// src/dtao/lazy.js.js
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
// src/eligrey/FileSaver.js
{
    properties: {
        link: 'https://github.com/eligrey/FileSaver.js',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        statements: [
            ['window.saveAs.toString().match(/blob, name/i)'],
            ['window.saveAs.toString().match(/e,t,n/i)']
        ]
    }
}
,
// src/emberjs/ember.js.js
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
            ['window.Ember']
        ]
    },
    versions: {
        references: [
            'window.Ember.VERSION'
        ]
    }
}
,
// src/enyo/dropzone.js
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
// src/expressjs/express.js
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
// src/fabricjs/fabric.js.js
{
    properties: {
        link: 'https://github.com/fabricjs/fabric.js',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            ['window.fabric']
        ]
    },
    versions: {
        references: [
            'window.fabric.version'
        ]
    }
}
,
// src/facebook/hhvm.js
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
// src/facebook/react.js
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
            ['window.React']
        ]
    },
    versions: {
        references: [
            'window.React.version'
        ]
    }
}
,
// src/faisalman/ua-parser-js.js
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
            ['window.UAParser']
        ]
    },
    versions: {
        references: [
            'window.UAParser.VERSION'
        ]
    }
}
,
// src/fancyapps/fancyBox.js
{
    properties: {
        link: 'https://github.com/fancyapps/fancyBox',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            ['window.jQuery.fancybox']
        ]
    },
    versions: {
        references: [
            'window.jQuery.fancybox.version'
        ]
    }
}
,
// src/fengyuanchen/cropper.js
{
    properties: {
        link: 'https://github.com/fengyuanchen/cropper',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            ['window.jQuery.fn.cropper']
        ]
    }
}
,
// src/fengyuanchen/cropperjs.js
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
// src/fengyuanchen/datepicker.js
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
// src/fians/Waves.js
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
// src/filepicker/filepicker-js.js
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
// src/ftlabs/fastclick.js
{
    properties: {
        link: 'https://github.com/ftlabs/fastclick',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            ['window.FastClick']
        ]
    }
}
,
// src/getsentry/sentry-javascript.js
{
    properties: {
        link: 'https://github.com/getsentry/sentry-javascript',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            ['window.Raven'],
            ['window.Sentry']
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
// src/gka/chroma.js.js
{
    properties: {
        link: 'https://github.com/gka/chroma.js',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            ['window.chroma']
        ]
    },
    versions: {
        references: [
            'window.chroma.version'
        ]
    }
}
,
// src/gohugoio/hugo.js
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
                [/<meta[^>]+content\="Hugo /i]
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
// src/goldfire/howler.js.js
{
    properties: {
        link: 'https://github.com/goldfire/howler.js',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            ['window.Howler']
        ]
    }
}
,
// src/google/code-prettify.js
{
    properties: {
        link: 'https://github.com/google/code-prettify',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            ['window.prettyPrint']
        ]
    }
}
,
// src/google/fonts.js
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
// src/google/recaptcha.js
{
    properties: {
        link: 'https://github.com/google/recaptcha',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            ['window.recaptcha']
        ],
        strings: {
            page: [
                ['g-recaptcha']
            ]
        }
    }
}
,
// src/greensock/GreenSock-JS.js
{
    properties: {
        link: 'https://github.com/greensock/GreenSock-JS',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            ['window.GreenSockGlobals']
        ]
    }
}
,
// src/hakimel/reveal.js.js
{
    properties: {
        link: 'https://github.com/hakimel/reveal.js',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            ['window.Reveal']
        ]
    },
    versions: {
        references: [
            'window.Reveal.VERSION'
        ]
    }
}
,
// src/hammerjs/hammer.js.js
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
            ['window.Hammer']
        ]
    },
    versions: {
        references: [
            'window.Hammer.VERSION'
        ]
    }
}
,
// src/harvesthq/chosen.js
{
    properties: {
        link: 'https://github.com/harvesthq/chosen',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            ['window.jQuery.fn.chosen']
        ]
    }
}
,
// src/headjs/headjs.js
{
    properties: {
        link: 'https://github.com/headjs/headjs',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            ['window.head.js']
        ]
    }
}
,
// src/hgoebl/mobile-detect.js
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
// src/highcharts/highcharts.js
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
// src/highlightjs/highlight.js.js
{
    properties: {
        link: 'https://github.com/highlightjs/highlight.js',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            ['window.hljs']
        ]
    }
}
,
// src/htmlhint/HTMLHint.js
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
            ['window.HTMLHint']
        ]
    },
    versions: {
        references: [
            'window.HTMLHint.version'
        ]
    }
}
,
// src/iamcal/js-emoji.js
{
    properties: {
        link: 'https://github.com/iamcal/js-emoji',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            ['window.EmojiConvertor']
        ]
    }
}
,
// src/ianstormtaylor/slate.js
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
// src/imakewebthings/jquery-waypoints.js
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
            ['window.dead.dead.dead']
        ]
    }
}
,
// src/imakewebthings/waypoints.js
{
    properties: {
        link: 'https://github.com/imakewebthings/waypoints',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            ['window.Waypoint']
        ]
    }
}
,
// src/impress/impress.js
{
    properties: {
        link: 'https://github.com/impress/impress.js',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            ['window.impress']
        ]
    }
}
,
// src/imsky/holder.js
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
            ['window.Holder']
        ]
    },
    versions: {
        references: [
            'window.Holder.version'
        ]
    }
}
,
// src/jackocnr/intl-tel-input.js
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
            ['window.jQuery.fn.intlTelInput']
        ]
    },
    versions: {
        references: [
            'window.jQuery.fn.intlTelInput.version'
        ]
    }
}
,
// src/janl/mustache.js
{
    properties: {
        link: 'https://github.com/janl/mustache.js',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            ['window.Mustache']
        ]
    },
    versions: {
        references: [
            'window.Mustache.version'
        ]
    }
}
,
// src/jashkenas/backbone.js
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
            ['window.Backbone']
        ]
    },
    versions: {
        references: [
            'window.Backbone.VERSION'
        ]
    }
}
,
// src/jashkenas/underscore.js
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
// src/jquery/jquery-migrate.js
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
// src/jquery/jquery-mousewheel.js
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
// src/jquery/jquery-ui.js
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
            ['window.jQuery.ui']
        ]
    },
    versions: {
        references: [
            'window.jQuery.ui.version'
        ]
    }
}
,
// src/jquery/jquery.js
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
            ['window.jQuery']
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
// src/jrburke/requirejs.js
{
    properties: {
        link: 'https://github.com/requirejs/requirejs',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            ['window.requirejs']
        ]
    },
    versions: {
        references: [
            'window.requirejs.version'
        ]
    }
}
,
// src/js-cookie/js-cookie.js
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
// src/jsor/jcarousel.js
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
            ['window.jQuery.jCarousel']
        ]
    },
    versions: {
        references: [
            'window.jQuery.jCarousel.version'
        ]
    }
}
,
// src/jsor/lity.js
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
            ['window.lity']
        ]
    },
    versions: {
        references: [
            'window.lity.version'
        ]
    }
}
,
// src/julianshapiro/velocity.js
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
            ['window.jQuery.fn.velocity'],
            ['window.jQuery.Velocity']
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
// src/jwplayer/jwplayer.js
{
    properties: {
        link: 'https://github.com/jwplayer/jwplayer',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            ['window.jwplayer']
        ]
    },
    versions: {
        references: [
            'window.jwplayer.version'
        ]
    }
}
,
// src/kenwheeler/slick.js
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
// src/knockout/knockout.js
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
// src/kriskowal/q.js
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
// src/krux/postscribe.js
{
    properties: {
        link: 'https://github.com/krux/postscribe',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            ['window.postscribe']
        ]
    }
}
,
// src/laravel/laravel.js
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
// src/leongersen/noUiSlider.js
{
    properties: {
        link: 'https://github.com/leongersen/noUiSlider',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            ['window.noUiSlider']
        ]
    },
    versions: {
        references: [
            'window.noUiSlider.version'
        ]
    }
}
,
// src/linkedin/dustjs.js
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
// src/lodash/lodash.js
{
    properties: {
        link: 'https://github.com/lodash/lodash',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            ['window._.at']
        ]
    },
    versions: {
        references: [
            'window._.VERSION'
        ]
    }
}
,
// src/madrobby/zepto.js
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
// src/mapbox/mapbox.js
{
    properties: {
        link: 'https://github.com/mapbox/mapbox.js',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            ['window.L.mapbox']
        ]
    },
    versions: {
        references: [
            'window.L.mapbox.VERSION'
        ]
    }
}
,
// src/marionettejs/backbone.marionette.js
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
            ['window.Marionette'],
            ['window.Backbone.Marionette']
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
// src/markedjs/marked.js
{
    properties: {
        link: 'https://github.com/markedjs/marked',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            ['window.marked']
        ]
    }
}
,
// src/mathiasbynens/jquery-placeholder.js
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
// src/matomo-org/matomo.js
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
// src/mattbryson/TouchSwipe-Jquery-Plugin.js
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
// src/maxwellito/vivus.js
{
    properties: {
        link: 'https://github.com/maxwellito/vivus',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            ['window.Vivus']
        ]
    }
}
,
// src/meltingice/CamanJS.js
{
    properties: {
        link: 'https://github.com/meltingice/CamanJS',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            ['window.Caman']
        ]
    },
    versions: {
        references: [
            'window.Caman.version.release'
        ]
    }
}
,
// src/meteor/meteor.js
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
            ['window.Meteor']
        ]
    },
    versions: {
        statements: [
            'window.Meteor.release.split(\'@\').pop()'
        ]
    }
}
,
// src/mnater/Hyphenator.js
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
            ['window.Hyphenator']
        ]
    },
    versions: {
        references: [
            'window.Hyphenator.version'
        ]
    }
}
,
// src/mobxjs/mobx.js
{
    properties: {
        link: 'https://github.com/mobxjs/mobx',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            ['window.__mobxGlobal']
        ]
    }
}
,
// src/moment/moment.js
{
    properties: {
        link: 'https://github.com/moment/moment',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            ['window.moment']
        ]
    },
    versions: {
        references: [
            'window.moment.version'
        ]
    }
}
,
// src/mootools/mootools-core.js
{
    properties: {
        link: 'https://github.com/mootools/mootools-core',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            ['window.MooTools']
        ]
    },
    versions: {
        references: [
            'window.MooTools.version'
        ]
    }
}
,
// src/mozilla/pdf.js.js
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
            ['window.pdfjsLib'],
            ['window.PDFJS']
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
// src/mrdoob/three.js
{
    properties: {
        link: 'https://github.com/mrdoob/three.js',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            ['window.THREE']
        ]
    },
    versions: {
        references: [
            'window.THREE.REVISION'
        ]
    }
}
,
// src/nfl/react-helmet.js
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
                ['data-react-helmet']
            ]
        }
    }
}
,
// src/nginx/nginx.js
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
// src/nienines/cowboy.js
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
// src/niklasvh/html2canvas.js
{
    properties: {
        link: 'https://github.com/niklasvh/html2canvas',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            ['window.html2canvas']
        ]
    }
}
,
// src/nk-o/jarallax.js
{
    properties: {
        link: 'https://github.com/nk-o/jarallax',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            ['window.jarallax']
        ]
    }
}
,
// src/noelboss/featherlight.js
{
    properties: {
        link: 'https://github.com/noelboss/featherlight',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            ['window.jQuery.featherlight']
        ]
    }
}
,
// src/novus/nvd3.js
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
// src/olado/doT.js
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
            ['window.doT']
        ]
    },
    versions: {
        references: [
            'window.doT.version'
        ]
    }
}
,
// src/olivernn/lunr.js.js
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
            ['window.lunr']
        ]
    },
    versions: {
        references: [
            'window.lunr.version'
        ]
    }
}
,
// src/openexchangerates/accounting.js.js
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
// src/openresty/openresty.js
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
// src/oyvindkinsey/easyXDM.js
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
// src/paperjs/paper.js.js
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
// src/parcel-bundler/parcel.js
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
// src/php/php-src.js
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
// src/quilljs/quill.js
{
    properties: {
        link: 'https://github.com/quilljs/quill',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            ['window.Quill']
        ]
    },
    versions: {
        references: [
            'window.Quill.version'
        ]
    }
}
,
// src/rails/rails.js
{
    properties: {
        link: 'https://github.com/AlloyTeam/AlloyFinger',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            ['window.AlloyFinger']
        ]
    }
}
,
// src/robflaherty/jquery-scrolldepth.js
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
// src/rstacruz/jquery.transit.js
{
    properties: {
        link: 'https://github.com/rstacruz/jquery.transit',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            ['window.jQuery.transit']
        ]
    }
}
,
// src/scaron/prettyphoto.js
{
    properties: {
        link: 'https://github.com/scaron/prettyphoto',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            ['window.jQuery.fn.prettyPhoto']
        ]
    }
}
,
// src/scottjehl/Respond.js
{
    properties: {
        link: 'https://github.com/scottjehl/Respond',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            ['window.respond']
        ]
    }
}
,
// src/scottjehl/picturefill.js
{
    properties: {
        link: 'https://github.com/scottjehl/picturefill',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            ['window.picturefill']
        ]
    }
}
,
// src/segmentio/analytics.js.js
{
    properties: {
        link: 'https://github.com/segmentio/analytics.js',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            ['window.analytics.Integrations']
        ]
    },
    versions: {
        references: [
            'window.analytics.VERSION'
        ]
    }
}
,
// src/select2/select2.js
{
    properties: {
        link: 'https://github.com/select2/select2',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            ['window.Select2'],
            ['window.jQuery.fn.select2']
        ]
    }
}
,
// src/simonwhitaker/github-fork-ribbon-css.js
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
// src/slevithan/xregexp.js
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
// src/snapappointments/bootstrap-select.js
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
            ['window.jQuery.fn.selectpicker']
        ]
    }
}
,
// src/somewebmedia/hc-sticky.js
{
    properties: {
        link: 'https://github.com/somewebmedia/hc-sticky',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            ['window.hcSticky',],
            ['window.jQuery.fn.hcSticky']
        ]
    }
}
,
// src/sorccu/cufon.js
{
    properties: {
        link: 'https://github.com/sorccu/cufon',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            ['window.Cufon']
        ]
    }
}
,
// src/sphinx-doc/sphinx.js
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
// src/stripe/jquery.payment.js
{
    properties: {
        link: 'https://github.com/stripe/jquery.payment',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            ['window.jQuery.fn.payment']
        ]
    }
}
,
// src/styled-components/styled-components.js
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
// src/swfobject/swfobject.js
{
    properties: {
        link: 'https://github.com/swfobject/swfobject',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            ['window.swfobject']
        ]
    }
}
,
// src/tinymce/tinymce.js
{
    properties: {
        link: 'https://github.com/tinymce/tinymce',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            ['window.tinyMCE']
        ]
    },
    versions: {
        statements: [
            'window.tinyMCE.majorVersion + \'.\' + window.tinyMCE.minorVersion'
        ]
    }
}
,
// src/tmont/sunlight.js
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
            ['window.Sunlight']
        ]
    },
    versions: {
        references: [
            'window.Sunlight.version'
        ]
    }
}
,
// src/totaljs/framework.js
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
// src/transloadit/uppy.js
{
    properties: {
        link: 'https://github.com/transloadit/uppy',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            ['window.Uppy']
        ]
    }
}
,
// src/turbolinks/turbolinks.js
{
    properties: {
        link: 'https://github.com/turbolinks/turbolinks',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            ['window.Turbolinks']
        ]
    }
}
,
// src/tuupola/jquery_lazyload.js
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
// src/twbs/bootstrap.js
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
                [/\<link[^>]+\/bootstrap\//i]
            ]
        },
        references: [
            ['window.jQuery.fn.tooltip']
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
// src/twitter/hogan.js.js
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
            ['window.Hogan']
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
// src/twitter/twemoji.js
{
    properties: {
        link: 'https://github.com/twitter/twemoji',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            ['window.twemoji.parse']
        ]
    }
}
,
// src/twitter/typeahead.js.js
{
    properties: {
        link: 'https://github.com/twitter/typeahead.js',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        statements: [
            ['window.jQuery(\'html\').typeahead']
        ]
    }
}
,
// src/typekit/webfontloader.js
{
    properties: {
        link: 'https://github.com/typekit/webfontloader',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            ['window.WebFont']
        ]
    }
}
,
// src/videojs/video.js.js
{
    properties: {
        link: 'https://github.com/videojs/video.js',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            ['window.videojs']
        ]
    },
    versions: {
        references: [
            'window.videojs.VERSION'
        ]
    }
}
,
// src/vimeo/player.js.js
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
            ['window.Vimeo.Player']
        ]
    }
}
,
// src/vitch/jScrollPane.js
{
    properties: {
        link: 'https://github.com/vitch/jScrollPane',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            ['window.jQuery.fn.jScrollPane']
        ]
    }
}
,
// src/vuejs/vue.js
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
            ['window.Vue'],
            ['window.__VUE_HOT_MAP__']
        ]
    },
    versions: {
        references: [
            'window.Vue.version'
        ]
    }
}
,
// src/weareoutman/clockpicker.js
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
            ['window.jQuery.fn.clockpicker']
        ]
    }
}
,
// src/webpack/webpack.js
{
    properties: {
        link: 'https://github.com/webpack/webpack',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            ['window.webpackJsonp'],
            ['window.webpackManifest']
        ]
    }
}
,
// src/wilddeer/Peppermint.js
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
// src/wilddeer/Sniffer.js
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
// src/wilddeer/stickyfill.js
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
// src/wycats/handlebars.js.js
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
            ['window.Handlebars']
        ]
    },
    versions: {
        references: [
            'window.Handlebars.VERSION'
        ]
    }
}
,
// src/yiisoft/yii.js
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
// src/yui/yui3.js
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
            ['window.YUI']
        ]
    },
    versions: {
        references: [
            'window.YUI.version'
        ]
    }
}
,
// src/zachleat/BixText.js
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
            ['window.jQuery(\'body\').bigtext']
        ]
    }
}
,
// src/zeit/next.js.js
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
            ['window.__NEXT_DATA__']
        ]
    }
}
,
// src/zenorocha/clipboard.js.js
{
    properties: {
        link: 'https://github.com/zenorocha/clipboard.js',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            ['window.ClipboardJS']
        ]
    }
}
,
// src/zeroclipboard/zeroclipboard.js
{
    properties: {
        link: 'https://github.com/zeroclipboard/zeroclipboard',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            ['window.ZeroClipboard']
        ]
    },
    versions: {
        references: [
            'window.ZeroClipboard.version'
        ]
    }
}
,
// src/zloirock/core-js.js
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
// src/zurb/foundation-sites.js
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
