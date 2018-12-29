{
    properties: {
        examples: [
            'https://milligram.io/'
        ],
        link: 'https://github.com/milligram/milligram',
        platform: 'GitHub',
        tags: [
            'css-framework'
        ],
        type: 'repository'
    },
    tests: {
        patterns: {
            page: [
                [
                    /<link[^>]+href="[^"]+milligram(?:\.min)?\.css"/i
                ]
            ]
        }
    }
}
