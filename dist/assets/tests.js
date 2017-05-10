'use strict';

define('udaci-meals-ember/tests/app.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('components/menu-item.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/menu-item.js should pass ESLint\n\n');
  });

  QUnit.test('components/order-tracker.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/order-tracker.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/item.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/item.js should pass ESLint\n\n');
  });

  QUnit.test('routes/item/nutrition.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/item/nutrition.js should pass ESLint\n\n');
  });

  QUnit.test('routes/menu.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/menu.js should pass ESLint\n\n');
  });

  QUnit.test('services/order-manager.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/order-manager.js should pass ESLint\n\n');
  });
});
define('udaci-meals-ember/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('udaci-meals-ember/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'udaci-meals-ember/tests/helpers/start-app', 'udaci-meals-ember/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _udaciMealsEmberTestsHelpersStartApp, _udaciMealsEmberTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _udaciMealsEmberTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _udaciMealsEmberTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('udaci-meals-ember/tests/helpers/resolver', ['exports', 'udaci-meals-ember/resolver', 'udaci-meals-ember/config/environment'], function (exports, _udaciMealsEmberResolver, _udaciMealsEmberConfigEnvironment) {

  var resolver = _udaciMealsEmberResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _udaciMealsEmberConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _udaciMealsEmberConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('udaci-meals-ember/tests/helpers/start-app', ['exports', 'ember', 'udaci-meals-ember/app', 'udaci-meals-ember/config/environment'], function (exports, _ember, _udaciMealsEmberApp, _udaciMealsEmberConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var attributes = _ember['default'].merge({}, _udaciMealsEmberConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    return _ember['default'].run(function () {
      var application = _udaciMealsEmberApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('udaci-meals-ember/tests/integration/components/menu-item-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('menu-item', 'Integration | Component | menu item', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'Jj9SX8IS',
      'block': '{"statements":[["append",["unknown",["menu-item"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': '8jex9oRT',
      'block': '{"statements":[["text","\\n"],["block",["menu-item"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('udaci-meals-ember/tests/integration/components/order-tracker-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('order-tracker', 'Integration | Component | order tracker', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'xlObb3+a',
      'block': '{"statements":[["append",["unknown",["order-tracker"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'WJxxF+lY',
      'block': '{"statements":[["text","\\n"],["block",["order-tracker"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('udaci-meals-ember/tests/test-helper', ['exports', 'udaci-meals-ember/tests/helpers/resolver', 'ember-qunit'], function (exports, _udaciMealsEmberTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_udaciMealsEmberTestsHelpersResolver['default']);
});
define('udaci-meals-ember/tests/tests.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/menu-item-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/menu-item-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/order-tracker-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/order-tracker-test.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/item-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/item-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/item/nutrition-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/item/nutrition-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/menu-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/menu-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/services/order-manager-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/order-manager-test.js should pass ESLint\n\n');
  });
});
define('udaci-meals-ember/tests/unit/routes/item-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:item', 'Unit | Route | item', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('udaci-meals-ember/tests/unit/routes/item/nutrition-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:item/nutrition', 'Unit | Route | item/nutrition', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('udaci-meals-ember/tests/unit/routes/menu-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:menu', 'Unit | Route | menu', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('udaci-meals-ember/tests/unit/services/order-manager-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('service:order-manager', 'Unit | Service | order manager', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });
});
require('udaci-meals-ember/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
