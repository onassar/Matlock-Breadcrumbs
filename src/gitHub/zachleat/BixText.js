{
    properties: {
        link: 'https://github.com/zachleat/BigText',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.BigText',
                'window.BigText.noConflict'
            ]
        ],
        statements: [
            ['window.jQuery(\'body\').bigtext']
        ]
    }
}
