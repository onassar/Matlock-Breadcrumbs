{
    properties: {
        link: 'https://github.com/netlify/netlify-cms',
        platform: 'GitHub',
        tests: [
            'https://www.netlifycms.org/'
        ],
        type: 'repository'
    },
    tests: {
        patterns: {
            headers: [
                [
                    /server\: Netlify/i
                ]
            ]
        }
    }
}
