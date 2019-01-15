{
    properties: {
        examples: [
            ''
        ],
        link: 'https://github.com/Financial-Times/polyfill-service',
        name: 'Polyfill Service (by Financial Times)',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        queries: [
            [
                {
                    selectors: [
                        'script[src*="polyfill.io/v2/polyfill.js" i]',
                        'script[src*="polyfill.io/v3/polyfill.js" i]'
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
                key: 'query.script',
                fileroot: 'polyfill'
            }
        ]
    },
    versions: {
        shortcuts: [
            {
                key: 'query.script',
                fileroot: 'polyfill'
            }
        ]
    }
}
