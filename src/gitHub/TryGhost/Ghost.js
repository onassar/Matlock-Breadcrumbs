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
        type: 'repository'
    },
    tests: {
        patterns: {
            cookies: [
                [
                    /ghost-auth/i,
                    /ghost-auth\.sig/i
                ]
            ],
            headers: [
                [
                    /x-ghost-cache-status/i
                ]
            ],
            page: [
                [
                    /<meta[^>]+content\="Ghost /i
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
