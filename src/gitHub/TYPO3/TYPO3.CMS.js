{
    properties: {
        examples: [
            'http://www.italia.it/en/home.html'
        ],
        link: 'https://github.com/TYPO3/TYPO3.CMS',
        name: 'TYPO3 CMS',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        queries: [
            [
                {
                    selectors: [
                        'link[rel="stylesheet" i][href*="typo3conf" i]',
                        'link[rel="stylesheet" i][href*="typo3temp" i]',
                        'img[src*="typo3conf" i]',
                        'img[src*="typo3temp" i]'
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
                generator: 'TYPO3 CMS'
            }
        ]
    }
}
