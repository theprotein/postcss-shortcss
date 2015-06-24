var postcss = require('postcss'),
    shortcss = require('shortcss');

module.exports = postcss.plugin('postcss-shortcss', function(opts) {
    opts = opts || {};

    return function(css, result) {

        css.eachRule(function(rule) {
            var nodes = rule.nodes;

            nodes.forEach(function(node) {
                if(shortcss.isShorthand(node.prop)) {
                    var expandedProp = shortcss.expand(node.prop, node.value, false);
                    Object.keys(expandedProp).forEach(function(key) {
                        rule.append({ prop: key, value: expandedProp[key]});
                    });

                    node.removeSelf();
                } else {
                    result.warn(
                        node.prop + ' is not shorthand \n',
                      { node: rule }
                    );
                }
            });
        });
    };
});
