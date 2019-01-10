{
    properties: {
        examples: [
            'https://www.twilio.com/console'
        ],
        link: 'https://github.com/marcuswestin/store.js',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.__store',
                'window.__store.transact',
                'window.__store.serialize',
                'window.__store.deserialize'
            ],
            [
                'window.store',
                'window.store.transact',
                'window.store.serialize',
                'window.store.deserialize'
            ]
        ]
    },
    versions: {
        references: [
            'window.__store.version',
            'window.store.version'
        ]
    }
}
