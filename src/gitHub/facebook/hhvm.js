{
    properties: {
        link: 'https://github.com/facebook/hhvm',
        platform: 'GitHub',
        examples: [
            'https://www.mediawiki.org/wiki/API:Query#Title_normalization'
        ],
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'HHVM',
            sections: []
        }
    },
    tests: {
        patterns: {
            headers: [
                [
                    /x\-powered\-by\: hhvm/i
                ]
            ]
        }
    },
    versions: {
        patterns: {
            headers: [
                /x\-powered\-by\: hhvm\/([0-9\.\-a-z]+)/i
            ]
        }
    }
}
