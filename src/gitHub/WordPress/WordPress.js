{
    isolate: true,
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
                ]
            ]
        },
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
        shortcuts: [
            {
                key: 'query.meta.generator',
                value: 'WordPress'
            }
        ]
    },
    versions: {
        queries: [
            {
                selectors: [
                    'meta[name="generator" i][content*="WordPress" i]'
                ],
                attribute: 'content',
                pattern: true,
                expression: /\s*WordPress\s*(.+)/i
            }
        ],
        shortcuts: [
            {
                key: 'query.meta.generator',
                value: 'WordPress'
            }
        ]
    }
}
