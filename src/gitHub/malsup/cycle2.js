{
    properties: {
        donate: {
            link: 'https://www.paypal.com/webapps/shoppingcart?flowlogging_id=5c45f4c86b318&mfid=1545295058279_5c45f4c86b318#/checkout/openButton'
        },
        link: 'https://github.com/malsup/cycle2',
        notes: [],
        platform: 'GitHub',
        tests: [
            'https://www.sandiego.gov/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.jQuery.fn.cycle',
                'window.jQuery.fn.cycle.version'
            ]
        ]
    },
    versions: {
        statements: [
            'window.jQuery.fn.cycle.version().split(\' \').pop()'
        ]
    }
}
