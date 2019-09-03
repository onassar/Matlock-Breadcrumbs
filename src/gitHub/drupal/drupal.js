{
    dependencies: [
        'https://github.com/php/php-src'
    ],
    properties: {
        donate: {
            link: 'https://www.drupal.org/association/donate'
        },
        examples: [
            'https://www.drupal.org/'
        ],
        link: 'https://github.com/drupal/drupal',
        name: 'Drupal',
        platform: 'GitHub',
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'Drupal'
        }
    },
    tests: {
        patterns: {
            headers: [
                [
                    /x\-generator\: drupal/i
                ],
                [
                    /x\-drupal\-cache/i
                ]
            ]
        },
        references: [
            [
                'window.Drupal',
                'window.Drupal.settings'
            ]
        ],
        shortcuts: [
            {
                key: 'query.meta.generator',
                generator: 'Drupal'
            }
        ]
    },
    versions: {
        patterns: {
            headers: [
                /x\-generator\: drupal ([0-9\.]+)/i
            ]
        },
        shortcuts: [
            {
                key: 'query.meta.generator',
                generator: 'Drupal'
            }
        ]
    }
}
