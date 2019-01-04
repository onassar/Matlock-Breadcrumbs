{
    properties: {
        examples: [
            'https://blog.getpelican.com/'
        ],
        link: 'https://github.com/getpelican/pelican',
        name: 'Pelican',
        platform: 'GitHub',
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
