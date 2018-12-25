{
    properties: {
        link: 'https://github.com/gohugoio/hugo',
        platform: 'GitHub',
        tests: [
            'https://1password.com/',
            'https://www.louisdurrant.co.uk/'
        ],
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'Hugo_(software)',
            sections: []
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
