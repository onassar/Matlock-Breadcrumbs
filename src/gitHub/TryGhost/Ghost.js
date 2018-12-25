{
    properties: {
        donate: {
            link: 'https://opencollective.com/ghost'
        },
        link: 'https://github.com/TryGhost/Ghost',
        notes: [],
        platform: 'GitHub',
        tests: [
            'https://blog.ghost.org/'
        ],
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'Ghost_(blogging_platform)',
            sections: []
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
                    /<meta[^>]+content\="Ghost\b/i
                ]
            ]
        }
    },
    versions: {
        patterns: {
            page: [
                /<meta[^>]+name="generator"[^>]+content="Ghost ([^"]+)"/i,
                /<meta[^>]+content="Ghost ([^"]+)"[^>]+name="generator"/i
            ]
        }
    }
}
