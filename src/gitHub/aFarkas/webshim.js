{
    properties: {
        examples: [
            'https://afarkas.github.io/webshim/demos/'
        ],
        link: 'https://github.com/aFarkas/webshim',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.jQuery.webshim.ready'
            ],
            [
                'window.jQuery.webshims.ready'
            ],
            [
                'window.webshim.ready'
            ],
            [
                'window.webshims.ready'
            ]
        ]
    },
    versions: {
        references: [
            'window.jQuery.webshim.version',
            'window.jQuery.webshims.version',
            'window.webshim.version',
            'window.webshims.version'
        ]
    }
}
