"use strict";



define('udaci-meals-ember/app', ['exports', 'ember', 'udaci-meals-ember/resolver', 'ember-load-initializers', 'udaci-meals-ember/config/environment'], function (exports, _ember, _udaciMealsEmberResolver, _emberLoadInitializers, _udaciMealsEmberConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _udaciMealsEmberConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _udaciMealsEmberConfigEnvironment['default'].podModulePrefix,
    Resolver: _udaciMealsEmberResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _udaciMealsEmberConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('udaci-meals-ember/components/menu-item', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    orderManager: _ember['default'].inject.service('order-manager'),
    classNames: ['menu-item'],
    tagName: 'li',
    mealCategory: 'breakfast',
    actions: {
      chooseItem: function chooseItem(menuItemName) {
        // console.log(menuItemName + ' ' + this.get('mealCategory'));
        this.get('orderManager').chooseMenuOption(this.get('mealCategory'), menuItemName);
      },
      changeCategory: function changeCategory(category) {
        // console.log(this.get('mealCategory'));
        this.set('mealCategory', category);
      }
    }
  });
});
define('udaci-meals-ember/components/order-tracker', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    orderManager: _ember['default'].inject.service('order-manager'),

    actions: {
      remove: function remove(day, menuCategory) {
        this.get('orderManager').removeMenuOption(day, menuCategory);
      },
      setDayTo: function setDayTo(day) {
        this.get('orderManager').setSelectedDay(day);
      }
    }
  });
});
define('udaci-meals-ember/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _emberWelcomePageComponentsWelcomePage) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberWelcomePageComponentsWelcomePage['default'];
    }
  });
});
define('udaci-meals-ember/helpers/app-version', ['exports', 'ember', 'udaci-meals-ember/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _ember, _udaciMealsEmberConfigEnvironment, _emberCliAppVersionUtilsRegexp) {
  exports.appVersion = appVersion;
  var version = _udaciMealsEmberConfigEnvironment['default'].APP.version;

  function appVersion(_) {
    var hash = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    if (hash.hideSha) {
      return version.match(_emberCliAppVersionUtilsRegexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_emberCliAppVersionUtilsRegexp.shaRegExp)[0];
    }

    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});
define('udaci-meals-ember/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('udaci-meals-ember/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('udaci-meals-ember/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'udaci-meals-ember/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _udaciMealsEmberConfigEnvironment) {
  var _config$APP = _udaciMealsEmberConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});
define('udaci-meals-ember/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('udaci-meals-ember/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('udaci-meals-ember/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/index'], function (exports, _emberDataSetupContainer, _emberDataIndex) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.Controller.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('udaci-meals-ember/initializers/export-application-global', ['exports', 'ember', 'udaci-meals-ember/config/environment'], function (exports, _ember, _udaciMealsEmberConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_udaciMealsEmberConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _udaciMealsEmberConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_udaciMealsEmberConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('udaci-meals-ember/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('udaci-meals-ember/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('udaci-meals-ember/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("udaci-meals-ember/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('udaci-meals-ember/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('udaci-meals-ember/router', ['exports', 'ember', 'udaci-meals-ember/config/environment'], function (exports, _ember, _udaciMealsEmberConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _udaciMealsEmberConfigEnvironment['default'].locationType,
    rootURL: _udaciMealsEmberConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('menu');
    this.route('item', { path: 'item/:item_name' }, function () {
      this.route('nutrition');
    });
  });

  exports['default'] = Router;
});
define('udaci-meals-ember/routes/item', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model(params) {
      return _ember['default'].$.get('/menu/' + params.item_name + '.json');
    }
  });
});
define('udaci-meals-ember/routes/item/nutrition', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('udaci-meals-ember/routes/menu', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return _ember['default'].$.get('/menu/menu.json');
    }
  });
});
define('udaci-meals-ember/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define('udaci-meals-ember/services/order-manager', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Service.extend({
    selectedDay: 'Monday',
    menuSelection: {
      Monday: {},
      Tuesday: {},
      Wednesday: {},
      Thursday: {},
      Friday: {}
    },

    setSelectedDay: function setSelectedDay(day) {
      this.set('selectedDay', day);
    },
    chooseMenuOption: function chooseMenuOption(mealCategory, menuItemName) {
      // console.log(mealCategory);
      this.set('menuSelection.' + this.get('selectedDay') + '.' + mealCategory, menuItemName);
    },
    removeMenuOption: function removeMenuOption(day, mealCategory) {
      this.set('menuSelection.' + day + '.' + mealCategory, '');
    }
  });
});
define("udaci-meals-ember/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "1H1u8qbu", "block": "{\"statements\":[[\"open-element\",\"h1\",[]],[\"static-attr\",\"id\",\"title\"],[\"flush-element\"],[\"block\",[\"link-to\"],[\"menu\"],null,0],[\"text\",\" - eat something tasty!\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"append\",[\"unknown\",[\"order-tracker\"]],false],[\"text\",\"\\n\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"UdaciMealsEmber\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "udaci-meals-ember/templates/application.hbs" } });
});
define("udaci-meals-ember/templates/components/menu-item", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "sFKR+9Sz", "block": "{\"statements\":[[\"open-element\",\"h4\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"food\",\"name\"]],false],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"img\",[]],[\"dynamic-attr\",\"src\",[\"concat\",[\"/img/\",[\"unknown\",[\"food\",\"image\"]]]]],[\"dynamic-attr\",\"alt\",[\"concat\",[[\"unknown\",[\"food\",\"name\"]]]]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"select\",[]],[\"dynamic-attr\",\"onchange\",[\"helper\",[\"action\"],[[\"get\",[null]],\"changeCategory\"],[[\"value\"],[\"target.value\"]]],null],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"option\",[]],[\"static-attr\",\"value\",\"breakfast\"],[\"flush-element\"],[\"text\",\"Breakfast\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"option\",[]],[\"static-attr\",\"value\",\"lunch\"],[\"flush-element\"],[\"text\",\"Lunch\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"option\",[]],[\"static-attr\",\"value\",\"dinner\"],[\"flush-element\"],[\"text\",\"Dinner\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"button\",[]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"chooseItem\",[\"get\",[\"food\",\"name\"]]]],[\"flush-element\"],[\"text\",\"Select Item\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"\\n  \"],[\"comment\",\" <a href=\\\"/item/{{food.id}}\\\">Details</a> \"],[\"text\",\"\\n  \"],[\"block\",[\"link-to\"],[\"item\",[\"get\",[\"food\",\"id\"]]],null,0],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"yield\",\"default\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[{\"statements\":[[\"text\",\"Details\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "udaci-meals-ember/templates/components/menu-item.hbs" } });
});
define("udaci-meals-ember/templates/components/order-tracker", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "nq914F1J", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"order-tracker\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"Select food for \"],[\"append\",[\"unknown\",[\"orderManager\",\"selectedDay\"]],false],[\"text\",\"!\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"hr\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"helper\",[\"-each-in\"],[[\"get\",[\"orderManager\",\"menuSelection\"]]],null]],null,3],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"yield\",\"default\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[{\"statements\":[[\"text\",\"        \"],[\"append\",[\"unknown\",[\"menuOrder\",\"dinner\"]],false],[\"text\",\" \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"remove-item\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"remove\",[\"get\",[\"day\"]],\"dinner\"]],[\"flush-element\"],[\"text\",\"\\n          ✖\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"        \"],[\"append\",[\"unknown\",[\"menuOrder\",\"lunch\"]],false],[\"text\",\" \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"remove-item\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"remove\",[\"get\",[\"day\"]],\"lunch\"]],[\"flush-element\"],[\"text\",\"\\n          ✖\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"          \"],[\"append\",[\"unknown\",[\"menuOrder\",\"breakfast\"]],false],[\"text\",\" \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"remove-item\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"remove\",[\"get\",[\"day\"]],\"breakfast\"]],[\"flush-element\"],[\"text\",\"\\n            ✖\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"div\",[]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"setDayTo\",[\"get\",[\"day\"]]]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"p\",[]],[\"static-attr\",\"class\",\"day\"],[\"flush-element\"],[\"append\",[\"get\",[\"day\"]],false],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"dl\",[]],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"dt\",[]],[\"flush-element\"],[\"open-element\",\"em\",[]],[\"flush-element\"],[\"text\",\"Breackfast\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"dd\",[]],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"menuOrder\",\"breakfast\"]]],null,2],[\"text\",\"      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"dt\",[]],[\"flush-element\"],[\"open-element\",\"em\",[]],[\"flush-element\"],[\"text\",\"Lunch\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"dd\",[]],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"menuOrder\",\"lunch\"]]],null,1],[\"text\",\"      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"dt\",[]],[\"flush-element\"],[\"open-element\",\"em\",[]],[\"flush-element\"],[\"text\",\"Dinner\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"dd\",[]],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"menuOrder\",\"dinner\"]]],null,0],[\"text\",\"      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"hr\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"day\",\"menuOrder\"]}],\"hasPartials\":false}", "meta": { "moduleName": "udaci-meals-ember/templates/components/order-tracker.hbs" } });
});
define("udaci-meals-ember/templates/item", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "niCm5sEy", "block": "{\"statements\":[[\"open-element\",\"h4\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"model\",\"name\"]],false],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"img\",[]],[\"dynamic-attr\",\"src\",[\"concat\",[\"/img/\",[\"unknown\",[\"model\",\"image\"]]]]],[\"dynamic-attr\",\"alt\",[\"concat\",[[\"unknown\",[\"model\",\"name\"]]]]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"3.9\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"A savory slice of ham topped with a wedge of goat cheese, all on a buttery, flaky croissant.\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"\\n  \"],[\"comment\",\" <a href=\\\"/item/{{model.id}}/nutrition\\\">Nutrition Facts</a> \"],[\"text\",\"\\n  \"],[\"block\",[\"link-to\"],[\"item.nutrition\"],null,0],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"Nutrition\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "udaci-meals-ember/templates/item.hbs" } });
});
define("udaci-meals-ember/templates/item/nutrition", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "P0VrA/1y", "block": "{\"statements\":[[\"open-element\",\"h4\",[]],[\"flush-element\"],[\"text\",\"Nutrition Facts\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"dl\",[]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"dt\",[]],[\"flush-element\"],[\"text\",\"Calories\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"dd\",[]],[\"flush-element\"],[\"text\",\"670\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "udaci-meals-ember/templates/item/nutrition.hbs" } });
});
define("udaci-meals-ember/templates/menu", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "F+2Zjflb", "block": "{\"statements\":[[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"Who's hungry?\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"append\",[\"helper\",[\"log\"],[[\"get\",[\"model\"]]],null],false],[\"text\",\"\\n\\n\"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"items-container\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\"]]],null,0],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"    \"],[\"append\",[\"helper\",[\"menu-item\"],null,[[\"food\"],[[\"get\",[\"item\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[\"item\"]}],\"hasPartials\":false}", "meta": { "moduleName": "udaci-meals-ember/templates/menu.hbs" } });
});


define('udaci-meals-ember/config/environment', ['ember'], function(Ember) {
  var prefix = 'udaci-meals-ember';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("udaci-meals-ember/app")["default"].create({"name":"udaci-meals-ember","version":"0.0.0+a5042874"});
}
//# sourceMappingURL=udaci-meals-ember.map
