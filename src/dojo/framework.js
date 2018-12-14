{
    properties: {
        link: 'https://github.com/dojo/framework',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            ['window.dojo']
        ]
    },
    versions: {
        statements: [
            'dojo.version.major.toString() + \'.\' + dojo.version.minor.toString()'
        ]
    }
}
