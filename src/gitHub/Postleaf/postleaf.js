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
                    /<meta[^>]+content\="Postleaf\b/i
                ]
            ]
        }
    },
    versions: {
        patterns: {
            page: [
                /<meta[^>]+name="generator"[^>]+content="Postleaf ([^"]+)"/i,
                /<meta[^>]+content="Postleaf ([^"]+)"[^>]+name="generator"/i
            ]
        }
    }
}
