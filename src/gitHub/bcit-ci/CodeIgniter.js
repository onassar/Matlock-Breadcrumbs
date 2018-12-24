{
    dependencies: [
        'https://github.com/php/php-src'
    ],
    properties: {
        link: 'https://github.com/bcit-ci/CodeIgniter',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        patterns: {
            cookies: [
                [
                    /ci_session/i
                ]
            ]
        }
    }
}
