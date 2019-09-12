{
    properties: {
        examples: [
            'https://ng-semantic.herokuapp.com/#/'
        ],
        link: 'https://github.com/systemjs/systemjs',
        name: 'SystemJS',
        platform: 'GitHub',
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
