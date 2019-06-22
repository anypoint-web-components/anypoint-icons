import { assert } from '@open-wc/testing';
import '../arc-icons.js';


describe('<arc-icons>', function() {
  let meta;
  const iconsetNames = [
    'anypoint'
  ];
  beforeEach(function() {
    meta = document.createElement('iron-meta');
    meta.type = 'iconset';
  });

  it('all uniquely named', function() {
    const allIcons = {};
    for (let i = 0; i < iconsetNames.length; i++) {
      const iconset = meta.byKey(iconsetNames[i]);
      assert.ok(iconset);
      const iconNames = iconset.getIconNames();
      assert.notEqual(iconNames.length, 0);
      for (let j = 0; j < iconNames.length; j++) {
        const iconName = iconNames[j];
        const parts = iconName.split(':');
        assert.lengthOf(parts, 2);
        assert.equal(parts[0], iconsetNames[i]);
        assert.isAbove(parts[1].length, 0);
        assert.isFalse(allIcons.hasOwnProperty(iconName));
        allIcons[iconName] = true;
      }
    }
    // Sanity check.
    assert.isAbove(Object.getOwnPropertyNames(allIcons).length, iconsetNames.length);
  });
});
