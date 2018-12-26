{
    properties: {
        link: 'https://github.com/expressjs/express',
        platform: 'GitHub',
        examples: [
            'https://www.nbcnews.com/politics/national-security/russians-launched-pro-jill-stein-social-media-blitz-help-trump-n951166'
        ],
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'Express.js',
            sections: []
        }
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
