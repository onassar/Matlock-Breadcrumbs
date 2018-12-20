{
    properties: {
        link: 'https://github.com/marcj/jquery-selectBox',
        platform: 'GitHub',
        tests: [
            'https://greensock.com/',
            'http://marcj.github.io/jquery-selectBox/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.SelectBox',
                'window.SelectBox.prototype.getOptions'
            ],
            [
                'window.jQuery.fn.selectBox'
            ]
        ]
    },
    versions: {
        references: [
            'window.SelectBox.prototype.version'
        ]
    }
}
