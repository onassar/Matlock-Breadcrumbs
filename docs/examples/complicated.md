``` javascript
{
    isolate: true,
    dependencies: [
        'https://github.com/onassar/Stencil'
    ],
    properties: {
        alternatives: [
            'gitHub/onassar/Stencil'
        ],
        link: 'https://github.com/username/name',
        meta: [
            {
                icon: function() {
                    return null;
                },
                name: function() {
                    return null;
                },
                tooltip: function() {
                    // pattern: /<link[^>]+fonts\.googleapis.com[^>]+family=([a-z]+)/gi
                    return 'Roboto, Alpha, etc';
                }
            }
        ],
        name: 'Formatted name',
        platform: 'GitHub',
        related: [],
        similar: [],
        tags: [],
        examples: [],
        type: 'repository',
        videos: [],
        wikiPedia: {
            load: true,
            title: 'JQuery',
            sections: []
        }
    },
    tests: {
        patterns: {
            cookies: [],
            headers: [],
            page: [
                [
                    /<link[^]+googlefonts/
                ]
            ],
            scripts: [],
            stylesheets: []
        },
        references: [
            ['a'],
            ['b', 'c'],
            ['d', '!e', 'f']
        ],
        statements: [
            [
                'window.jQuery.fun()',
                'window.jQuery.boring()'
            ]
        ],
        strings: {
            cookies: [],
            headers: [],
            page: [
                ['a', 'b'],
                ['c', '!d']
            ],
            scripts: [],
            stylesheets: []
        }
    },
    versions: {
        patterns: {
            cookies: [],
            headers: [],
            page: [
                /html5shiv\/([0-9\.]+)\/html5shiv/i
            ],
            scripts: [],
            stylesheets: []
        },
        references: [
            'window.app.version',
            'window.app.$version'
        ],
        statements: [
            'window.jQuery(\'app\').getVersion()'
        ]
    }
}
```
