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
        tags: [
            'blogging'
        ],
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'WordPress'
        }
    },
    tests: {
        patterns: {
            page: [
                [
                    /<link[^>]+wp\-content\/plugins/i
                ],
                [
                    /<link[^>]+wp\-content\/themes/i
                ],
                [
                    /<link[^>]+wp\-content\/uploads/i
                ],
                [
                    /<link[^>]+wp\-includes/i
                ],
                [
                    /<meta[^>]+name="generator"[^>]+content="WordPress/i
                ],
                [
                    /<meta[^>]+name="WordPress[^"]+"[^>]+content="generator"/i
                ]
            ]
        },
        queries: [
            [
                {
                    selectors: [
                        'meta[name="generator" i][content*="WordPress" i]'
                    ],
                    length: '>0'
                }
            ]
        ]
    },
    versions: {
        queries: [
            {
                selectors: [
                    'meta[name="generator" i][content*="WordPress" i]'
                ],
                matches: /\s*WordPress\s*(.+)/i
            }
        ],
        patterns: {
            page: [
                /<meta[^>]+name="generator"[^>]+content="WordPress ([^ "]+)[^"]*"/i,
                /<meta[^>]+name="WordPress ([^ "]+)[^"]*"[^>]+content="generator"/i
            ]
        }
    }
}
