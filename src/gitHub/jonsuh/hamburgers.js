{
    properties: {
        examples: [
            'https://jonsuh.com/hamburgers/'
        ],
        link: 'https://github.com/jonsuh/hamburgers',
        name: 'Hamburgers',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        queries: [
            [
                {
                    selectors: [
                        '.hamburger .hamburger-box .hamburger-inner'
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
