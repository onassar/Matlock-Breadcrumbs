{
    properties: {
        donate: {
            link: 'https://js.foundation/about/donate'
        },
        link: 'https://github.com/jquery/jquery',
        notes: [
            'https://i.imgur.com/6QH50iS.jpg'
        ],
        platform: 'GitHub',
        examples: [
            'http://holderjs.com/',
            'https://stackoverflow.com/'
        ],
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'JQuery',
            sections: []
        }
    },
    tests: {
        references: [
            [
                'window.jQuery'
            ]
        ]
    },
    versions: {
        patterns: {
            page: [
                /<script[^>]+googleapis[^>]+jquery\/([0-9\.]+)\/jquery/i
            ]
        },
        references: [
            'window.jQuery.fn.jquery'
        ]
    }
}
