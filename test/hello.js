const expect = require('chai').expect;
const hello = require('../src/hello');
const happy = require('../src/happy');

describe('Hello Project', () => {
  it('says hello', () => {
    const result = hello();
    expect(result).to.equal('world!');
  });

  it('is always happy', () => {
    const result = happy();
    expect(result).to.equal('happy');
  });

  it('has HELLO environment variable', () => {
    expect(process.env.HELLO).to.not.be.undefined;
  });
});

