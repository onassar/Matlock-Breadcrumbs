{
    properties: {
        examples: [
            'https://getstencil.com/',
            'http://jquery.eisbehr.de/lazy/'
        ],
        link: 'https://github.com/eisbehr-/jquery.lazy',
        name: 'jQuery & Zepto Lazy',
        platform: 'GitHub',
        tags: [
            'lazy-loading'
        ],
        type: 'repository'
    },
    tests: {
        statements: [
            [
                'window.jQuery(document.createElement("div")).Lazy({chainable: false}).config'
            ],
            [
                'window.Zepto(document.createElement("div")).Lazy({chainable: false}).config'
            ]
        ]
    }
}
