{
    dependencies: [
        'https://github.com/php/php-src'
    ],
    properties: {
        examples: [
            'https://www.tourismwinnipeg.com/'
        ],
        link: 'https://github.com/cakephp/cakephp',
        name: 'CakePHP',
        platform: 'GitHub',
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'CakePHP'
        }
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
