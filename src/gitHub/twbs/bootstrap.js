{
    properties: {
        link: 'https://github.com/twbs/bootstrap',
        name: 'Bootstrap',
        notes: [
            'https://i.imgur.com/BrbdjkX.jpg'
        ],
        platform: 'GitHub',
        tests: [
            'https://www.bootstrapcdn.com/'
        ],
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'Bootstrap_(front-end_framework)',
            sections: []
        }
    },
    tests: {
        patterns: {
            page: [
                [
                    /\<link[^>]+\/bootstrap\//i
                ]
            ]
        },
        references: [
            [
                'window.jQuery.fn.tooltip'
            ]
        ]
    },
    versions: {
        patterns: {
            page: [
                /\<link[^>]+\/bootstrap\/([0-9\.]+)\//i
            ]
        },
        references: [
            'window.jQuery.fn.tooltip.Constructor.VERSION'
        ]
    }
}
