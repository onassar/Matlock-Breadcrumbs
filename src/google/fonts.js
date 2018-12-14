{
    properties: {
        link: 'https://github.com/google/fonts',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        patterns: {
            page: [
                [/dns-prefetch[^>]+fonts\.googleapis\.com/i],       // https://i.imgur.com/5G51k7k.jpg
                [/href="https?:\/\/fonts\.googleapis\.com/i]
            ]
        }
    }
}
