{
    dependencies: [
        'https://github.com/yiisoft/yii'
    ],
    properties: {
        link: 'https://github.com/craftcms/cms',
        name: 'Craft CMS',
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
