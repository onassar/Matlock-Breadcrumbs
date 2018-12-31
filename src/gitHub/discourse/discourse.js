{
    properties: {
        examples: [
            'https://forums.donejs.com/c/documentjs'
        ],
        link: 'https://github.com/discourse/discourse',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        patterns: {
            page: [
                [
                    /<meta[^>]+name="generator"[^>]+content="Discourse/i
                ],
                [
                    /<meta[^>]+name="Discourse[^"]+"[^>]+content="generator"/i
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
                /<meta[^>]+name="generator"[^>]+content="Discourse ([^ "]+)[^"]*"/i,
                /<meta[^>]+name="Discourse ([^ "]+)[^"]*"[^>]+content="generator"/i
            ]
        }
    }
}
