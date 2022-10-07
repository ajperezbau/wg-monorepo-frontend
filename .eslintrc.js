module.exports = {
    root: true,
    extends: ['eslint:recommended'],
    ignorePatterns: [
        '**/*.d.ts',
        '**/*.js',
        '**/jest.setup.ts',
        '**/dist',
        'packages/search-adapter',
        'packages/eslint-plugin-x'
    ],
    overrides: [
        {
            files: "**/*.+(vue)",
            parser: "vue-eslint-parser",
            parserOptions: {
                "parser": {
                    "ts": "@typescript-eslint/parser",
                    "<template>": "espree"
                },
                "sourceType": "module"
            },
            extends: [
                'plugin:vue/recommended',
                'plugin:vuejs-accessibility/recommended',
                '@vue/typescript'
            ],
            rules: {
                'vue/multi-word-component-names': 'off'
            }
        },
        {
            "files": "**/*.+(ts|tsx)",
            "parser": "@typescript-eslint/parser",
            "parserOptions": {
                "project": ["./tsconfig.eslint.json", './*/tsconfig.json'],
                "sourceType": "module"
            },
            plugins: ["@typescript-eslint"],
            extends: [
                "plugin:@typescript-eslint/eslint-recommended",
                "plugin:@typescript-eslint/recommended"
            ],
            rules: {
                'no-const-assign': 'error'
            }
        }
    ]
};
