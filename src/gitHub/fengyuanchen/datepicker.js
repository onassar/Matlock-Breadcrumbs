{
    properties: {
        alternatives: [
            'https://github.com/Eonasdan/bootstrap-datetimepicker'
        ],
        tests: [
            'https://fengyuanchen.github.io/datepicker/'
        ],
        link: 'https://github.com/fengyuanchen/datepicker',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.jQuery.fn.datepicker',
                'window.jQuery.fn.datepicker.noConflict',
                '!window.jQuery.fn.datepicker.dates'
            ]
        ]
    }
}
