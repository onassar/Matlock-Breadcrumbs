{
    properties: {
        examples: [
            'https://tim.fyi',
            'https://getstencil.com/blog'
        ],
        link: 'https://github.com/FortAwesome/Font-Awesome',
        notes: [
            'https://i.imgur.com/3AhoAeu.jpg',
            'https://i.imgur.com/z3zoICN.jpg',
            'https://i.imgur.com/nMIVbUf.jpg'
        ],
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
        shortcuts: [
            {
                key: 'query.stylesheets',
                stylesheets: [
                    '/font-awesome/',
                    '/font-awesome/',
                    '/fontawesome-all/',
                    '/font-awesome-all/',
                    '/fontawesome/',
                    'use.fontawesome.com/',
                ]
            }
        ]
    },
    versions: {
        patterns: {
            page: [
                /<link[^>]+font\-awesome\/([0-9\.]+)\//i,
                /Font\-Awesome\/v([0-9\.]+)\//i,
                /font\-awesome[^>]+ver=v([0-9\.]+)/i,
                /fontawesome\/([0-9\.]+)\//i
            ]
        }
    }
}
