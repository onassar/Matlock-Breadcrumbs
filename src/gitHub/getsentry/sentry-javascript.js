{
    properties: {
        examples: [
            'https://getstencil.com/app',
            'https://funretro.io/'
        ],
        link: 'https://github.com/getsentry/sentry-javascript',
        name: 'Sentry (JavaScript SDK)',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.Raven'
            ],
            [
                'window.Sentry'
            ]
        ]
    },
    versions: {
        references: [
            'window.Raven.VERSION',
            'window.Sentry.SDK_VERSION'
        ]
    }
}
