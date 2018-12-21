{
    properties: {
        link: 'https://github.com/phusion/passenger',
        notes: [],
        platform: 'GitHub',
        tests: [
            'https://blog.ghost.org/'
        ],
        type: 'repository'
    },
    tests: {
        patterns: {
            headers: [
                [
                    /x\-powered\-by.+Phusion Passenger/i
                ]
            ]
        }
    },
    versions: {
        patterns: {
            headers: [
                /x\-powered\-by.+Phusion Passenger ([0-9\.]+)/i
            ]
        }
    }
}
