{
    dependencies: [
        'https://github.com/php/php-src'
    ],
    properties: {
        link: 'https://github.com/cakephp/cakephp',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        patterns: {
            cookies: [
                [
                    /CAKEPHP/i
                ]
            ]
        }
    }
}
