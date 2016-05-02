import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('polycular-nav-dropdown', 'Integration | Component | polycular nav dropdown', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{polycular-nav-dropdown}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#polycular-nav-dropdown}}
      template block text
    {{/polycular-nav-dropdown}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
