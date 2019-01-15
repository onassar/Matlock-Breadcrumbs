{
    properties: {
        examples: [
            'https://ap.www.namecheap.com/profile/billing/orders'
        ],
        link: 'https://github.com/aspnet/AspNetCore',
        name: 'ASP.NET Core',
        notes: [
            'https://i.imgur.com/DdQiPjS.png'
        ],
        platform: 'GitHub',
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'ASP.NET_Core'
        }
    },
    tests: {
        patterns: {
            headers: [
                [
                    /X\-AspNetMvc\-Version/i
                ]
            ],
            cookies: [
                [
                    /__ControllerTempData/i
                ]
            ]
        }
    },
    versions: {
        patterns: {
            headers: [
                /X\-AspNetMvc\-Version:\b([\d.]+)/i
            ]
        }
    }
}
