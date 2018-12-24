{
    dependencies: [
        'https://github.com/php/php-src'
    ],
    properties: {
        donate: {
            link: 'https://wordpressfoundation.org/donate/'
        },
        link: 'https://github.com/WordPress/WordPress',
        platform: 'GitHub',
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'WordPress',
            sections: []
        }
    },
    tests: {
        patterns: {
            page: [
                [
                    /<link[^>]+wp\-content\/plugins/i
                ],
                [
                    /<link[^>]+wp\-content\/themes/i
                ],
                [
                    /<link[^>]+wp\-content\/uploads/i
                ],
                [
                    /<link[^>]+wp\-includes/i
                ],
                [
                    /<meta[^>]+content\="WordPress /i
                ]
            ]
        }
    },
    versions: {
        patterns: {
            page: [
                /<meta[^>]+content\="WordPress ([0-9\.]+)/i
            ]
        }
    }
}
