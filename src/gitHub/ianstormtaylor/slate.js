{
    properties: {
        link: 'https://github.com/ianstormtaylor/slate',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        patterns: {
            page: [
                [
                    /data\-slate\-content/i
                ],
                [
                    /data\-slate\-editor/i
                ],
                [
                    /data\-slate\-leaf/i
                ]
            ]
        }
    }
}
