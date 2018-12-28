{
    properties: {
        link: 'https://github.com/geraintluff/sha256',
        platform: 'GitHub',
        tags: [
            'encryption'
        ],
        examples: [
            'http://geraintluff.github.io/sha256/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                '!window.sha256.create',
                'window.sha256'
            ]
        ]
    }
}
