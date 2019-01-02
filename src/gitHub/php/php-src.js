{
    properties: {
        examples: [
            'http://www.cbc.radio-canada.ca/en/'
        ],
        link: 'https://github.com/php/php-src',
        platform: 'GitHub',
        name: 'PHP',
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'PHP'
        }
    },
    tests: {
        patterns: {
            cookies: [
                [
                    /PHPSESSID/i
                ]
            ]
        },
        shortcuts: [
            {
                key: 'header.server',
                name: 'PHP'
            }
        ]
    },
    versions: {
        shortcuts: [
            {
                key: 'header.server',
                name: 'PHP'
            }
        ]
    }
}
