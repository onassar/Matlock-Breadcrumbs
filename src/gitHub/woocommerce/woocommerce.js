{
    properties: {
        link: 'https://github.com/woocommerce/woocommerce',
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
                /<meta[^>]+name="generator"[^>]+content="WooCommerce ([^ "]+)[^"]*"/i,
                /<meta[^>]+name="WooCommerce ([^ "]+)[^"]*"[^>]+content="generator"/i
            ]
        }
    }
}
