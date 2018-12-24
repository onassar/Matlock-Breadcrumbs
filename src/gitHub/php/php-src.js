{
    properties: {
        link: 'https://github.com/php/php-src',
        platform: 'GitHub',
        tests: [
            'http://www.cbc.radio-canada.ca/en/'
        ],
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'PHP',
            sections: []
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
