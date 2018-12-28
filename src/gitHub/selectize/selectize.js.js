{
    properties: {
        alternatives: [
            'https://github.com/harvesthq/chosen',
            'https://github.com/select2/select2',
            'https://github.com/xoxco/jQuery-Tags-Input'
        ],
        link: 'https://github.com/selectize/selectize.js',
        platform: 'GitHub',
        examples: [
            'http://selectize.github.io/selectize.js/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.Selectize',
                'window.Selectize.defaults'
            ],
            [
                'window.jQuery.fn.selectize',
                'window.jQuery.fn.selectize.defaults'
            ]
        ]
    }
}
