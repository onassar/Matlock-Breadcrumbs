{
    properties: {
        donate: {
            link: 'https://www.apache.org/foundation/contributing.html'
        },
        link: 'https://github.com/apache/tomcat',
        platform: 'GitHub',
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'Apache_Tomcat'
        }
    },
    tests: {
        patterns: {
            headers: [
                [
                    /server\: apache\-coyote/i
                ]
            ]
        }
    },
    versions: {
        patterns: {
            headers: [
                /server\: apache\-coyote\/([0-9\.]+)/i
            ]
        }
    }
}
