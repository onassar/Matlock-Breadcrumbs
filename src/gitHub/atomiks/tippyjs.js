{
    dependencies: [
        'https://github.com/FezVrasta/popper.js'
    ],
    properties: {
        examples: [
            'https://postmarkapp.com/'
        ],
        link: 'https://github.com/atomiks/tippyjs',
        name: 'Tippy.js',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.tippy',
                'window.tippy.defaults',
                'window.tippy.hideAllPoppers'
            ]
        ]
    },
    versions: {
        references: [
            'window.tippy.version'
        ]
    }
}
