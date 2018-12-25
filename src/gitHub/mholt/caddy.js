{
    properties: {
        link: 'https://github.com/minio/minio',
        notes: [],
        platform: 'GitHub',
        tests: [
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
