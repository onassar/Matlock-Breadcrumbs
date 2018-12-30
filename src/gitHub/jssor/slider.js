{
    properties: {
        examples: [
            'https://www.jssor.com/'
        ],
        link: 'https://github.com/jssor/slider',
        platform: 'GitHub',
        tags: [
            'slider'
        ],
        type: 'repository'
    },
    tests: {
        patterns: {
            cookies: [
                [
                    /window.$abcd$/i
                ]
            ]
        },
        references: [
            [
                'window.$JssorSlider$'
            ]
        ]
    }
}
