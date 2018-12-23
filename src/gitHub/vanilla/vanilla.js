{
    properties: {
        link: 'https://github.com/vanilla/vanilla',
        platform: 'GitHub',
        tests: [
            'https://open.vanillaforums.com/'
        ],
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'Vanilla_Forums',
            sections: []
        }
    },
    tests: {
        patterns: {
            page: [
                [
                    /<body[^>]id=\"vanilla/i
                ]
            ]
        }
    }
}
