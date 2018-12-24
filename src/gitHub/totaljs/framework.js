{
    dependencies: [
        'https://github.com/nodejs/node'
    ],
    properties: {
        link: 'https://github.com/totaljs/framework',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        patterns: {
            headers: [
                [
                    /x\-powered\-by.{0,20}total\.js/i
                ]
            ]
        }
    }
}
