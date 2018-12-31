{
    properties: {
        link: 'https://github.com/Postleaf/postleaf',
        platform: 'GitHub',
        examples: [
            'https://www.postleaf.org/'
        ],
        type: 'repository'
    },
    tests: {
        patterns: {
            page: [
                [
                    /<meta[^>]+name="generator"[^>]+content="Postleaf/i
                ],
                [
                    /<meta[^>]+name="Postleaf[^"]+"[^>]+content="generator"/i
                ]
            ]
        }
    },
    versions: {
        patterns: {
            page: [
                /<meta[^>]+name="generator"[^>]+content="Postleaf ([^ "]+)[^"]*"/i,
                /<meta[^>]+name="Postleaf ([^ "]+)[^"]*"[^>]+content="generator"/i
            ]
        }
    }
}
