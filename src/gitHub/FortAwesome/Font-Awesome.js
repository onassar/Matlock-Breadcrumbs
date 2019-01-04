{
    properties: {
        examples: [
            'https://tim.fyi',
            'https://getstencil.com/blog',
            'https://i.imgur.com/3AhoAeu.jpg',
            'https://i.imgur.com/z3zoICN.jpg',
            'https://i.imgur.com/nMIVbUf.jpg'
        ],
        link: 'https://github.com/FortAwesome/Font-Awesome',
        platform: 'GitHub',
        tags: [
            'icons'
        ],
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'Font_Awesome'
        }
    },
    tests: {
        queries: [
            [
                {
                    selectors: [
                        'link[rel="dns-prefetch"][href*="fonts.googleapis.com" i]',
                        'link[rel="stylesheet"][href*="font-awesome" i]',
                        'link[rel="stylesheet"][href*="font-awesome-all" i]',
                        'link[rel="stylesheet"][href*="fontawesome" i]',
                        'link[rel="stylesheet"][href*="fontawesome-all" i]',
                        'link[rel="stylesheet"][href*="use.fontawesome.com" i]',
                    ],
                    length: {
                        operator: '>',
                        value: 0
                    }
                }
            ]
        ],
        shortcuts: [
            {
                key: 'query.stylesheets',
                names: [
                    'font-awesome',
                    'font-awesome-all',
                    'fontawesome',
                    'fontawesome-all'
                ]
            }
        ]
    },
    versions: {
        shortcuts: [
            {
                key: 'query.stylesheets',
                names: [
                    'font-awesome',
                    'font-awesome-all',
                    'fontawesome',
                    'fontawesome-all'
                ]
            }
        ]
    }
}
