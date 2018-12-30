{
    properties: {
        examples: [
            'https://semantic-ui.com/'
        ],
        link: 'https://github.com/Semantic-Org/Semantic-UI',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        patterns: {
            page: [
                [
                    /<link[^>]+href="[^"]+semantic(?:\.min)?\.css"/i
                ]
            ]
        }
    }
}
