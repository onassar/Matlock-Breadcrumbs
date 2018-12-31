{
    dependencies: [
        'https://github.com/ruby/ruby'
    ],
    properties: {
        examples: [
            'https://jekyllrb.com/'
        ],
        link: 'https://github.com/jekyll/jekyll',
        platform: 'GitHub',
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
                    /<meta[^>]+name="generator"[^>]+content="Jekyll/i
                ],
                [
                    /<meta[^>]+name="Jekyll[^"]+"[^>]+content="generator"/i
                ]
            ]
        },
        strings: {
            page: [
                [
                    '<!-- Created with Jekyll Now'
                ],
                [
                    '<!-- Begin Jekyll SEO tag'
                ],
                [
                    '<!-- End Jekyll SEO tag'
                ]
            ]
        }
    },
    versions: {
        patterns: {
            page: [
                /<meta[^>]+name="generator"[^>]+content="Jekyll ([^ "]+)[^"]*"/i,
                /<meta[^>]+name="Jekyll ([^ "]+)[^"]*"[^>]+content="generator"/i
            ]
        }
    }
}
