{
    properties: {
        link: 'https://github.com/vanilla/vanilla',
        platform: 'GitHub',
        tests: [
            'https://open.vanillaforums.com/'
        ],
        type: 'repository'
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
