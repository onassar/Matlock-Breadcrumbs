{
    properties: {
        examples: [
            'https://1password.com/',
            'https://www.louisdurrant.co.uk/'
        ],
        link: 'https://github.com/gohugoio/hugo',
        platform: 'GitHub',
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'Hugo_(software)'
        }
    },
    tests: {
        patterns: {
            page: [
                [
                    /<meta[^>]+name="generator"[^>]+content="Hugo/i
                ],
                [
                    /<meta[^>]+name="Hugo[^"]+"[^>]+content="generator"/i
                ]
            ]
        }
    },
    versions: {
        patterns: {
            page: [
                /<meta[^>]+name="generator"[^>]+content="Hugo ([^ "]+)[^"]*"/i,
                /<meta[^>]+name="Hugo ([^ "]+)[^"]*"[^>]+content="generator"/i
            ]
        }
    }
}
