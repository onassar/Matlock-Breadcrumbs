{
    properties: {
        examples: [
            'http://www.news-gazette.com/'
        ],
        link: 'https://github.com/jwplayer/jwplayer',
        name: 'JW Player',
        platform: 'GitHub',
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'JW_Player'
        }
    },
    tests: {
        references: [
            [
                'window.$jw',
                'window.jwplayer'
            ]
        ]
    },
    versions: {
        references: [
            'window.$jw.version',
            'window.jwplayer.version'
        ]
    }
}
