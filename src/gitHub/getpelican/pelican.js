{
    properties: {
        link: 'https://github.com/getpelican/pelican',
        platform: 'GitHub',
        tests: [
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
