{
    properties: {
        link: 'https://github.com/twbs/bootstrap',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        patterns: {
            page: [
                [/\<link[^>]+\/bootstrap\//i]
            ]
        },
        references: [
            ['window.jQuery.fn.tooltip']
        ]
    },
    versions: {
        patterns: {
            page: [
                /\<link[^>]+\/bootstrap\/([0-9\.]+)\//i         // https://i.imgur.com/BrbdjkX.jpg
            ]
        },
        references: [
            'window.jQuery.fn.tooltip.Constructor.VERSION'
        ]
    }
}
