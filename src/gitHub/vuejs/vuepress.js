{
    dependencies: [
        'https://github.com/vuejs/vue'
    ],
    properties: {
        donate: {
            link: 'https://vuejs.org/support-vuejs/'
        },
        examples: [
            'https://vuepress.vuejs.org/',
            'https://router.vuejs.org/'
        ],
        link: 'https://github.com/vuejs/vuepress',
        name: 'VuePress',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.__VUEPRESS_VERSION__'
            ]
        ]
    },
    versions: {
        references: [
            'window.__VUEPRESS_VERSION__.version'
        ]
    }
}
