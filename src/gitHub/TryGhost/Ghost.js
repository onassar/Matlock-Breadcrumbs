{
    properties: {
        donate: {
            link: 'https://opencollective.com/ghost'
        },
        link: 'https://github.com/TryGhost/Ghost',
        notes: [],
        platform: 'GitHub',
        tests: [
            'https://ghost.org/'
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
            ]
        }
    },
    versions: {
        patterns: {
            cookies: [
                /<meta[^>]+name="generator"[^>]+content="Ghost ([^"]+)"/i,
                /<meta[^>]+content="Ghost ([^"]+)"[^>]+name="generator"/i
            ]
        }
    }
}
