{
    properties: {
        link: 'https://github.com/angular/angular.js',
        platform: 'GitHub',
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'Angular_(application_platform)',
            sections: []
        }
    },
    tests: {
        strings: {
            page: [
                [
                    'ng-version="'
                ]
            ]
        },
        references: [
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
        }
    }
}
