{
    properties: {
        donate: {
            link: 'https://www.apache.org/foundation/contributing.html'
        },
        link: 'https://github.com/apache/httpd',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        patterns: {
            headers: [
                [
                    /server\: apache/i
                ]
            ]
        }
    },
    versions: {
        patterns: {
            headers: [
                /server\: apache\/([0-9\.]+)/i
            ]
        }
    }
}