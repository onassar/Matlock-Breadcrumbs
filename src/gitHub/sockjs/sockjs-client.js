{
    properties: {
        link: 'https://github.com/sockjs/sockjs-client',
        name: 'SockJS-client',
        platform: 'GitHub',
        tests: [
            'https://www.nytimes.com/interactive/2016/sports/olympics/rio-olympics-photo-firehose.html'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.SockJS',
                'window.SockJS.prototype._debug',
                'window.SockJS.prototype._dispatchOpen'
            ]
        ]
    },
    versions: {
        references: [
            'window.SockJS.version'
        ]
    }
}
