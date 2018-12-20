{
    properties: {
        link: 'https://github.com/systemjs/systemjs',
        notes: [],
        platform: 'GitHub',
        tests: [
            'https://ng-semantic.herokuapp.com/#/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.System',
                'window.System.import',
                'window.System.register'
            ]
        ]
    },
    versions: {
        references: [
            'window.System.version'
        ]
    }
}
