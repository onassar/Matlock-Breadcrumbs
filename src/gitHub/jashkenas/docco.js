{
    properties: {
        examples: [
            'http://ashkenas.com/docco/'
        ],
        link: 'https://github.com/jashkenas/docco',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        patterns: {
            page: [
                [
                    /<link[^>]+docco.css[^>]+>/i
                ]
            ]
        }
    }
}
