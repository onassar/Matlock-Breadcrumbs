{
    properties: {
        examples: [
            'https://www.sandiego.gov/',
            'https://js.foundation/about/donate'
        ],
        link: 'https://github.com/malsup/cycle2',
        platform: 'GitHub',
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
