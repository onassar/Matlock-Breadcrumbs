{
    properties: {
        examples: [
            'http://bafs.github.io/Gutenberg/'
        ],
        link: 'https://github.com/BafS/Gutenberg',
        platform: 'GitHub'
    },
    tests: {
        patterns: {
            page: [
                [
                    /<link[^>]+href="[^"]+gutenberg(?:\.min)?\.css"/i
                ]
            ]
        }
    }
}
