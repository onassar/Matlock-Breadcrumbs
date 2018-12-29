{
    properties: {
        link: 'https://github.com/google/code-prettify',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        patterns: {
            page: [
                [
                    /<script[^>]+src="[^"]+run_prettify\.js"/i
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
