{
    properties: {
        donate: {
            link: 'https://opencollective.com/ghost'
        },
        examples: [
            'https://blog.ghost.org/'
        ],
        link: 'https://github.com/TryGhost/Ghost',
        name: 'Ghost',
        platform: 'GitHub',
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'Ghost_(blogging_platform)'
        }
    },
    tests: {
        patterns: {
            headers: [
                [
                    /x-ghost-cache-status/i
                ]
            ]
        },
        shortcuts: [
            {
                key: 'query.meta.generator',
                generator: 'Ghost'
            }
        ]
    },
    versions: {
        shortcuts: [
            {
                key: 'query.meta.generator',
                generator: 'Ghost'
            }
        ]
    }
}
