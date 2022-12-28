[![Latest Stable Version](https://poser.pugx.org/whatwedo/eslint-config-whatwedo/v/stable)](https://packagist.org/packages/whatwedo/eslint-config-whatwedo)

# ESLint whatwedo Config

This project is a set of ESLint rules, which we are using at [whatwedo](https://whatwedo.ch). It's heavily based on [Airbnb](https://github.com/airbnb/javascript).

## Installation

Install our predefined config.

```
yarn add eslint-config-whatwedo
```

This should install all peer dependencies (even ESLint by itself). Our rules are based on the Airbnb config and those have a couple of subpackages as well.

Setup ESLint in your project by adding a `.eslintrc.js` file with the following content:

```
module.exports = {
    "extends": "whatwedo",
}
```

## Usage

In a perfect world you would be good to go. But as we all know sometimes we need to adjust project specfic things.

```
module.exports = {
    "extends": "whatwedo",
    globals: {
        wp: true,
    },
    rules: {},
}
```

In the rules object for example, you can add your own adjustments. This won't override the settings, but merge it.

## Dependencies

* [eslint](https://github.com/eslint/eslint)
* [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)


## License

This bundle is under the MIT license. See the complete license in the bundle: [LICENSE](LICENSE)
