{
    properties: {
        examples: [
            'https://getuikit.com/',
            'https://xdsoft.net/jodit/examples/intergration/joomla-jodit.html',
            'https://missionworkshop.com/'
        ],
        link: 'https://github.com/uikit/uikit',
        name: 'UIkit',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.UIkit',
                'window.UIkit.alert'
            ],
            [
                'window.UIkit2',
                'window.UIkit2.alert'
            ],
            [
                'window.rwUIkit',
                'window.rwUIkit.alert'
            ]
        ]
    },
    versions: {
        references: [
            'window.UIkit.version',
            'window.UIkit2.version',
            'window.rwUIkit.version'
        ]
    }
}
