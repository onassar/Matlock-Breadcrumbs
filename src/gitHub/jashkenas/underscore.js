{
    properties: {
        link: 'https://github.com/jashkenas/underscore',
        platform: 'GitHub',
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
            ]
        ]
    },
    versions: {
        references: [
            'window._.VERSION'
        ]
    }
}
