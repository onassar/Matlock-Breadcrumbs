{
    properties: {
        link: 'https://github.com/julianshapiro/velocity',
        notes: [],
        platform: 'GitHub',
        tests: [
            'https://appsumo.com/stencil-2018/',
            'https://account.microsoft.com/privacy/ad-settings/signedout'
        ],
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'Velocity_(JavaScript_library)',
            sections: []
        }
    },
    tests: {
        references: [
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
            'window.jQuery.fn.velocity.version.major + \'.\' + window.jQuery.fn.velocity.version.minor + \'.\' + window.jQuery.fn.velocity.version.patch',
            'window.jQuery.Velocity.version.major + \'.\' + window.jQuery.Velocity.version.minor + \'.\' + window.jQuery.Velocity.version.patch'
        ]
    }
}
