[
    {
        properties: {
            donate: {
                link: 'https://js.foundation/about/donate'
            },
            link: 'https://github.com/jquery/jquery',
            platform: 'GitHub',
            tests: [
                'http://holderjs.com/'
            ],
            type: 'repository'
        },
        tests: {
            references: [
                ['window.jQuery']
            ]
        },
        versions: {
            patterns: {
                page: [
                    /<script[^>]+googleapis[^>]+jquery\/([0-9\.]+)\/jquery/i      // https://i.imgur.com/6QH50iS.jpg
                ]
            },
            references: [
                'window.jQuery.fn.jquery'
            ]
        }
    },{
    properties: {
        link: 'https://github.com/Polymer/polymer',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            ['window.Polymer']
        ]
    },
    versions: {
        references: [
            'window.Polymer.version'
        ]
    }
}
]
