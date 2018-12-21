{
    properties: {
        link: 'https://github.com/eligrey/FileSaver.js',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        statements: [
            [
                'window.saveAs.toString().match(/blob, name/i)'
            ],
            [
                'window.saveAs.toString().match(/e,t,n/i)'
            ]
        ]
    }
}
