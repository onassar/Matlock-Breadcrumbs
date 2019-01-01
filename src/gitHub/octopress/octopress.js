{
    dependencies: [
        'https://github.com/jekyll/jekyll'
    ],
    properties: {
        examples: [
            'https://www.openssl.org/support/donations.html'
        ],
        link: 'https://github.com/octopress/octopress',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        patterns: {
            page: [
                [
                    /<script[^>]+src="[^"]+octopress\.js"/i
                ]
            ]
        }
    }
}
