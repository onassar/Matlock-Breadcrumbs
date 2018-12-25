{
    properties: {
        link: 'https://github.com/Postleaf/postleaf',
        notes: [],
        platform: 'GitHub',
        tests: [
            'https://www.postleaf.org/'
        ],
        type: 'repository'
    },
    tests: {
        patterns: {
            page: [
                [
                    /<meta[^>]+content\="Postleaf /i
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
