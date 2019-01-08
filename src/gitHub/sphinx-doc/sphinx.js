{
    properties: {
        examples: [
            'http://varnish-cache.org/',
            'http://docs.gunicorn.org/en/stable/run.html'
        ],
        link: 'https://github.com/sphinx-doc/sphinx',
        name: 'Sphinx',
        notes: [
            'https://i.imgur.com/vTzFde7.jpg'
        ],
        platform: 'GitHub',
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
