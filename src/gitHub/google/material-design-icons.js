{
    properties: {
        link: 'https://github.com/google/material-design-icons',
        examples: [
            'https://lto.network/',
            'https://ionicons.com/'
        ],
        name: 'Material design icons',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        patterns: {
            page: [
                [
                    /\bmaterial-icons md-/i
                ]
            ]
        }
    }
}
