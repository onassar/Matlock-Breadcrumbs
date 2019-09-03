{
    dependencies: [
        'https://github.com/ruby/ruby'
    ],
    properties: {
        examples: [
            'https://jekyllrb.com/'
        ],
        link: 'https://github.com/jekyll/jekyll',
        name: 'Jekyll',
        platform: 'GitHub',
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'Jekyll_(software)'
        }
    },
    tests: {
        shortcuts: [
            {
                key: 'query.meta.generator',
                generator: 'Jekyll'
            }
        ],
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
        shortcuts: [
            {
                key: 'query.meta.generator',
                generator: 'Jekyll'
            }
        ]
    }
}
