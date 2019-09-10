{
    properties: {
        examples: [
            'https://cloudinary.com/console'
        ],
        link: 'https://github.com/cloudinary/cloudinary_js',
        name: 'Cloudinary Client Side JavaScript Library',
        platform: 'GitHub',
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
