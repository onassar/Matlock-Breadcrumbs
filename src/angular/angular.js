{
    properties: {
        link: 'https://github.com/angular/angular.js',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        strings: [
            page: [
                [
                    'ng-version="'
                ]
            ]
        ],
        references: [
            ['window.angular'],
            [
                'ng.coreTokens',
                'ng.probe'
            ]
        ]
    },
    versions: {
        patterns: {
            page: [
                /ng-version="([^"]+)/i
            ]
        },
        references: [
            'window.angular.version.full'
        ]
    }
}
