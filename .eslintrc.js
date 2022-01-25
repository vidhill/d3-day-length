module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['vidhill'],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    rules: {},
    overrides: [
        {
            extends: ['vidhill/node'],
            files: ['.eslintrc.js'],
            env: {
                node: true,
            },
        },
    ],
    ignorePatterns: ['dist/'],
};
