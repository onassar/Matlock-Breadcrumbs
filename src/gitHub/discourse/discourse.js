{
    properties: {
        examples: [
            'https://forums.donejs.com/c/documentjs'
        ],
        link: 'https://github.com/discourse/discourse',
        platform: 'GitHub'
    },
    tests: {
        patterns: {
            page: [
                [
                    /<meta[^>]+content\="Discourse\b/i
                ]
            ]
        },
        references: [
            [
                'window.Discourse',
                'window.Discourse.Topic'
            ]
        ]
    },
    versions: {
        patterns: {
            page: [
                /<meta[^>]+content\="Discourse ([^" ]+)/i
            ]
        }
    }
}
