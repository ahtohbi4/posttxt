const SOURCE = `
Lorem "ipsum" dolor sit amet, consectetur $5,000.12 elit. Suspendisse eleifend - nec sapien % blandit.

Nunc: dolor' quam, molestie (non facilisis) alex@example.com placerat. Aliquam “vitae ” magna in nunc’s suscipit male_s_uada…

Vivamus ‘sollicitudin’ dolor & ex? Eget ultrices! Dolor 25/17 auctor gravida...`;

const RESULT = {
    type: 'root',
    nodes: [
        {
            type: 'paragraph',
            value: 'Lorem "ipsum" dolor sit amet, consectetur $5,000.12 elit. Suspendisse eleifend - nec sapien % blandit.',
            before: '\n',
            after: '\n\n',
            nodes: [
                {
                    type: 'sentence',
                    value: 'Lorem "ipsum" dolor sit amet, consectetur $5,000.12 elit.',
                    before: '\n',
                    after: ' ',
                    nodes: [
                        {
                            type: 'word',
                            value: 'Lorem',
                            before: '\n\n',
                            after: ' ',
                        },
                        {
                            type: 'punctuation',
                            value: '"',
                            before: ' ',
                            after: '',
                        },
                        {
                            type: 'word',
                            value: 'ipsum',
                            before: '',
                            after: '',
                        },
                        {
                            type: 'punctuation',
                            value: '"',
                            before: '',
                            after: ' ',
                        },
                        {
                            type: 'word',
                            value: 'dolor',
                            before: ' ',
                            after: ' ',
                        },
                        {
                            type: 'word',
                            value: 'sit',
                            before: ' ',
                            after: ' ',
                        },
                        {
                            type: 'word',
                            value: 'amet',
                            before: ' ',
                            after: ' ',
                        },
                        {
                            type: 'punctuation',
                            value: ',',
                            before: '',
                            after: ' ',
                        },
                        {
                            type: 'word',
                            value: 'consectetur',
                            before: ' ',
                            after: ' ',
                        },
                        {
                            "type": "symbol",
                            "value": "$",
                            "after": "",
                            "before": " "
                        },
                        {
                            "type": "number",
                            "value": "5,000.12",
                            "after": " ",
                            "before": ""
                        },
                        {
                            type: 'word',
                            value: 'elit',
                            before: ' ',
                            after: ' ',
                        },
                        {
                            type: 'punctuation',
                            value: '.',
                            before: '',
                            after: ' ',
                        }
                    ]
                },
                {
                    type: 'sentence',
                    value: 'Suspendisse eleifend - nec sapien % blandit.',
                    before: ' ',
                    after: '\n\n',
                    nodes: [
                        {
                            type: 'word',
                            value: 'Suspendisse',
                            before: ' ',
                            after: ' '
                        },
                        {
                            type: 'word',
                            value: 'eleifend',
                            before: ' ',
                            after: ' '
                        },
                        {
                            type: 'punctuation',
                            value: '-',
                            before: ' ',
                            after: ' '
                        },
                        {
                            type: 'word',
                            value: 'nec',
                            before: ' ',
                            after: ' '
                        },
                        {
                            type: 'word',
                            value: 'sapien',
                            before: ' ',
                            after: ' '
                        },
                        {
                            type: 'symbol',
                            value: '%',
                            before: ' ',
                            after: ' '
                        },
                        {
                            type: 'word',
                            value: 'blandit',
                            before: ' ',
                            after: ''
                        },
                        {
                            type: 'punctuation',
                            value: '.',
                            before: '',
                            after: '\n\n'
                        }
                    ]
                }
            ]
            ]
        },
        {
            type: 'paragraph',
            value: `Nunc: dolor' quam, molestie (non facilisis) alex@example.com placerat. Aliquam “vitae ” magna in nunc’s suscipit male_s_uada…`,
            before: '\n\n',
            after: '\n\n',
            nodes: []
        },
        {
            type: 'paragraph',
            value: 'Vivamus ‘sollicitudin’ dolor & ex? Eget ultrices! Dolor 25/17 auctor gravida...',
            before: '\n\n',
            after: '',
            nodes: []
        }
    ]
};

module.exports = {
    source: SOURCE,
    resoult: RESULT
};
