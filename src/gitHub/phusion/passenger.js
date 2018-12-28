{
    properties: {
        link: 'https://github.com/phusion/passenger',
        name: 'Phusion Passenger',
        platform: 'GitHub',
        examples: [
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
