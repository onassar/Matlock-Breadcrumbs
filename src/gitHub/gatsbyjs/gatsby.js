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
        shortcuts: [
            {
                key: 'query.meta.generator',
                generator: 'Gatsby'
            }
        ],
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
        shortcuts: [
            {
                key: 'query.meta.generator',
                generator: 'Gatsby'
            }
        ]
    }
}
