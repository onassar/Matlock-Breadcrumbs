{
    properties: {
        examples: [
            'https://ap.www.namecheap.com/profile/billing/orders'
        ],
        link: 'https://github.com/aspnet/AspNetCore',
        name: 'ASP.NET Core',
        platform: 'GitHub',
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'ASP.NET_Core'
        }
    },
    tests: {
        patterns: {
            cookies: [
                [
                    /__ControllerTempData/i
                ]
            ]
        }
    }
}
