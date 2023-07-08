module.exports = {
    "env": {
        "browser": false,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/react-in-jsx-scope": "off",
        "react/prop-types":"off",
        "no-unused-vars":"off",
        "no-unreachable":"off",
        "react/no-unescaped-entities":"off",
        "no-undef":"off",
    },
    "ignorePatterns":[".eslintrc.js"],
}
