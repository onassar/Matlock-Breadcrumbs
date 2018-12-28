{
    properties: {
        link: 'https://github.com/jekyll/jekyll',
        notes: [],
        platform: 'GitHub',
        examples: [
            'https://jekyllrb.com/'
        ],
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'Jekyll_(software)'
        }
    },
    tests: {
        patterns: {
            page: [
                [
                    /<meta[^>]+content\="Jekyll\b/i
                ]
            ]
        }
    },
    versions: {
        patterns: {
            page: [
                /<meta[^>]+name="generator"[^>]+content="Jekyll ([^"]+)"/i,
                /<meta[^>]+content="Jekyll ([^"]+)"[^>]+name="generator"/i
            ]
        }
    }
}
