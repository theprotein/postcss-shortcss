var postcss = require('postcss'),
    shortcss = require('shortcss'),
    _ = require('lodash');

module.exports = postcss.plugin('postcss-shortcss', function(opts) {
    opts = opts || {};

    return function(css, result) {

        css.eachRule(function(rule) {
            var nodes = rule.nodes;

            nodes.forEach(function(node) {
                if(shortcss.expand(node.prop).length > 1) {
                    node.replaceWith(shortcss.expand(node.prop, node.value, false))
                } else {
                    result.warn(
                        node.prop + 'is not shorthand \n',
                      { node: rule }
                    );
                }
            });
        });
    };
});
