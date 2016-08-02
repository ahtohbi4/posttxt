const SOURCE = `
Lorem "ipsum" dolor sit amet, consectetur $5,000.12 elit. Suspendisse eleifend - nec sapien vel blandit.

Nunc: dolor' quam, molestie (non facilisis) alex@example.com placerat. Aliquam “vitae ” magna in nunc’s suscipit male_s_uada…

Vivamus ‘sollicitudin’ dolor & ex? Eget ultrices! Dolor 25/17 auctor gravida...`;

const RESULT = {
    type: 'root',
    nodes: [
        {
            type: 'paragraph',
            value: 'Lorem "ipsum" dolor sit amet, consectetur $5,000.12 elit. Suspendisse eleifend - nec sapien vel blandit.',
            before: '\n',
            after: '\n\n',
            nodes: []
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
