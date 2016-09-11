'use strict';

const DOT = '.'.charCodeAt(0);
const NEWLINE = '\n'.charCodeAt(0);
const CR = '\r'.charCodeAt(0);

/**
 * Parse of text
 *
 * @param {string} text - Text for parsing.
 * @param {object} [options] - Options.
 * @returns {object}
 */
const parse = function (text, options) {
    let result = {
        nodes: [],
        type: 'root'
    };

    let code,
        next,
        after,
        before,
        pos = 0;

    while (pos < text.length) {
        code = text.charCodeAt(pos);

        switch (code) {
            case NEWLINE:
            case CR:
                next = pos;
                before = '';

                while (code === NEWLINE || code === CR) {
                    next += 1;
                    code = text.charCodeAt(next);
                }

                before = text.slice(pos, next);
                pos = next - 1;

                if (result.nodes !== [] || !isNaN(text.charCodeAt(pos + 1))) {
                    result.nodes.push({
                        after: '',
                        before,
                        nodes: [],
                        type: 'paragraph',
                        value: ''
                    });

                    if (result.nodes.length > 1) {
                        result.nodes[result.nodes.length - 2].after = before;
                    }
                }

                break;
            default:
        }

        pos++;
    }

    return result;
};

module.exports = parse;
