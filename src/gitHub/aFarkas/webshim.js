{
    properties: {
        examples: [
            'https://afarkas.github.io/webshim/demos/',
            'https://www.barnesandnoble.com/w/principles-ray-dalio/1125955035?ean=9781501124020#/'
        ],
        link: 'https://github.com/aFarkas/webshim',
        name: 'Webshim',
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
