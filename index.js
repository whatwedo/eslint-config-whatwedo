module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['airbnb', 'prettier'],
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
    },
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
        wp: true,
        wpApiSettings: true,
        window: true,
        document: true,
    },
    rules: {},
};