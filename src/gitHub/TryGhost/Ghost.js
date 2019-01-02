{
    properties: {
        donate: {
            link: 'https://opencollective.com/ghost'
        },
        examples: [
            'https://blog.ghost.org/'
        ],
        link: 'https://github.com/TryGhost/Ghost',
        platform: 'GitHub',
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'Ghost_(blogging_platform)'
        }
    },
    tests: {
        shortcuts: [
            {
                key: 'query.meta.generator',
                generator: 'Ghost'
            }
        ],
        patterns: {
            headers: [
                [
                    /x-ghost-cache-status/i
                ]
            ]
        }
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
