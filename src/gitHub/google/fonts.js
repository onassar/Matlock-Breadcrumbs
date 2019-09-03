{
    properties: {
        examples: [
            'https://getstencil.com/blog'
        ],
        link: 'https://github.com/google/fonts',
        name: 'Google Fonts',
        notes: [
            'https://i.imgur.com/5G51k7k.jpg'
        ],
        platform: 'GitHub',
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'Google_Fonts'
        }
    },
    tests: {
        queries: [
            [
                {
                    selectors: [
                        'link[rel="dns-prefetch"][href*="fonts.googleapis.com" i]',
                        'link[rel="stylesheet"][href*="fonts.googleapis.com" i]'
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
