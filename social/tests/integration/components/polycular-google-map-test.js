import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('polycular-google-map', 'Integration | Component | polycular google map', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{polycular-google-map}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#polycular-google-map}}
      template block text
    {{/polycular-google-map}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
