{
    properties: {
        link: 'https://github.com/getgauge/gauge',
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
