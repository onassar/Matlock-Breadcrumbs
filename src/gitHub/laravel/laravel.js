{
    dependencies: [
        'https://github.com/php/php-src'
    ],
    properties: {
        link: 'https://github.com/laravel/laravel',
        name: 'Laravel',
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
