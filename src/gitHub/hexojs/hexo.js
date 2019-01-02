{
    properties: {
        examples: [

        ],
        link: 'https://github.com/hexojs/hexo',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        shortcuts: [
            {
                key: 'query.meta.generator',
                generator: 'Hexo'
            }
        ]
    },
    versions: {
        shortcuts: [
            {
                key: 'query.meta.generator',
                generator: 'Hexo'
            }
        ]
        patterns: {
            page: [
                /<meta[^>]+name="generator"[^>]+content="Hexo ([^ "]+)[^"]*"/i,
                /<meta[^>]+name="Hexo ([^ "]+)[^"]*"[^>]+content="generator"/i
            ]
        }
    }
}
