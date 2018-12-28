{
    properties: {
        donate: {
            link: 'https://www.apache.org/foundation/contributing.html'
        },
        link: 'https://github.com/nginx/nginx',
        platform: 'GitHub',
        related: [
            'https://github.com/apache/httpd'
        ],
        similar: [
            'https://github.com/apache/httpd'
        ],
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'Nginx'
        }
    },
    tests: {
        patterns: {
            headers: [
                [
                    /server\: nginx/i
                ]
            ]
        }
    },
    versions: {
        patterns: {
            headers: [
                /server\: nginx\/([0-9\.]+)/i
            ]
        }
    }
}
