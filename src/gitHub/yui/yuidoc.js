{
    properties: {
        examples: [
            'https://yuilibrary.com/'
        ],
        link: 'https://github.com/yui/yuidoc',
        name: 'YUIDoc',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        queries: [
            [
                {
                    selectors: [
                        'body.yui3-skin-sam'
                    ],
                    length: {
                        operator: '>',
                        value: 0
                    }
                }
            ]
        ]
    }
}
