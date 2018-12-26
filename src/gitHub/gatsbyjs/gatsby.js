{
    dependencies: [
        'https://github.com/facebook/react'
    ],
    properties: {
        link: 'https://github.com/gatsbyjs/gatsby',
        notes: [],
        platform: 'GitHub',
        examples: [
            'https://insomnia.rest/blog/sustainable-profit'
        ],
        type: 'repository'
    },
    tests: {
        patterns: {
            page: [
                [
                    /<meta[^>]+content\="Gatsby\b/i
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
                /<meta[^>]+content\="Gatsby ([^"]+)/i
            ]
        }
    }
}
