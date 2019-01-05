{
    properties: {
        examples: [
            'http://www.openwebanalytics.com/'
        ],
        link: 'https://github.com/padams/Open-Web-Analytics',
        platform: 'GitHub',
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'Open_Web_Analytics'
        }
    },
    tests: {
        references: [
            [
                'window.OWA',
                'window.OWA.config',
                'window.OWA.config.baseUrl',
            ],
            [
                'window.owa_baseUrl'
            ],
            [
                'window.owa_cmds'
            ]
        ],
        shortcuts: [
            {
                key: 'string.page.htmlComment',
                comments: [
                    '<!-- OWA Helper Tag Tags -->',
                    '<!-- Start Open Web Analytics Tracker -->',
                    '<!-- End Open Web Analytics Tracker -->'
                ]
            }
        ]
    }
}
