{
    properties: {
        donate: {
            link: 'https://js.foundation/about/donate'
        },
        link: 'https://github.com/jquery/jquery-migrate',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.jQuery',
                'window.jQuery.migrateWarnings'
            ]
        ]
    },
    versions: {
        references: [
            'window.jQuery.migrateVersion'
        ]
    }
}
