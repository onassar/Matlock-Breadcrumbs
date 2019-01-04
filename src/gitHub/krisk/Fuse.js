{
    properties: {
        link: 'https://github.com/krisk/Fuse',
        platform: 'GitHub',
        tags: [
            'search'
        ],
        examples: [
            'http://fusejs.io/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.Fuse',
                'window.Fuse.prototype.search'
            ]
        ],
        statements: [
            [
                'new window.Fuse([], {}).options',
                'new window.Fuse([], {}).search'
            ]
        ]
    },
    versions: {
        references: [
            'window.Fuse.VERSION'
        ],
        shortcuts: [
            {
                key: 'query.script',
                fileroot: 'jQuery'
            },
            {
                key: 'query.stylesheet',
                fileroot: 'jQuery'
            }
        ]
    }
}
