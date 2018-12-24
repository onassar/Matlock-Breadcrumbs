{
    properties: {
        link: 'https://github.com/lodash/lodash',
        platform: 'GitHub',
        tests: [
            'https://lodash.com/'
        ],
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'Lodash',
            sections: []
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
            ]
        ]
    },
    versions: {
        references: [
            'window._.VERSION',
            'window.__lodash.VERSION'
        ]
    }
}
