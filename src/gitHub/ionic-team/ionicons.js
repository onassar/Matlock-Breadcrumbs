{
    properties: {
        examples: [
            'https://lto.network/',
            'https://ionicons.com/',
            'http://cloudean.com/',
            'https://getstencil.com/blog/'
        ],
        link: 'https://github.com/ionic-team/ionicons',
        name: 'Ionicons',
        platform: 'GitHub',
        tags: [
            'icons'
        ],
        type: 'repository'
    },
    tests: {
        patterns: {
            page: [
                [
                    /\bion ion-\b/i
                ],
                [
                    /\bicon ion-\b/i
                ]
            ]
        },
        shortcuts: [
            {
                key: 'query.stylesheet',
                fileroot: 'ionicons'
            }
        ]
    },
    versions: {
        shortcuts: [
            {
                key: 'query.stylesheet',
                fileroot: 'ionicons'
            }
        ]
    }
}
