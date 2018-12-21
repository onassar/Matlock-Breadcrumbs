{
    properties: {
        donate: {
            link: 'https://vuejs.org/support-vuejs/'
        },
        link: 'https://github.com/vuejs/vue',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        patterns: {
            page: [
                [/data\-vue\-meta/i],
                [/data\-vue\-meta\-server\-rendered/i]
            ]
        },
        references: [
            [
                'window.Vue'
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
