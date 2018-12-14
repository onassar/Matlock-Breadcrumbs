{
    properties: {
        link: 'https://github.com/expressjs/express',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        patterns: {
            headers: [
                [
                    /x\-powered\-by.{0,20}express/i
                ]
            ]
        }
    }
}
