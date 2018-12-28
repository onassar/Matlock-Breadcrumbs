{
    properties: {
        link: 'https://github.com/systemjs/systemjs',
        platform: 'GitHub',
        examples: [
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
