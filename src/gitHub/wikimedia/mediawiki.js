{
    properties: {
        donate: {
            link: 'https://donate.wikimedia.org/wiki/Ways_to_Give'
        },
        link: 'https://github.com/wikimedia/mediawiki',
        platform: 'GitHub',
        examples: [
            'https://en.wikipedia.org/wiki/Fire_at_Sea'
        ],
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'MediaWiki'
        }
    },
    tests: {
        patterns: {
            page: [
                [
                    /<meta[^>]+name="generator"[^>]+content="MediaWiki/i
                ],
                [
                    /<meta[^>]+name="MediaWiki[^"]+"[^>]+content="generator"/i
                ]
            ]
        }
    },
    versions: {
        patterns: {
            page: [
                /<meta[^>]+name="generator"[^>]+content="MediaWiki ([^ "]+)[^"]*"/i,
                /<meta[^>]+name="MediaWiki ([^ "]+)[^"]*"[^>]+content="generator"/i
            ]
        }
    }
}
