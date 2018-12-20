{
    properties: {
        link: 'https://github.com/benoitc/gunicorn',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        patterns: {
            headers: [
                [
                    /server\: gunicorn\//i
                ]
            ]
        }
    },
    versions: {
        patterns: {
            headers: [
                /server\: gunicorn\/([0-9\.]+)/i
            ]
        }
    }
}
