{
    properties: {
        link: 'https://github.com/BafS/Gutenberg',
        platform: 'GitHub',
        type: 'repository'
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
