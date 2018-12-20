{
    properties: {
        link: 'https://github.com/gohugoio/hugo',
        platform: 'GitHub',
        tests: [
            'https://1password.com/'
        ],
        type: 'repository'
    },
    tests: {
        patterns: {
            page: [
                [/<meta[^>]+content\="Hugo /i]
            ]
        }
    },
    versions: {
        patterns: {
            page: [
                /<meta[^>]+content\="Hugo ([^"]+)/i
            ]
        }
    }
}
