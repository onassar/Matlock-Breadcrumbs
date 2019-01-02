{
    dependencies: [
        'https://github.com/facebook/react'
    ],
    properties: {
        examples: [
            'https://insomnia.rest/blog/sustainable-profit'
        ],
        link: 'https://github.com/gatsbyjs/gatsby',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        patterns: {
            page: [
                [
                    /<meta[^>]+name="generator"[^>]+content="Gatsby/i
                ],
                [
                    /<meta[^>]+name="Gatsby[^"]+"[^>]+content="generator"/i
                ]
            ]
        },
        strings: {
            page: [
                [
                    '<div id="___gatsby">'
                ],
                [
                    '<style id="gatsby-inlined-css">'
                ]
            ]
        }
    },
    versions: {
        patterns: {
            page: [
                /<meta[^>]+name="generator"[^>]+content="Gatsby ([^ "]+)[^"]*"/i,
                /<meta[^>]+name="Gatsby ([^ "]+)[^"]*"[^>]+content="generator"/i
            ]
        }
    }
}
