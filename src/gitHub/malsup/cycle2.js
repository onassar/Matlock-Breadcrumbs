{
    properties: {
        donate: {
            link: 'https://www.paypal.com/webapps/shoppingcart?flowlogging_id=5c45f4c86b318&mfid=1545295058279_5c45f4c86b318#/checkout/openButton'
        },
        link: 'https://github.com/malsup/cycle2',
        platform: 'GitHub',
        examples: [
            'https://www.sandiego.gov/',
            'https://js.foundation/about/donate'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.jQuery.fn.cycle',
                'window.jQuery.fn.cycle.version'
            ],
            [
                'window.jQuery.fn.cycletwo',
                'window.jQuery.fn.cycletwo.version'
            ]
        ]
    },
    versions: {
        statements: [
            'window.jQuery.fn.cycle.version().split(\' \').pop()',
            'window.jQuery.fn.cycletwo.version().split(\' \').pop()'
        ]
    }
}
