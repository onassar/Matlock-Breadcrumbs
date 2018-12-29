{
    properties: {
        examples: [
            'http://thompsonemerson.github.io/zoomove/'
        ],
        link: 'https://github.com/google/code-prettify',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        patterns: {
            page: [
                [
                    /<script[^>]+src="[^"]+run_prettify\.js"/i
                ],
                [
                    /<link[^>]+href="[^"]+prettify\.css"/i
                ]
            ]
        },
        references: [
            [
                'window.prettyPrint'
            ]
        ]
    }
}
