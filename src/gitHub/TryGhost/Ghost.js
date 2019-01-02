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
        patterns: {
            headers: [
                [
                    /x-ghost-cache-status/i
                ]
            ],
            page: [
                [
                    /<meta[^>]+name="generator"[^>]+content="Ghost/i
                ],
                [
                    /<meta[^>]+name="Ghost[^"]+"[^>]+content="generator"/i
                ]
            ]
        }
    },
    versions: {
        patterns: {
            page: [
                /<meta[^>]+name="generator"[^>]+content="Ghost ([^ "]+)[^"]*"/i,
                /<meta[^>]+name="Ghost ([^ "]+)[^"]*"[^>]+content="generator"/i
            ]
        }
    }
}
