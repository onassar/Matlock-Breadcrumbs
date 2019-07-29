{
    properties: {
        examples: [
            'https://www.cbc.ca/',
            'https://www.meetup.com/',
            'https://developers.facebook.com/',
            'https://www.saashub.com/'
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
        references: [
            [
                'window.React'
            ],
            [
                'window.ReactDOM'
            ],
            [
                'window.react_lib'
            ],
            [
                'window.ReactRailsUJS'
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
