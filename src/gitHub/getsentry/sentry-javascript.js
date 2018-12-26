{
    properties: {
        link: 'https://github.com/getsentry/sentry-javascript',
        platform: 'GitHub',
        examples: [
            'https://getstencil.com/app'
        ],
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
