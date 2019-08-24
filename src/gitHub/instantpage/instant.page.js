{
    properties: {
        examples: [
            'https://instant.page',
            'https://yoast.com'
        ],
        link: 'https://github.com/instantpage/instant.page',
        platform: 'GitHub',
        tags: [],
        type: 'repository'
    },
    tests: {
        shortcuts: [
            {
                key: 'query',
                selectors: [
                    'script[src*="//instant.page"][type="module"]'
                ]
            }
        ]
    }
}
