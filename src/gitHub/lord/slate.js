{
    properties: {
        examples: [
            'https://docs.dwolla.com/'
        ],
        link: 'https://github.com/lord/slate',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        patterns: {
            page: [
                [
                    /Documentation Powered by Slate/i
                ]
            ]
        },
        queries: [
            [
                {
                    selectors: [
                        '.page-wrapper .dark-box #lang-selector',
                        '.page-wrapper .dark-box .lang-selector'
                    ],
                    length: {
                        operator: '>',
                        value: 0
                    }
                }
            ]
        ]
    }
}
