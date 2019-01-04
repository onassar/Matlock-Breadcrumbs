{
    properties: {
        examples: [
            'https://try.bolt.cm/'
        ],
        link: 'https://github.com/bolt/bolt',
        name: 'Bolt',
        platform: 'GitHub',
        see: [
            'https://docs.bolt.cm/3.6/installation/webserver/nginx'
        ],
        type: 'repository'
    },
    tests: {
        patterns: {
            headers: [
                [
                    /x\-koala\-status/
                ]
            ]
        }
    }
}
