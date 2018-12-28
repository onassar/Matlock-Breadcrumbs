{
    properties: {
        examples: [
            'https://developer.paypal.com/demo/checkout/#/pattern/client'
        ],
        link: 'https://github.com/paypal/paypal-checkout',
        platform: 'GitHub',
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'PayPal'
        }
    },
    tests: {
        references: [
            [
                'window.paypal',
                'window.paypal.Button',
                'window.paypal.FUNDING'
            ],
            [
                'window.PAYPAL',
                'window.PAYPAL.Button',
                'window.PAYPAL.FUNDING'
            ],
            [
                'window.ppxo',
                'window.ppxo.Button',
                'window.ppxo.FUNDING'
            ]
        ]
    },
    versions: {
        references: [
            'window.paypal.version',
            'window.PAYPAL.version',
            'window.ppxo.version'
        ]
    }
}
