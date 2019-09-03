{
    properties: {
        examples: [
            'https://torontolife.com/food/torontos-best-pies/',
            'http://docs.gunicorn.org/en/stable/run.html'
        ],
        link: 'https://github.com/jashkenas/underscore',
        name: 'Underscore.js',
        platform: 'GitHub',
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'Underscore.js'
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
            ],
            [
                'window.$u',
                'window.$u.each',
                '!window.$u.at'
            ]
        ]
    },
    versions: {
        references: [
            'window._.VERSION',
            'window._u.VERSION',
            'window.$u.VERSION'
        ]
    }
}
