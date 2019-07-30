'use strict';

define("xvector-assignment/tests/helpers/upload", ["exports", "ember-file-upload/test-helpers"], function (_exports, _testHelpers) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "upload", {
    enumerable: true,
    get: function () {
      return _testHelpers.upload;
    }
  });
});
define("xvector-assignment/tests/integration/pods/components/csv-image/component-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | csv-image', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "at48ROGH",
        "block": "{\"symbols\":[],\"statements\":[[5,\"csv-image\",[],[[],[]]]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "1lVmZ+ZP",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"csv-image\",[],[[],[]],{\"statements\":[[0,\"\\n        template block text\\n      \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("xvector-assignment/tests/integration/pods/components/file-upload/component-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | file-upload', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "/KyB6aNP",
        "block": "{\"symbols\":[],\"statements\":[[5,\"file-upload\",[],[[],[]]]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "jiIYNnjB",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"file-upload\",[],[[],[]],{\"statements\":[[0,\"\\n        template block text\\n      \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("xvector-assignment/tests/integration/pods/components/graph-modifier/component-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | graph-modifier', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "zgygVnxn",
        "block": "{\"symbols\":[],\"statements\":[[5,\"graph-modifier\",[],[[],[]]]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "AT/+pKHJ",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"graph-modifier\",[],[[],[]],{\"statements\":[[0,\"\\n        template block text\\n      \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("xvector-assignment/tests/integration/pods/components/line-graph/component-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | line-graph', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "1rw0ol4w",
        "block": "{\"symbols\":[],\"statements\":[[5,\"line-graph\",[],[[],[]]]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "5AY22O0Q",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"line-graph\",[],[[],[]],{\"statements\":[[0,\"\\n        template block text\\n      \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("xvector-assignment/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('models/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/index.js should pass ESLint\n\n');
  });
  QUnit.test('pods/components/csv-image/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/components/csv-image/component.js should pass ESLint\n\n');
  });
  QUnit.test('pods/components/line-graph/component.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'pods/components/line-graph/component.js should pass ESLint\n\n38:5 - Unexpected console statement. (no-console)\n93:5 - \'Plotly\' is not defined. (no-undef)\n99:9 - Unexpected console statement. (no-console)\n100:9 - \'Plotly\' is not defined. (no-undef)\n147:7 - Unexpected console statement. (no-console)');
  });
  QUnit.test('pods/index/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'pods/index/controller.js should pass ESLint\n\n7:7 - \'Papa\' is not defined. (no-undef)');
  });
  QUnit.test('pods/index/route.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'pods/index/route.js should pass ESLint\n\n2:8 - \'controller\' is defined but never used. (no-unused-vars)');
  });
  QUnit.test('pods/visualize/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/visualize/controller.js should pass ESLint\n\n');
  });
  QUnit.test('pods/visualize/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/visualize/route.js should pass ESLint\n\n');
  });
  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
});
define("xvector-assignment/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('xvector-assignment/pods/components/csv-image/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'xvector-assignment/pods/components/csv-image/template.hbs should pass TemplateLint.\n\nxvector-assignment/pods/components/csv-image/template.hbs\n  2:1  error  Incorrect indentation for `<img>` beginning at L2:C1. Expected `<img>` to be at an indentation of 2 but was found at 1.  block-indentation\n');
  });
  QUnit.test('xvector-assignment/pods/components/line-graph/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'xvector-assignment/pods/components/line-graph/template.hbs should pass TemplateLint.\n\nxvector-assignment/pods/components/line-graph/template.hbs\n  2:1  error  Incorrect indentation for `<div>` beginning at L2:C1. Expected `<div>` to be at an indentation of 2 but was found at 1.  block-indentation\n  3:1  error  Incorrect indentation for `<div>` beginning at L3:C1. Expected `<div>` to be at an indentation of 2 but was found at 1.  block-indentation\n  4:2  error  Incorrect indentation for `<div>` beginning at L4:C2. Expected `<div>` to be at an indentation of 3 but was found at 2.  block-indentation\n  12:2  error  Incorrect indentation for `<div>` beginning at L12:C2. Expected `<div>` to be at an indentation of 3 but was found at 2.  block-indentation\n  22:2  error  Incorrect indentation for `<div>` beginning at L22:C2. Expected `<div>` to be at an indentation of 3 but was found at 2.  block-indentation\n  40:2  error  Incorrect indentation for `<div>` beginning at L40:C2. Expected `<div>` to be at an indentation of 3 but was found at 2.  block-indentation\n  48:2  error  Incorrect indentation for `<div>` beginning at L48:C2. Expected `<div>` to be at an indentation of 3 but was found at 2.  block-indentation\n  5:3  error  Incorrect indentation for `<p>` beginning at L5:C3. Expected `<p>` to be at an indentation of 4 but was found at 3.  block-indentation\n  6:3  error  Incorrect indentation for `<input>` beginning at L6:C3. Expected `<input>` to be at an indentation of 4 but was found at 3.  block-indentation\n  7:3  error  Incorrect indentation for `<p>` beginning at L7:C3. Expected `<p>` to be at an indentation of 4 but was found at 3.  block-indentation\n  8:3  error  Incorrect indentation for `<input>` beginning at L8:C3. Expected `<input>` to be at an indentation of 4 but was found at 3.  block-indentation\n  9:3  error  Incorrect indentation for `<p>` beginning at L9:C3. Expected `<p>` to be at an indentation of 4 but was found at 3.  block-indentation\n  10:3  error  Incorrect indentation for `<input>` beginning at L10:C3. Expected `<input>` to be at an indentation of 4 but was found at 3.  block-indentation\n  13:3  error  Incorrect indentation for `<input>` beginning at L13:C3. Expected `<input>` to be at an indentation of 4 but was found at 3.  block-indentation\n  14:3  error  Incorrect indentation for `<label>` beginning at L14:C3. Expected `<label>` to be at an indentation of 4 but was found at 3.  block-indentation\n  17:3  error  Incorrect indentation for `{{! <input class="form-check-input" type="checkbox" value="" id="temporary-edit" onchange={{action "toggleTemporaryEdit"}}>\n\t\t\t<label class="form-check-label" for="temporary-edit">\n\t\t\tTemporary Edit\n\t\t\t</label> }}` beginning at L17:C3. Expected `{{! <input class="form-check-input" type="checkbox" value="" id="temporary-edit" onchange={{action "toggleTemporaryEdit"}}>\n\t\t\t<label class="form-check-label" for="temporary-edit">\n\t\t\tTemporary Edit\n\t\t\t</label> }}` to be at an indentation of 4 but was found at 3.  block-indentation\n  14:53  error  Incorrect indentation for `\n\t\t\tScroll Zoom\n\t\t\t` beginning at L14:C53. Expected `\n\t\t\tScroll Zoom\n\t\t\t` to be at an indentation of 5 but was found at 3.  block-indentation\n  23:3  error  Incorrect indentation for `<label>` beginning at L23:C3. Expected `<label>` to be at an indentation of 4 but was found at 3.  block-indentation\n  26:3  error  Incorrect indentation for `<input>` beginning at L26:C3. Expected `<input>` to be at an indentation of 4 but was found at 3.  block-indentation\n  27:3  error  Incorrect indentation for `<label>` beginning at L27:C3. Expected `<label>` to be at an indentation of 4 but was found at 3.  block-indentation\n  30:3  error  Incorrect indentation for `<input>` beginning at L30:C3. Expected `<input>` to be at an indentation of 4 but was found at 3.  block-indentation\n  31:3  error  Incorrect indentation for `<label>` beginning at L31:C3. Expected `<label>` to be at an indentation of 4 but was found at 3.  block-indentation\n  34:3  error  Incorrect indentation for `<input>` beginning at L34:C3. Expected `<input>` to be at an indentation of 4 but was found at 3.  block-indentation\n  35:3  error  Incorrect indentation for `<label>` beginning at L35:C3. Expected `<label>` to be at an indentation of 4 but was found at 3.  block-indentation\n  38:3  error  Incorrect indentation for `<input>` beginning at L38:C3. Expected `<input>` to be at an indentation of 4 but was found at 3.  block-indentation\n  23:52  error  Incorrect indentation for `\n\t\t\tLine Width\n\t\t\t` beginning at L23:C52. Expected `\n\t\t\tLine Width\n\t\t\t` to be at an indentation of 5 but was found at 3.  block-indentation\n  27:53  error  Incorrect indentation for `\n\t\t\tMarker Size\n\t\t\t` beginning at L27:C53. Expected `\n\t\t\tMarker Size\n\t\t\t` to be at an indentation of 5 but was found at 3.  block-indentation\n  31:55  error  Incorrect indentation for `\n\t\t\tHeight\n\t\t\t` beginning at L31:C55. Expected `\n\t\t\tHeight\n\t\t\t` to be at an indentation of 5 but was found at 3.  block-indentation\n  35:54  error  Incorrect indentation for `\n\t\t\tWidth\n\t\t\t` beginning at L35:C54. Expected `\n\t\t\tWidth\n\t\t\t` to be at an indentation of 5 but was found at 3.  block-indentation\n  41:3  error  Incorrect indentation for `<label>` beginning at L41:C3. Expected `<label>` to be at an indentation of 4 but was found at 3.  block-indentation\n  42:3  error  Incorrect indentation for `<select>` beginning at L42:C3. Expected `<select>` to be at an indentation of 4 but was found at 3.  block-indentation\n  43:4  error  Incorrect indentation for `<option>` beginning at L43:C4. Expected `<option>` to be at an indentation of 5 but was found at 4.  block-indentation\n  44:4  error  Incorrect indentation for `<option>` beginning at L44:C4. Expected `<option>` to be at an indentation of 5 but was found at 4.  block-indentation\n  45:4  error  Incorrect indentation for `<option>` beginning at L45:C4. Expected `<option>` to be at an indentation of 5 but was found at 4.  block-indentation\n  49:3  error  Incorrect indentation for `<label>` beginning at L49:C3. Expected `<label>` to be at an indentation of 4 but was found at 3.  block-indentation\n  52:3  error  Incorrect indentation for `<input>` beginning at L52:C3. Expected `<input>` to be at an indentation of 4 but was found at 3.  block-indentation\n  53:3  error  Incorrect indentation for `<input>` beginning at L53:C3. Expected `<input>` to be at an indentation of 4 but was found at 3.  block-indentation\n  54:3  error  Incorrect indentation for `<br>` beginning at L54:C3. Expected `<br>` to be at an indentation of 4 but was found at 3.  block-indentation\n  55:3  error  Incorrect indentation for `<br>` beginning at L55:C3. Expected `<br>` to be at an indentation of 4 but was found at 3.  block-indentation\n  56:3  error  Incorrect indentation for `<span>` beginning at L56:C3. Expected `<span>` to be at an indentation of 4 but was found at 3.  block-indentation\n  49:35  error  Incorrect indentation for `\n\t\t\t\tChange Axis Title:\n\t\t\t` beginning at L49:C35. Expected `\n\t\t\t\tChange Axis Title:\n\t\t\t` to be at an indentation of 5 but was found at 4.  block-indentation\n  56:37  error  Incorrect indentation for `\n\t\t\t\tBatch Size: ` beginning at L56:C37. Expected `\n\t\t\t\tBatch Size: ` to be at an indentation of 5 but was found at 4.  block-indentation\n  5:6  error  elements cannot have inline styles  no-inline-styles\n  7:6  error  elements cannot have inline styles  no-inline-styles\n  9:6  error  elements cannot have inline styles  no-inline-styles\n  22:7  error  elements cannot have inline styles  no-inline-styles\n  42:49  error  elements cannot have inline styles  no-inline-styles\n  56:9  error  elements cannot have inline styles  no-inline-styles\n  26:121  error  Attribute value should be either quoted or wrapped in mustaches  no-quoteless-attributes\n  30:124  error  Attribute value should be either quoted or wrapped in mustaches  no-quoteless-attributes\n  34:131  error  Attribute value should be either quoted or wrapped in mustaches  no-quoteless-attributes\n  38:129  error  Attribute value should be either quoted or wrapped in mustaches  no-quoteless-attributes\n');
  });
  QUnit.test('xvector-assignment/pods/index/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'xvector-assignment/pods/index/template.hbs should pass TemplateLint.\n\nxvector-assignment/pods/index/template.hbs\n  3:1  error  Incorrect indentation for `<input>` beginning at L3:C1. Expected `<input>` to be at an indentation of 2 but was found at 1.  block-indentation\n  4:1  error  Incorrect indentation for `<button>` beginning at L4:C1. Expected `<button>` to be at an indentation of 2 but was found at 1.  block-indentation\n  5:1  error  Incorrect indentation for `{{#if}}` beginning at L5:C1. Expected `{{#if}}` to be at an indentation of 2 but was found at 1.  block-indentation\n  6:1  error  Incorrect indentation for `{{#link-to}}` beginning at L6:C1. Expected `{{#link-to}}` to be at an indentation of 3 but was found at 1.  block-indentation\n  7:1  error  Incorrect indentation for `<button>` beginning at L7:C1. Expected `<button>` to be at an indentation of 3 but was found at 1.  block-indentation\n  8:21  error  Incorrect indentation for `button` beginning at L7:C1. Expected `</button>` ending at L8:C21 to be at an indentation of 1 but was found at 12.  block-indentation\n  7:117  error  Incorrect indentation for `\n\t\tView Plot ` beginning at L7:C117. Expected `\n\t\tView Plot ` to be at an indentation of 3 but was found at 2.  block-indentation\n');
  });
  QUnit.test('xvector-assignment/pods/visualize/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'xvector-assignment/pods/visualize/template.hbs should pass TemplateLint.\n\n');
  });
});
define("xvector-assignment/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('integration/pods/components/csv-image/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/pods/components/csv-image/component-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/pods/components/file-upload/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/pods/components/file-upload/component-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/pods/components/graph-modifier/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/pods/components/graph-modifier/component-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/pods/components/line-graph/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/pods/components/line-graph/component-test.js should pass ESLint\n\n');
  });
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
  QUnit.test('unit/pods/add-csv/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/add-csv/route-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/pods/index/controller-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/index/controller-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/pods/index/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/index/route-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/pods/visualize/controller-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/visualize/controller-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/pods/visualize/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/visualize/route-test.js should pass ESLint\n\n');
  });
});
define("xvector-assignment/tests/test-helper", ["xvector-assignment/app", "xvector-assignment/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("xvector-assignment/tests/unit/pods/add-csv/route-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | add-csv', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:add-csv');
      assert.ok(route);
    });
  });
});
define("xvector-assignment/tests/unit/pods/index/controller-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:index');
      assert.ok(controller);
    });
  });
});
define("xvector-assignment/tests/unit/pods/index/route-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:index');
      assert.ok(route);
    });
  });
});
define("xvector-assignment/tests/unit/pods/visualize/controller-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | visualize', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:visualize');
      assert.ok(controller);
    });
  });
});
define("xvector-assignment/tests/unit/pods/visualize/route-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | visualize', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:visualize');
      assert.ok(route);
    });
  });
});
define('xvector-assignment/config/environment', [], function() {
  var prefix = 'xvector-assignment';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('xvector-assignment/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
