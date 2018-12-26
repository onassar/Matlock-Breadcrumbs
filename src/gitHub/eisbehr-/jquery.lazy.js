{
    properties: {
        link: 'https://github.com/eisbehr-/jquery.lazy',
        platform: 'GitHub',
        examples: [
            'https://getstencil.com/',
            'http://jquery.eisbehr.de/lazy/'
        ],
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
