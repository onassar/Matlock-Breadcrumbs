{
    properties: {
        link: 'https://github.com/google/fonts',
        notes: [
            'https://i.imgur.com/5G51k7k.jpg'
        ],
        platform: 'GitHub',
        tests: [
            'https://getstencil.com/blog'
        ],
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'Google_Fonts',
            sections: []
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
