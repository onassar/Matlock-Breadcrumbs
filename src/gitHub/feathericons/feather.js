{
    properties: {
        examples: [
            'https://feathericons.com/'
        ],
        link: 'https://github.com/feathericons/feather',
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
                    /\bfeather feather-\b/i
                ],
                [
                    /\bicon feather-\b/i
                ]
            ]
        },
        shortcuts: [
            {
                key: 'query.stylesheet',
                fileroot: 'feather-icons'
            }
        ]
    },
    versions: {
        shortcuts: [
            {
                key: 'query.stylesheet',
                fileroot: 'feather-icons'
            }
        ]
    }
}
