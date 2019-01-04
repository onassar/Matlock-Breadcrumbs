{
    properties: {
        donate: {
            link: 'https://js.foundation/about/donate'
        },
        examples: [
            'https://books.wwnorton.com/books/detail.aspx?id=4294994630'
        ],
        link: 'https://github.com/jquery/jquery-ui',
        name: 'jQuery UI',
        platform: 'GitHub',
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'JQuery_UI'
        }
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
                fileroot: 'jQuery-ui'
            },
            {
                key: 'query.stylesheet',
                fileroot: 'jQuery-ui'
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
                fileroot: 'jQuery-ui'
            },
            {
                key: 'query.stylesheet',
                fileroot: 'jQuery-ui'
            }
        ]
    }
}
