{
    properties: {
        link: 'https://github.com/gohugoio/hugo',
        platform: 'GitHub',
        examples: [
            'https://1password.com/',
            'https://www.louisdurrant.co.uk/'
        ],
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
                    /<meta[^>]+content\="Hugo\b/i
                ]
            ]
        }
    },
    versions: {
        patterns: {
            page: [
                /<meta[^>]+content\="Hugo ([^"]+)/i
            ]
        }
    }
}
