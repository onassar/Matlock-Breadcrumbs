{
    properties: {
        examples: [
            'https://developer.statuspage.io/'
        ],
        link: 'https://github.com/Rebilly/ReDoc',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.Redoc',
                'window.Redoc.init'
            ]
        ],
        shortcuts: [
            {
                key: 'query.meta.generator',
                generator: 'ReDoc'
            }
        ]
    },
    versions: {
        references: [
            'window.Redoc.version'
        ],
        shortcuts: [
            {
                key: 'query.meta.generator',
                generator: 'ReDoc'
            }
        ]
    }
}
