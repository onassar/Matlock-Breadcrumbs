{
    dependencies: [
        'https://github.com/nginx/nginx'
    ],
    properties: {
        donate: {
            link: 'https://openresty.org/en/donate-online.html'
        },
        link: 'https://github.com/openresty/openresty',
        name: 'OpenResty',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        patterns: {
            headers: [
                [
                    /server\: openresty/i
                ]
            ]
        }
    }
}
