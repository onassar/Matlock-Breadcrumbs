{
    properties: {
        link: 'https://github.com/hexojs/hexo',
        notes: [],
        platform: 'GitHub',
        tests: [],
        type: 'repository'
    },
    tests: {
        patterns: {
            page: [
                [
                    /<meta[^>]+content\="Hexo /i
                ]
            ]
        }
    },
    versions: {
        patterns: {
            page: [
                /<meta[^>]+content\="Hexo ([^"]+)/i
            ]
        }
    }
}
