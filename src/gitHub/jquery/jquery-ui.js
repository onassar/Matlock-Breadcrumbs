{
    properties: {
        donate: {
            link: 'https://js.foundation/about/donate'
        },
        link: 'https://github.com/jquery/jquery-ui',
        name: 'jQuery UI',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.jQuery.ui'
            ]
        ],
        shortcuts: [
            {
                key: 'query.script',
                name: 'jQuery-ui'
            },
            {
                key: 'query.stylesheet',
                name: 'jQuery-ui'
            }
        ]
    },
    versions: {
        references: [
            'window.jQuery.ui.version'
        ],
        shortcuts: [
            {
                key: 'query.script',
                name: 'jQuery-ui'
            },
            {
                key: 'query.stylesheet',
                name: 'jQuery-ui'
            }
        ]
    }
}
