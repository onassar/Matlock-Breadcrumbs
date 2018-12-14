{
    dependencies: [
        'gitHub/php/php-src'
    ],
    properties: {
        link: 'https://github.com/yiisoft/yii',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        patterns: {
            cookies: [
                [
                    /YII_CSRF_TOKEN/i
                ]
            ]
        }
    }
}
