{
    properties: {
        link: 'https://github.com/facebook/react',
        platform: 'GitHub',
        examples: [
            'https://www.cbc.ca/'
        ],
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'React_(JavaScript_library)',
            sections: []
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
