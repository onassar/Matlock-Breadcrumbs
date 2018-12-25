{
    properties: {
        link: 'https://github.com/wikimedia/mediawiki',
        platform: 'GitHub',
        tests: [
            'https://en.wikipedia.org/wiki/Fire_at_Sea'
        ],
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'MediaWiki',
            sections: []
        }
    },
    tests: {
        patterns: {
            page: [
                [
                    /<meta[^>]+content\="MediaWiki\b/i
                ]
            ]
        }
    },
    versions: {
        patterns: {
            page: [
                /<meta[^>]+content\="MediaWiki ([^"]+)/i
            ]
        }
    }
}
