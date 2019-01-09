{
    properties: {
        examples: [
            'https://foundation.zurb.com/'
        ],
        link: 'https://github.com/zurb/foundation-sites',
        platform: 'GitHub',
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
