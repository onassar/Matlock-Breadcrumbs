{
    properties: {
        link: 'https://github.com/zeit/next.js',
        name: 'Next.js',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.next',
                'window.next.router'
            ],
            [
                'window.__NEXT_DATA__'
            ]
        ]
    }
}
