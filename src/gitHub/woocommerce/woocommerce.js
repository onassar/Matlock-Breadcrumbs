{
    properties: {
        link: 'https://github.com/woocommerce/woocommerce',
        notes: [],
        platform: 'GitHub',
        examples: [
            'https://woocommerce.com/flexslider/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.woocommerce_params'
            ]
        ]
    },
    versions: {
        patterns: {
            page: [
                /<meta[^>]+content\="WooCommerce ([0-9\.]+)/i
            ]
        }
    }
}
