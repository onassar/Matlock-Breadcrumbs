{
    properties: {
        link: 'https://github.com/lodash/lodash',
        platform: 'GitHub',
        examples: [
            'https://lodash.com/',
            'http://danieltao.com/lazy.js/'
        ],
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
                'window._.at'
            ],
            [
                'window.__lodash'
            ],
            [
                'window.lodash'
            ]
        ]
    },
    versions: {
        references: [
            'window._.VERSION',
            'window.__lodash.VERSION',
            'window.lodash.VERSION'
        ]
    }
}
