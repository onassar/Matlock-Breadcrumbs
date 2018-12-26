{
    properties: {
        link: 'https://github.com/getgauge/gauge',
        notes: [],
        platform: 'GitHub',
        examples: [
            'http://hood.ie/'
        ],
        type: 'repository'
    },
    tests: {
        patterns: {
            cookies: [
                [
                    /_gauges_/i
                ]
            ]
        },
        references: [
            [
                'window._gauges'
            ]
        ]
    }
}
