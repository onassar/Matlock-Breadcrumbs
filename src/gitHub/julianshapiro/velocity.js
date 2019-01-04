{
    properties: {
        link: 'https://github.com/julianshapiro/velocity',
        platform: 'GitHub',
        examples: [
            'https://appsumo.com/stencil-2018/',
            'https://account.microsoft.com/privacy/ad-settings/signedout'
        ],
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'Velocity_(JavaScript_library)'
        }
    },
    tests: {
        references: [
            [
                'window.Vel',
                'window.Vel.Easings'
            ],
            [
                'window.jQuery.fn.velocity'
            ],
            [
                'window.jQuery.Velocity'
            ]
        ]
    },
    versions: {
        statements: [
            'window.Vel.version.major + \'.\' + window.Vel.version.minor + \'.\' + window.Vel.version.patch',
            'window.jQuery.fn.velocity.version.major + \'.\' + window.jQuery.fn.velocity.version.minor + \'.\' + window.jQuery.fn.velocity.version.patch',
            'window.jQuery.Velocity.version.major + \'.\' + window.jQuery.Velocity.version.minor + \'.\' + window.jQuery.Velocity.version.patch'
        ]
    }
}
