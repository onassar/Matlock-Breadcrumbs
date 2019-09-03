{
    uses: [
        'https://github.com/nodeca/pako'
    ],
    properties: {
        alternatives: [
            'https://github.com/gildas-lormeau/zip.js'
        ],
        link: 'https://github.com/Stuk/jszip',
        name: 'JSZip',
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
