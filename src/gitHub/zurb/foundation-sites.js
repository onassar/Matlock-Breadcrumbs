{
    properties: {
        link: 'https://github.com/zurb/foundation-sites',
        platform: 'GitHub',
        examples: [
            'https://foundation.zurb.com/'
        ],
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'Foundation_(framework)'
        }
    },
    tests: {
        patterns: {
            page: [
                [
                    /<div [^>]*class="[^"]*(?:small|medium|large)-\d{1,2} columns/i
                ]
            ]
        },
        references: [
            [
                'window.Foundation'
            ]
        ]
    },
    versions: {
        references: [
            'window.Foundation.version'
        ]
    }
}
