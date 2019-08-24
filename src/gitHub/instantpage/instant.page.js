{
    properties: {
        examples: [
            'https://instant.page',
            'https://yoast.com'
        ],
        link: 'https://github.com/instantpage/instant.page',
        platform: 'GitHub',
        tags: [],
        type: 'repository'
    },
    tests: {
        shortcuts: [
            {
                key: 'query',
                selectors: [
                    'script[src*="//instant.page"][type="module"]'
                ]
            }
        ]
    },
    versions: {
        statements: [
            function() {
                var selector = 'script[src*="//instant.page"][type="module"]',
                    elements = document.querySelectorAll(selector);
                elements = Array.prototype.slice.call(elements);
                if (elements.length === 0) {
                    return null;
                }
                var element = elements[0],
                    src = element.getAttribute('src'),
                    pattern = /instant\.page\/([0-9\.]+)/i,
                    matches = src.match(pattern);
                if (matches === null) {
                    return null;
                }
                var version = matches[1];
                return version;
            }
        ]
    }
}
