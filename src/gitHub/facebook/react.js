{
    properties: {
        examples: [
            'https://www.cbc.ca/',
            'https://www.meetup.com/'
        ],
        link: 'https://github.com/facebook/react',
        platform: 'GitHub',
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'React_(JavaScript_library)'
        }
    },
    tests: {
        patterns: {
            page: [
                [
                    /data\-reactroot/i
                ],
                [
                    /data\-reactid/i
                ],
                [
                    /react\-root/i
                ]
            ]
        },
        references: [
            [
                'window.React'
            ],
            [
                'window.ReactDOM'
            ],
            [
                'window.react_lib'
            ]
        ]
    },
    versions: {
        references: [
            'window.React.version',
            'window.ReactDOM.version'
        ]
    }
}
