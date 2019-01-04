``` javascript
{
    enabled: true,
    isolate: true,
    dependencies: [
        'https://github.com/onassar/Stencil'
    ],
    properties: {
        alternatives: [
            'gitHub/onassar/Stencil'
        ],
        examples: [],
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
        type: 'repository',
        videos: [],
        wikiPedia: {
            load: true,
            title: 'JQuery'
        }
    },
    tests: {
        queries: [
            [
                {
                    selectors: [
                        'meta[name="generator" i][content*="WordPress" i]'
                    ],
                    length: {
                        operator: '>',
                        value: 0
                    }
                }
            ]
        ],
        patterns: {
            cookies: [
                []
            ],
            headers: [
                []
            ],
            page: [
                [
                    /<link[^]+googlefonts/
                ]
            ],
            scripts: [
                []
            ],
            stylesheets: [
                []
            ]
        },
        references: [
            [
                'a'
            ],
            [
                'b',
                'c'
            ],
            [
                'd',
                '!e',
                'f'
            ]
        ],
        shortcuts: [
            {
                key: 'query.meta.generator',
                generator: 'WordPress'
            }
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
                [
                    'a',
                    'b'
                ],
                [
                    'c',
                    '!d'
                ]
            ],
            scripts: [],
            stylesheets: []
        }
    },
    versions: {
        queries: [
            {
                selectors: [
                    'meta[name="generator" i][content*="WordPress" i]'
                ],
                attribute: 'content',
                pattern: true,
                expressions: [
                    /\s*WordPress\s*(.+)/i
                ]
            }
        ],
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
        shortcuts: [
            {
                key: 'query.meta.generator',
                generator: 'WordPress'
            }
        ],
        statements: [
            'window.jQuery(\'app\').getVersion()'
        ]
    }
}
```
