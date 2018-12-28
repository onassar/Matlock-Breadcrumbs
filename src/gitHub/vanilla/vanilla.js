{
    properties: {
        link: 'https://github.com/vanilla/vanilla',
        platform: 'GitHub',
        examples: [
            'https://open.vanillaforums.com/'
        ],
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'Vanilla_Forums'
        }
    },
    tests: {
        patterns: {
            page: [
                [
                    /<body[^>]id=\"(?:DiscussionsPage|vanilla)/i
                ]
            ]
        },
        references: [
            [
                'window.Vanilla',
                'window.Vanilla.parent',
                'window.Vanilla.scrollTo'
            ],
            [
                'window.vanillaforum'
            ]
        ]
    }
}
