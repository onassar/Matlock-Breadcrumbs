{
    properties: {
        link: 'https://github.com/FortAwesome/Font-Awesome',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        patterns: {
            page: [
                [/\<link[^>]+fontawesome/i],
                [/\<link[^>]+font\-awesome/i],
                [/href="https?:\/\/use\.fontawesome\.com/i]
            ]
        }
    },
    versions: {
        patterns: {
            page: [
                /<link[^>]+font\-awesome\/([0-9\.]+)\//i,   // https://i.imgur.com/3AhoAeu.jpg
                /Font\-Awesome\/v([0-9\.]+)\//i,
                /font\-awesome[^>]+ver=v([0-9\.]+)/i,       // https://i.imgur.com/z3zoICN.jpg
                /fontawesome\/([0-9\.]+)\//i                // https://i.imgur.com/nMIVbUf.jpg
            ]
        }
    }
}
