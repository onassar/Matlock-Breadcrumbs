{
    properties: {
        link: 'https://github.com/getpelican/pelican',
        platform: 'GitHub',
        examples: [
            'https://blog.getpelican.com/'
        ],
        type: 'repository'
    },
    tests: {
        patterns: {
            page: [
                [
                    /powered by <a href="[^>]+getpelican.com/i
                ]
            ]
        }
    }
}
