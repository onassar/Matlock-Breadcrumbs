{
    properties: {
        link: 'https://github.com/zenorocha/clipboard.js',
        notes: [
            'https://i.imgur.com/RVXNiwf.jpg'
        ],
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        patterns: {
            page: [
                [
                    /libs\/clipboard\.js\/[^\/]+\/clipboard\.js/i
                ],
                [
                    /libs\/clipboard\.js\/[^\/]+\/clipboard\.min\.js/i
                ]
            ]
        },
        references: [
            ['window.ClipboardJS']
        ]
    },
    versions: {
        patterns: {
            page: [
                /libs\/clipboard\.js\/([^\/]+)\/clipboard\.js/i,
                /libs\/clipboard\.js\/([^\/]+)\/clipboard\.min\.js/i
            ]
        }
    }
}
