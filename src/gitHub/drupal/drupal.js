{
    dependencies: [
        'https://github.com/php/php-src'
    ],
    properties: {
        donate: {
            link: 'https://www.drupal.org/association/donate'
        },
        link: 'https://github.com/drupal/drupal',
        platform: 'GitHub',
        examples: [
            'https://www.drupal.org/'
        ],
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
            ],
            page: [
                [
                    /<meta[^>]+content\="Drupal\b/i
                ]
            ]
        },
        references: [
            [
                'window.Drupal',
                'window.Drupal.settings'
            ]
        ]
    },
    versions: {
        patterns: {
            headers: [
                /x\-generator\: drupal ([0-9\.]+)/i
            ],
            page: [
                /<meta[^>]+name="generator"[^>]+content="Drupal ([^ "]+)[^"]*"/i,
                /<meta[^>]+name="Drupal ([^ "]+)[^"]*"[^>]+content="generator"/i
            ]
        }
    }
}
