{
    properties: {
        examples: [
            'https://tim.fyi',
            'https://getstencil.com/blog',
            'https://lodash.com/docs/4.17.11'
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
        patterns: {
            page: [
                [
                    /<link[^>]+fontawesome/i
                ],
                [
                    /<link[^>]+font\-awesome/i
                ],
                [
                    /href="https?:\/\/use\.fontawesome\.com/i
                ]
            ]
        }
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
