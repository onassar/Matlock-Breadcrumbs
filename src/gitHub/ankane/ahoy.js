{
    dependencies: [
        'https://github.com/rails/rails'
    ],
    properties: {
        examples: [
            'https://www.instacart.com/opensource'
        ],
        link: 'https://github.com/ankane/ahoy',
        name: 'Ahoy Analytics',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        patterns: {
            cookies: [
                [
                    /ahoy_track/i
                ],
                [
                    /ahoy_visit/i
                ],
                [
                    /ahoy_visitor/i
                ]
            ]
        },
        references: [
            [
                'window.ahoy'
            ]
        ]
    }
}
