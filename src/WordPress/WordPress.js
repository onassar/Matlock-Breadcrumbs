{
    dependencies: [
        'gitHub/php/php-src'
    ],
    properties: {
        donate: {
            link: 'https://wordpressfoundation.org/donate/'
        },
        link: 'https://github.com/WordPress/WordPress',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        patterns: {
            page: [
                [/\<link[^>]+wp\-content\/plugins/i],
                [/\<link[^>]+wp\-content\/themes/i],
                [/\<link[^>]+wp\-content\/uploads/i],
                [/\<link[^>]+wp\-includes/i]
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
