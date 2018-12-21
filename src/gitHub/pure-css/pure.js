{
    properties: {
        link: 'https://github.com/pure-css/pure',
        notes: [],
        platform: 'GitHub',
        tags: [
            'css'
        ],
        tests: [
            'https://stores.kotisdesign.com/gimlet'
        ],
        type: 'repository'
    },
    tests: {
        patterns: {
            page: [
                [
                    /<div[^>]+class="[^"]*pure-u-(?:sm-|md-|lg-|xl-)?\d-\d/i
                ],
                [
                    /class="[^"]*pure-g[^"]*"/i
                ]
            ]
        }
    }
}
