{
    properties: {
        link: 'https://github.com/krisk/Fuse',
        platform: 'GitHub',
        tags: [
            'search'
        ],
        tests: [
            'http://fusejs.io/'
        ],
        type: 'repository'
    },
    tests: {
        statements: [
            [
                'new window.Fuse([], {}).options',
                'new window.Fuse([], {}).search'
            ]
        ]
    }
}
