{
    properties: {
        donate: {
            link: 'https://www.openssl.org/support/donations.html'
        },
        examples: [
            'https://calligo.cloud/gdpr-report/'
        ],
        link: 'https://github.com/openssl/openssl',
        platform: 'GitHub',
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'OpenSSL'
        }
    },
    tests: {
        patterns: {
            headers: [
                [
                    /server\:.*OpenSSL/i
                ]
            ]
        }
    },
    versions: {
        patterns: {
            headers: [
                /server\:.*OpenSSL\/([^\s]+)/i
            ]
        }
    }
}
