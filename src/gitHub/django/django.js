{
    dependencies: [
        'https://github.com/python/cpython'
    ],
    properties: {
        examples: [
            'https://www.eventbrite.ca/'
        ],
        donate: {
            link: 'https://www.djangoproject.com/fundraising/'
        },
        link: 'https://github.com/django/django',
        platform: 'GitHub',
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'Django_(web_framework)'
        }
    },
    tests: {
        patterns: {
            headers: [
                [
                    /_pxCaptcha/
                ]
            ]
        },
        references: [
            [
                'window.django'
            ]
        ],
        strings: {
            page: [
                [
                    'csrfmiddlewaretoken'
                ]
            ]
        }
    }
}
