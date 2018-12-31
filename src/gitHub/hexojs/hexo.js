{
    properties: {
        link: 'https://github.com/hexojs/hexo',
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
                /<meta[^>]+name="generator"[^>]+content="Hexo ([^ "]+)[^"]*"/i,
                /<meta[^>]+name="Hexo ([^ "]+)[^"]*"[^>]+content="generator"/i
            ]
        }
    }
}
