{
    properties: {
        link: 'https://github.com/jashkenas/underscore',
        platform: 'GitHub',
        tests: [
            'https://torontolife.com/food/torontos-best-pies/'
        ],
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'Underscore.js',
            sections: []
        }
    },
    tests: {
        references: [
            [
                'window._',
                'window._.each',
                '!window._.at'
            ],
            [
                'window._u',
                'window._u.each',
                '!window._u.at'
            ]
        ]
    },
    versions: {
        references: [
            'window._.VERSION',
            'window._u.VERSION'
        ]
    }
}
