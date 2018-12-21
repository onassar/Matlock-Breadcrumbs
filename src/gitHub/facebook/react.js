{
    properties: {
        link: 'https://github.com/facebook/react',
        platform: 'GitHub',
        tests: [
            'https://www.cbc.ca/'
        ],
        type: 'repository'
    },
    tests: {
        patterns: {
            page: [
                [/data\-reactroot/i],
                [/data\-reactid/i],
                [/react\-root/i]
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
            'window.React.version'
        ]
    }
}
