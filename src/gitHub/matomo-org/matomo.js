{
    properties: {
        examples: [
            'https://theannex.com/'
        ],
        link: 'https://github.com/matomo-org/matomo',
        platform: 'GitHub',
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'Matomo_(software)'
        }
    },
    tests: {
        references: [
            [
                'window.Matomo',
                'window.Matomo.addPlugin'
            ],
            [
                'window._paq'
            ]
        ],
        shortcuts: [
            {
                key: 'query.meta.generator',
                generator: 'Matomo'
            }
        ]
    }
}
