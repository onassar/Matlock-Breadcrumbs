{
    properties: {
        link: 'https://github.com/php/php-src',
        platform: 'GitHub',
        examples: [
            'http://www.cbc.radio-canada.ca/en/'
        ],
        name: 'PHP',
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'PHP'
        }
    },
    tests: {
        patterns: {
            headers: [
                [
                    /PHPSESSID/i
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
                /x\-powered\-by\: php\/([0-9\.]+)/i
            ]
        }
    }
}
