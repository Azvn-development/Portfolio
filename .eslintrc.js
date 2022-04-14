module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "eslint:recommended",
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true,
            "tsx": true
        },
        "ecmaVersion": 13,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "eslint-plugin-react",
        "eslint-plugin-react-hooks"
    ],
    "rules": {}
};
