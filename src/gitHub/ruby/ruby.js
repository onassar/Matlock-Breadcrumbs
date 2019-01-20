{
    properties: {
        examples: [
            'https://www.discourse.org/',
            'https://getmatlock.github.io/'
        ],
        link: 'https://github.com/ruby/ruby',
        platform: 'GitHub',
        tags: [
            'programming-language'
        ],
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'Ruby'
        }
    },
    tests: {
        shortcuts: [
            {
                key: 'header.server',
                name: 'GitHub.com'
            }
        ],
        patterns: {
            headers: [
                [
                    /x\-github\-request\-id/i
                ]
            ]
        }
    }
}
