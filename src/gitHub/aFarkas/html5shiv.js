{
    properties: {
        examples: [
            'https://ca.octobersveryown.com'
        ],
        link: 'https://github.com/aFarkas/html5shiv',
        notes: [
            'https://i.imgur.com/VaUooX0.png'
        ],
        platform: 'GitHub',
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'HTML5_Shiv'
        }
    },
    tests: {
        patterns: {
            page: [
                [
                    /\/html5shiv\./i
                ],
                [
                    /\/html5shiv\//i
                ]
            ]
        },
        references: [
            [
                'window.html5'
            ]
        ]
    },
    versions: {
        patterns: {
            page: [
                /html5shiv\/([0-9\.]+)\/html5shiv/i
            ]
        },
        references: [
            'window.html5.version'
        ]
    }
}
