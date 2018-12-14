{
    properties: {
        donate: {
            link: 'https://www.apache.org/foundation/contributing.html'
        },
        link: 'https://github.com/nginx/nginx',
        platform: 'GitHub',
        type: 'repository'
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
