{
    properties: {
        examples: [
            'https://semantic-ui.com/'
        ],
        link: 'https://github.com/Semantic-Org/Semantic-UI',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        patterns: {
            page: [
                [
                    /<link[^>]+href="[^"]+semantic(?:\.min)?\.css"/i
                ]
            ]
        },
        references: [
            [
                'window.jQuery.fn.site',
                'window.jQuery.fn.site.settings',
                'window.jQuery.fn.form',
                'window.jQuery.fn.form.settings'
            ]
        ]
    }
}
