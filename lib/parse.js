'use strict';

/* Separators of paragraphs */
const CR = '\r'.charCodeAt(0);
const NEWLINE = '\n'.charCodeAt(0);

/* Separators of sentences */
const DOT = '.'.charCodeAt(0);
const EXCLAMATION_MARK = '!'.charCodeAt(0);
const ELLIPSIS = '…'.charCodeAt(0); /* Could be replaced by a triple symbol "." (...) or a triple symbol "." separated with space (. . .). */
const QUERY = '?'.charCodeAt(0);
/* Punctuation */
const PUNCTUATION_REG = /’'\[\]\(\)\{\}⟨⟩:,،、‒–—―…!.‹›«»‐-\?‘’“”'";\/⁄/;

/* Separators of words */
const SPACE = ' '.charCodeAt(0);

/**
 * Parse of text
 *
 * @param {string} text - Text for parsing.
 * @param {object} [options] - Options.
 * @returns {object}
 */
const parse = function (text, options) {
    const result = {
        nodes: [],
        type: 'root'
    };

    let code,
        next,
        after,
        before,
        pos = 0,
        paragraphStart = 0,
        paragraphEnd,
        sentenceStart,
        sentenceEnd,
        wordStart,
        wordEnd;

    while (pos < text.length) {
        code = text.charCodeAt(pos);

        switch (code) {
            case NEWLINE:
            case CR:
                next = pos;
                before = '';
                paragraphEnd = pos;

                while (code === NEWLINE || code === CR) {
                    next += 1;
                    code = text.charCodeAt(next);
                }

                before = text.slice(pos, next);
                pos = next - 1;

                if (!isNaN(text.charCodeAt(pos + 1))) {
                    result.nodes.push({
                        before,
                        nodes: [],
                        type: 'paragraph',
                        value: '',
                    });

                    if (result.nodes.length > 1) {
                        result.nodes[result.nodes.length - 2].after = before;
                        result.nodes[result.nodes.length - 2].value = text.slice(paragraphStart, paragraphEnd);
                    }
                }

                paragraphStart = pos + 1;

                break;

            case SPACE:
                const prevCode = text.charCodeAt(pos - 1);

                if (prevCode === DOT || prevCode === EXCLAMATION_MARK || prevCode === ELLIPSIS || prevCode === QUERY) {
                    next = pos;
                    wordEnd = pos;

                    while (
                        code === DOT || code === EXCLAMATION_MARK || code === ELLIPSIS || code === QUERY ||
                        code === SPACE || code === CR || code === NEWLINE
                    ) {
                        next += 1;
                        code = text.charCodeAt(next);
                    }

                    before = text.slice(pos, next);
                    pos = next - 1;

                    if (!isNaN(text.charCodeAt(pos + 1))) {
                        result.nodes[result.nodes.length - 1].nodes.push({
                            before,
                            nodes: [],
                            type: 'sentence',
                            value: '',
                        });

                        if (result.nodes[result.nodes.length - 1].nodes.length > 1) {
                            result.nodes[result.nodes.length - 1].nodes[result.nodes[result.nodes.length - 1].nodes.length - 2].after = before;
                            result.nodes[result.nodes.length - 1].nodes[result.nodes[result.nodes.length - 1].nodes.length - 2].value = text.slice(sentenceStart, sentenceEnd);
                        }
                    }

                    sentenceStart = pos + 1;

                    break;
                }

            default:
                // The last char in text
                if (isNaN(text.charCodeAt(pos + 1))) {
                    paragraphEnd = pos + 1;

                    if (result.nodes.length > 1) {
                        result.nodes[result.nodes.length - 1].after = '';
                        result.nodes[result.nodes.length - 1].value = text.slice(paragraphStart, paragraphEnd);
                    }
                }
        }

        pos++;
    }

    return result;
};

module.exports = parse;
