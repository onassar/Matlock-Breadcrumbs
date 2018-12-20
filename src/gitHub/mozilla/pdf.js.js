{
    properties: {
        donate: {
            link: 'https://donate.mozilla.org/en-US/'
        },
        link: 'https://github.com/mozilla/pdf.js',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            ['window.pdfjsLib'],
            ['window.PDFJS']
        ]
    },
    versions: {
        references: [
            'window.pdfjsLib.version',
            'window.PDFJS.version'
        ]
    }
}
