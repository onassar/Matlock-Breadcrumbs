[
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
{
    properties: {
        link: 'https://github.com/CanopyTax/single-spa',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            ['window.singleSpaNavigate']
        ]
    }
}
,
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
{
    properties: {
        link: 'https://github.com/hammerjs/hammer.js',
        platform: 'GitHub',
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
