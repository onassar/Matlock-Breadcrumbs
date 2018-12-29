{
    properties: {
        link: 'https://github.com/emojione/emojione',
        platform: 'GitHub',
        tags: [
            'emojis'
        ],
        type: 'repository'
    },
    tests: {
        patterns: {
            page: [
                [
                    /<[^>]*class="[^"]*emojione[^"]*"/i
                ]
            ]
        }
    }
}
