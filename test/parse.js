const chai = require('chai');
const expect = chai.expect;

const parse = require('../lib/parse');

describe('Parsing of locale', () => {
    it('EN', () => {
        const mapping = require('./fixtures/mapping.en.js');

        expect(parse(mapping.source)).to.eql(mapping.result);
    });
});
