{
    properties: {
        examples: [
            'http://joaopereirawd.github.io/fakeLoader.js/demo/demo1.html'
        ],
        link: 'https://github.com/joaopereirawd/fakeLoader.js',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.jQuery',
                'window.jQuery.fakeLoader'
            ],
            [
                'window.jQuery',
                'window.jQuery.fn',
                'window.jQuery.fn.fakeLoader'
            ]
        ]
    }
}
