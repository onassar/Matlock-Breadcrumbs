{
    properties: {
        examples: [
            'http://thompsonemerson.github.io/zoomove/',
            'http://tholman.com/github-corners/'
        ],
        link: 'https://github.com/tholman/github-corners',
        name: 'GitHub Corners',
        platform: 'GitHub',
        tags: [
            'icons'
        ],
        type: 'repository'
    },
    tests: {
        queries: [
            [
                {
                    selectors: [
                        'path[class="octo-body" i]'
                    ],
                    length: {
                        operator: '>',
                        value: 0
                    }
                }
            ]
        ]
    }
}
