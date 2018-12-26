{
    properties: {
        link: 'https://github.com/mholt/caddy',
        notes: [],
        platform: 'GitHub',
        examples: [
            'https://minio.io/downloads.html#download-server'
        ],
        type: 'repository'
    },
    tests: {
        patterns: {
            headers: [
                [
                    /server: Caddy/i
                ]
            ]
        }
    }
}
