{
    properties: {
        link: 'https://github.com/netlify/netlify-cms',
        platform: 'GitHub',
        examples: [
            'https://www.netlifycms.org/'
        ],
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'Netlify',
            sections: []
        }
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
