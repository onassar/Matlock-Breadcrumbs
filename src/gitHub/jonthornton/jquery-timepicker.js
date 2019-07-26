{
    properties: {
        examples: [
            'http://jonthornton.github.io/jquery-timepicker/',
            'https://demo.matomo.org/index.php?module=CoreHome&action=index&idSite=62&period=day&date=yesterday#?idSite=62&period=day&date=yesterday&category=Dashboard_Dashboard&subcategory=1'
        ],
        link: 'https://github.com/jonthornton/jquery-timepicker',
        name: 'jQuery Timepicker Plugin',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                '!window.jQuery.timepicker',
                'window.jQuery.fn.timepicker'
            ]
        ]
    }
}
