{
    properties: {
        examples: [
            'https://woocommerce.com/flexslider/'
        ],
        link: 'https://github.com/woocommerce/woocommerce',
        name: 'WooCommerce',
        platform: 'GitHub',
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'WooCommerce'
        }
    },
    tests: {
        references: [
            [
                'window.woocommerce_params'
            ]
        ],
        shortcuts: [
            {
                key: 'query.meta.generator',
                generator: 'WooCommerce'
            }
        ]
    },
    versions: {
        shortcuts: [
            {
                key: 'query.meta.generator',
                generator: 'WooCommerce'
            }
        ]
    }
}
