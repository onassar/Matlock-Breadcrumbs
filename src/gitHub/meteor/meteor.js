{
    properties: {
        link: 'https://github.com/meteor/meteor',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        patterns: {
            page: [
                [
                    /<link[^>]+__meteor-css__/i
                ]
            ]
        },
        references: [
            ['window.Meteor']
        ]
    },
    versions: {
        statements: [
            'window.Meteor.release.split(\'@\').pop()'
        ]
    }
}
