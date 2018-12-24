{
    dependencies: [
        'https://github.com/python/cpython'
    ],
    properties: {
        donate: {
            link: 'https://www.djangoproject.com/fundraising/'
        },
        link: 'https://github.com/django/django',
        platform: 'GitHub',
        type: 'repository'
    },
    tests: {
        strings: {
            page: [
                [
                    'csrfmiddlewaretoken'
                ]
            ]
        }
    }
}
