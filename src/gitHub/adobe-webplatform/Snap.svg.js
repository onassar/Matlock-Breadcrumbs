{
    properties: {
        link: 'https://github.com/adobe-webplatform/Snap.svg',
        platform: 'GitHub',
        tests: [
            'http://snapsvg.io/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.Snap',
                'window.Snap.parseTransformString',
            ]
        ]
    },
    versions: {
        references: [
            'window.Snap.version'
        ]
    }
}
