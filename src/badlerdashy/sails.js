{
    dependencies: [
        'gitHub/nodejs/node'
    ],
    properties: {
        link: 'https://github.com/balderdashy/sails',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        patterns: {
            headers: [
                [
                    /x\-powered\-by.{0,20}sails/i
                ]
            ]
        }
    }
}
