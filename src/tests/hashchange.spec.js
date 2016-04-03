import hashchange from 'hashchange';
import {expect} from 'chai';
import sinon from 'sinon';

describe('hashchange module', function() {
  it('invokes callback on update request', function() {
    const spy = sinon.spy();
    hashchange.update(spy);
    hashchange.update();
    sinon.assert.calledOnce(spy);
    hashchange.unbind(spy);
  });

  it('invokes callback on hash change', function(done) {
    const newHash = 'newHash';

    function hashChanged(frag) {
      expect(frag).to.be.equal(newHash);
      hashchange.unbind(hashChanged);
      done();
    }

    hashchange.update(hashChanged);
    location.hash = '#' + newHash;
  });

  it('unbind callbacks', function() {
     const spy = sinon.spy();
    hashchange.update(spy);
    hashchange.unbind(spy);
    hashchange.update();
    sinon.assert.notCalled(spy);
  });
});