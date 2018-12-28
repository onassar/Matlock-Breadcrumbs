{
    properties: {
        link: 'https://github.com/google/fonts',
        notes: [
            'https://i.imgur.com/5G51k7k.jpg'
        ],
        platform: 'GitHub',
        examples: [
            'https://getstencil.com/blog'
        ],
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'Google_Fonts'
        }
    },
    tests: {
        patterns: {
            page: [
                [
                    /dns-prefetch[^>]+fonts\.googleapis\.com/i
                ],
                [
                    /href="https?:\/\/fonts\.googleapis\.com/i
                ]
            ]
        }
    }
}
