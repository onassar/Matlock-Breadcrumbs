{
    properties: {
        examples: [
            'https://forums.donejs.com/c/documentjs'
        ],
        link: 'https://github.com/discourse/discourse',
        name: 'Discourse',
        platform: 'GitHub',
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'Discourse_(software)'
        }
    },
    tests: {
        references: [
            [
                'window.Discourse',
                'window.Discourse.Topic'
            ]
        ],
        shortcuts: [
            {
                key: 'query.meta.generator',
                generator: 'Discourse'
            }
        ]
    },
    versions: {
        shortcuts: [
            {
                key: 'query.meta.generator',
                generator: 'Discourse'
            }
        ]
    }
}
