{
    properties: {
        link: 'https://github.com/sphinx-doc/sphinx',
        notes: [
            'https://i.imgur.com/vTzFde7.jpg'
        ],
        platform: 'GitHub',
        tests: [
            'http://varnish-cache.org/'
        ],
        type: 'repository'
    },
    tests: {
        patterns: {
            page: [
                [
                    /Powered by.{0,200}Sphinx/i
                ]
            ]
        },
        references: [
            [
                'window.DOCUMENTATION_OPTIONS',
                'window.DOCUMENTATION_OPTIONS.URL_ROOT'
            ]
        ]
    }
}
