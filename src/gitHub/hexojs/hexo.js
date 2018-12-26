{
    properties: {
        link: 'https://github.com/hexojs/hexo',
        notes: [],
        platform: 'GitHub',
        examples: [],
        type: 'repository'
    },
    tests: {
        patterns: {
            page: [
                [
                    /<meta[^>]+content\="Hexo\b/i
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
