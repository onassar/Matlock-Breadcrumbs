{
    properties: {
        examples: [
            'https://www.algolia.com/',
            'https://postmake.io/results?q=%23idea&tag=mvp'
        ],
        link: 'https://github.com/algolia/algoliasearch-client-javascript',
        platform: 'GitHub',
        name: 'Algolia Search API Client for JavaScript',
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'Algolia'
        }
    },
    tests: {
        references: [
            [
                'window.algoliasearch'
            ],
            [
                'window.__algolia.algoliasearch'
            ]
        ]
    },
    versions: {
        references: [
            'window.algoliasearch.version',
            'window.__algolia.algoliasearch.version'
        ]
    }
}
