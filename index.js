const postcss = require('postcss');

function plugin() {
    return function (css) {
        css.walkAtRules('import', function (rule) {
            if (rule.params.includes('fonts.googleapis.com')) {
                rule.remove();
            }
        });
    };
}

module.exports = postcss.plugin('remove-google-fonts', plugin);
