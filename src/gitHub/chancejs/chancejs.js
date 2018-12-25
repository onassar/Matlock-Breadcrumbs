{
    properties: {
        link: 'https://github.com/chancejs/chancejs',
        platform: 'GitHub',
        tests: [
            'http://chancejs.com/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.chance',
                'window.chance.prototype.bool'
            ],
            [
                'window.Chance',
                'window.Chance.prototype.bool'
            ]
        ]
    },
    versions: {
        references: [
            'window.chance.version',
            'window.Chance.version'
        ]
    }
}
