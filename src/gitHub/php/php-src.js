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
            ],
            headers: [
                [
                    /server\:.*? PHP\//i
                ],
                [
                    /x\-powered\-by\: php/i
                ]
            ]
        }
    },
    versions: {
        patterns: {
            headers: [
                /server:.*? php\/([0-9\.]+)/i,
                /x\-powered\-by\: php\/([0-9\.]+)/i
            ]
        }
    }
}
