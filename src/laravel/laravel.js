{
    dependencies: [
        'gitHub/php/php-src'
    ],
    properties: {
        link: 'https://github.com/laravel/laravel',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        patterns: {
            cookies: [
                [
                    /laravel_session/i
                ]
            ]
        }
    }
}
