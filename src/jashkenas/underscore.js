{
    properties: {
        link: 'https://github.com/jashkenas/underscore',
        platform: 'GitHub',
        type: 'repository'
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
