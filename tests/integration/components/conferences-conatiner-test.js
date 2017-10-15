import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('conferences-conatiner', 'Integration | Component | conferences conatiner', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{conferences-conatiner}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#conferences-conatiner}}
      template block text
    {{/conferences-conatiner}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
