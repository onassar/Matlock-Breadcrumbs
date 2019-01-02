{
    dependencies: [
        'https://github.com/nodejs/node'
    ],
    properties: {
        examples: [
            'https://www.totaljs.com/'
        ],
        link: 'https://github.com/totaljs/framework',
        name: 'Total.js Platform',
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
