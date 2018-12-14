{
    dependencies: [
        'gitHub/yiisoft/yii'
    ],
    properties: {
        link: 'https://github.com/craftcms/cms',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        patterns: {
            cookies: [
                [
                    /CraftSessionId/i
                ]
            ]
        }
    }
}
