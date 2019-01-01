{
    properties: {
        examples: [
            'https://scrollrevealjs.org/',
            'https://www.tableau.com/asset/how-build-dashboards-persuade-inform-and-engage'
        ],
        licenses: {
            commercial: {
                currency: 'USD',
                paid: true,
                range: [
                    30,
                    100,
                    400
                ]
            }
        },
        link: 'https://github.com/scrollreveal/scrollreveal',
        name: 'ScrollReveal',
        platform: 'GitHub',
        tags: [
            'scrolling'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.sr',
                'window.sr.isSupported'
            ],
            [
                'window.scrollReveal',
                'window.scrollReveal.isSupported'
            ],
            [
                'window.ScrollReveal',
                'window.ScrollReveal.isSupported'
            ]
        ]
    },
    versions: {
        references: [
            'window.sr.version',
            'window.scrollReveal.version',
            'window.ScrollReveal.version'
        ]
    }
}
