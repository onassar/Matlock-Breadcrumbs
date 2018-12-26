{
    properties: {
        donate: {
            link: 'https://www.patreon.com/limonte'
        },
        link: 'https://github.com/sweetalert2/sweetalert2',
        notes: [],
        platform: 'GitHub',
        examples: [
            'https://sweetalert2.github.io/'
        ],
        type: 'repository'
    },
    tests: {
        references: [
            [
                'window.swal',
                'window.swal.setDefaults',
            ],
            [
                'window.Swal',
                'window.Swal.setDefaults',
            ],
            [
                'window.sweetAlert',
                'window.sweetAlert.setDefaults',
            ],
            [
                'window.SweetAlert',
                'window.SweetAlert.setDefaults',
            ],
            [
                'window.Sweetalert2',
                'window.Sweetalert2.setDefaults',
            ]
        ]
    },
    versions: {
        references: [
            'window.swal.version',
            'window.Swal.version',
            'window.sweetAlert.version',
            'window.SweetAlert.version',
            'window.Sweetalert2.version'
        ]
    }
}
