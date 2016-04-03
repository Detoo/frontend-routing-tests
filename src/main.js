import hashchange from 'hashchange';

hashchange.update(function (frag) {
  console.log('hash changed to:', frag);
});

hashchange.update();
