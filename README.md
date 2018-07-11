# React Redux Example App

[Live demo](https://compassionate-lichterman-919e75.netlify.com/)

## About

Recipients data is fetched only once on the start up. Then UI will be optimistically updated, based on the assumptions about remote API.

`Send` button - send `PUT` request to the remote endpoint with `status` changed to `true`.

`Delete selected recipients` - send `DELETE` request to delete selected recipients.

`Add email` - create new recipient with `false` `status` via POST request to the ENDPOINT.

Filters - filter shown recipients by `status`. No external API is called, just Redux stuff.

## Clone and install

```sh
git clone git@github.com:Noviel/react-redux-example-app.git
cd react-redux-example-app
yarn install
```

## Start dev server
```sh
yarn dev
```

## Build for production and serve locally
```sh
yarn build && yarn serve
```

## Packages

[webpack-features](https://github.com/Noviel/webpack-features) - Webpack configuration.

[react-table](https://github.com/react-tools/react-table) - basic table rendering.
