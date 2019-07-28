{
    properties: {
        examples: [
            'https://lodash.com/',
            'http://danieltao.com/lazy.js/'
        ],
        link: 'https://github.com/lodash/lodash',
        platform: 'GitHub',
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'Lodash'
        }
    },
    tests: {
        references: [
            [
                'window._',
                'window._.at',
                'window._.assign'
            ],
            [
                'window.__lodash'
            ],
            [
                'window.lodash'
            ]
        ],
        shortcuts: [
            {
                key: 'query.script',
                fileroot: 'lodash'
            }
        ]
    },
    versions: {
        references: [
            'window._.VERSION',
            'window.__lodash.VERSION',
            'window.lodash.VERSION'
        ],
        shortcuts: [
            {
                key: 'query.script',
                fileroot: 'lodash'
            }
        ]
    }
}
