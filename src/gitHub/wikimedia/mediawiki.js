{
    properties: {
        link: 'https://github.com/wikimedia/mediawiki',
        platform: 'GitHub',
        tests: [
            'https://en.wikipedia.org/wiki/Fire_at_Sea'
        ],
        type: 'repository'
    },
    tests: {
        patterns: {
            page: [
                [
                    /<meta[^>]+content\="MediaWiki /i
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
