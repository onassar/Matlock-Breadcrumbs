{
    uses: [
        'gitHub/nodeca/pako'
    ],
    properties: {
        link: 'https://github.com/Stuk/jszip',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.JSZip'
            ]
        ]
    },
    versions: {
        references: [
            'window.JSZip.version'
        ]
    }
}
