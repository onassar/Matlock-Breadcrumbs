{
    properties: {
        donate: {
            link: 'https://vuejs.org/support-vuejs/'
        },
        examples: [
            ''
        ],
        link: 'https://github.com/vuejs/vue',
        name: 'Vue.js',
        platform: 'GitHub',
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'Vue.js'
        }
    },
    tests: {
        patterns: {
            page: [
                [
                    /data\-vue\-meta/i
                ],
                [
                    /data\-vue\-meta\-server\-rendered/i
                ]
            ]
        },
        references: [
            [
                'window.Vue',
                'window.Vue.extend'
            ],
            [
                'window.__VUE_HOT_MAP__'
            ]
        ]
    },
    versions: {
        references: [
            'window.Vue.version'
        ]
    }
}
