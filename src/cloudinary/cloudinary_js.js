{
    properties: {
        link: 'https://github.com/cloudinary/cloudinary_js',
        platform: 'GitHub',
        tests: [
            'https://cloudinary.com/console'
        ],
        type: 'repository'
    },
    tests: {
        patterns: {
            page: [
                [
                    /http[s]?:\/\/cloudinary\-res\.cloudinary\.com\//i
                ],
                [
                    /http[s]?:\/\/res\.closudinary\.com\//i
                ]
            ]
        }
    }
}
