[![taylor swift](https://img.shields.io/badge/secured%20by-taylor%20swift-brightgreen.svg)](https://twitter.com/SwiftOnSecurity)
[![volkswagen status](https://auchenberg.github.io/volkswagen/volkswargen_ci.svg?v=1)](https://github.com/auchenberg/volkswagen) [![GitHub version](https://badge.fury.io/gh/angularclass%2Fangular2-webpack-starter.svg)](https://badge.fury.io/gh/angularclass%2Fangular2-webpack-starter) [![Dependency Status](https://david-dm.org/angularclass/angular2-webpack-starter.svg)](https://david-dm.org/angularclass/angular2-webpack-starter)
[![Issue Stats](http://issuestats.com/github/angularclass/angular2-webpack-starter/badge/pr?style=flat)](http://issuestats.com/github/angularclass/angular2-webpack-starter)
[![Issue Stats](http://issuestats.com/github/angularclass/angular2-webpack-starter/badge/issue?style=flat)](http://issuestats.com/github/angularclass/angular2-webpack-starter) [![Stack Share](http://img.shields.io/badge/tech-stack-0690fa.svg?style=flat)](http://stackshare.io/angularclass/angular-2-webpack-starter)

<p align="center">
  <a href="https://angularclass.com" target="_blank">
    <img src="https://cloud.githubusercontent.com/assets/1016365/9863762/a84fed4a-5af7-11e5-9dde-d5da01e797e7.png" alt="Webpack and Angular 2" width="500" height="320"/>
  </a>
</p>

# Angular2 Webpack Starter [![Join Slack](https://img.shields.io/badge/slack-join-brightgreen.svg)](https://angularclass.com/slack-join) [![Join the chat at https://gitter.im/angularclass/angular2-webpack-starter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/angularclass/angular2-webpack-starter?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)


> An Angular 2 starter kit featuring [Angular 2](https://angular.io) ([Router](https://angular.io/docs/js/latest/api/router/), [Forms](https://angular.io/docs/js/latest/api/forms/),
[Http](https://angular.io/docs/js/latest/api/http/),
[Services](https://gist.github.com/gdi2290/634101fec1671ee12b3e#_follow_@AngularClass_on_twitter),
[Tests](https://angular.io/docs/js/latest/api/test/), [E2E](https://angular.github.io/protractor/#/faq#what-s-the-difference-between-karma-and-protractor-when-do-i-use-which-)), [Karma](https://karma-runner.github.io/), [Protractor](https://angular.github.io/protractor/), [Jasmine](https://github.com/jasmine/jasmine), [Istanbul](https://github.com/gotwarlost/istanbul), [TypeScript](http://www.typescriptlang.org/), [Typings](https://github.com/typings/typings), and [Webpack](http://webpack.github.io/) by [AngularClass](https://angularclass.com).

> If you're looking for Angular 1.x please use [NG6-starter](https://github.com/angularclass/NG6-starter)  
> If you're looking to learn about Webpack and ES6 Build Tools check out [ES6-build-tools](https://github.com/AngularClass/ES6-build-tools)  
> If you're looking to learn TypeScript see [TypeStrong/learn-typescript](https://github.com/TypeStrong/learn-typescript)

This seed repo serves as an Angular 2 starter for anyone looking to get up and running with Angular 2 and TypeScript fast. Using a [Webpack](http://webpack.github.io/) for building our files and assisting with boilerplate. We're also using Protractor for our end-to-end story and Karma for our unit tests.
* Best practices in file and application organization for Angular 2.
* Ready to go build system using Webpack for working with TypeScript.
* Angular 2 examples that are ready to go when experimenting with Angular 2.
* A great Angular 2 seed repo for anyone who wants to start their project.
* Testing Angular 2 code with Jasmine and Karma.
* Coverage with Istanbul and Karma
* End-to-end Angular 2 code using Protractor.
* Type manager with Typings

### Quick start
> Clone/Download the repo then edit `app.ts` inside [`/src/app/app.ts`](/src/app/app.ts)

```bash
# clone our repo
# --depth 1 removes all but one .git commit history
git clone --depth 1 https://github.com/angularclass/angular2-webpack-starter.git

# change directory to our repo
cd angular2-webpack-starter

# install the repo with npm
npm install

# install TypeScript typings
./node_modules/.bin/typings install

# start the server
npm start
```
go to [http://0.0.0.0:3000](http://0.0.0.0:3000) or [http://localhost:3000](http://localhost:3000) in your browser

# Table of Contents
* [File Structure](#file-structure)
* [Getting Started](#getting-started)
    * [Dependencies](#dependencies)
    * [Installing](#installing)
    * [Running the app](#running-the-app)
* [Contributing](#contributing)
* [TypeScript](#typescript)
* [Frequently asked questions](#frequently-asked-questions)
* [Support, Questions, or Feedback](#support-questions-or-feedback)
* [License](#license)


## File Structure
We use the component approach in our starter. This is the new standard for developing Angular apps and a great way to ensure maintainable code by encapsulation of our behavior logic. A component is basically a self contained app usually in a single file or a folder with each concern as a file: style, template, specs, e2e, and component class. Here's how it looks:
```
angular2-webpack-starter/
 ├──src/                       * our source files that will be compiled to javascript
 |   ├──main.ts                * our entry file for our browser environment
 │   │
 |   ├──index.html             * Index.html: where we generate our index page
 │   │
 |   ├──vendor.ts              * our vendor file
 │   │
 │   ├──app/                   * WebApp: folder
 │   │   ├──app.spec.ts        * a simple test of components in app.ts
 │   │   └──app.ts             * App.ts: a simple version of our App component components
 │   │
 │   └──assets/                * static assets are served here
 │       ├──icon/              * our list of icons from www.favicon-generator.org
 │       ├──service-worker.js  * ignore this. Web App service worker that's not complete yet
 │       ├──robots.txt         * for search engines to crawl your website
 │       └──human.txt          * for humans to know who the developers are
 │
 ├──test/                      * this is our global unit tests and end-to-end tests
 │
 ├──spec-bundle.js             * ignore this magic that sets up our angular 2 testing environment
 ├──karma.config.js            * karma config for our unit tests
 ├──protractor.config.js       * protractor config for our end-to-end tests
 │
 ├──tsconfig.json              * config that webpack uses for typescript
 ├──typings.json               * our typings manager
 ├──package.json               * what npm uses to manage it's dependencies
 │
 ├──webpack.config.js          * our development webpack config
 ├──webpack.test.config.js     * our testing webpack config
 └──webpack.prod.config.js     * our production webpack config
```

# Getting Started
## Dependencies
What you need to run this app:
* `node` and `npm` (`brew install node`)
* Ensure you're running the latest versions Node `v4.1.x`+ and NPM `2.14.x`+

Once you have those, you should install these globals with `npm install --global`:
* `webpack` (`npm install --global webpack`)
* `webpack-dev-server` (`npm install --global webpack-dev-server`)
* `karma` (`npm install --global karma-cli`)
* `protractor` (`npm install --global protractor`)
* `typings` (`npm install --global typings`)
* `typescript` (`npm install --global typescript`)

## Installing
* `fork` this repo
* `clone` your fork
* `npm install` to install all dependencies
* `typings install` to install necessary typings
* `npm run server` to start the dev server in another tab

## Running the app
After you have installed all dependencies you can now run the app. Run `npm run server` to start a local server using `webpack-dev-server` which will watch, build (in-memory), and reload for you. The port will be displayed to you as `http://0.0.0.0:3000` (or if you prefer IPv6, if you're using `express` server, then it's `http://[::1]:3000/`).

### server
```bash
# development
npm run server
# production
npm run build:prod
npm run server:prod
```

## Other commands

### build files
```bash
# development
npm run build:dev
# production
npm run build:prod
```

### watch and build files
```bash
npm run watch
```

### run tests
```bash
npm run test
```

### run webdriver (for end-to-end)
```bash
npm run webdriver:update
npm run webdriver:start
```

### run end-to-end tests
```bash
# make sure you have webdriver running and a sever for the client app
npm run e2e
```

# Contributing
You can include more examples as components but they must introduce a new concept such as `Home` component (separate folders), and Todo (services). I'll accept pretty much everything so feel free to open a Pull-Request

# TypeScript
> To take full advantage of TypeScript with autocomplete you would have to install it globally and use an editor with the correct TypeScript plugins.

## Use latest TypeScript compiler
TypeScript 1.7.x includes everything you need. Make sure to upgrade, even if you installed TypeScript previously.

```
npm install --global typescript
```

## Use a TypeScript-aware editor
We have good experience using these editors:

* [Visual Studio Code](https://code.visualstudio.com/)
* [Webstorm 10](https://www.jetbrains.com/webstorm/download/)
* [Atom](https://atom.io/) with [TypeScript plugin](https://atom.io/packages/atom-typescript)
* [Sublime Text](http://www.sublimetext.com/3) with [Typescript-Sublime-Plugin](https://github.com/Microsoft/Typescript-Sublime-plugin#installation)

# Frequently asked questions
* What's the current browser support for Angular 2 Beta?
  * Please view the updated list of [browser support for Angular 2](https://github.com/angularclass/awesome-angular2#current-browser-support-for-angular-2)
* Why is my service, aka provider, is not injecting parameter correctly?
  * Please use `@Injectable()` for your service for typescript to correctly attach the metadata (this is a TypeScript problem)
* How do I run protractor with node 0.12.x?
  * please check out this repo to use the old version of protractor [#146](https://github.com/AngularClass/angular2-webpack-starter/pull/146/files)
* Where do I write my tests?
  * You can write your tests next to your component files. See [`/src/app/home/home.spec.ts`](/src/app/home/home.spec.ts)
* How do I start the app when I get `EACCES` and `EADDRINUSE` errors?
  * The `EADDRINUSE` error means the port `3000` is currently being used and `EACCES` is lack of permission for webpack to build files to `./dist/`
* How to use `sass` for css?
 * `loaders: ['raw-loader','sass-loader']` and `@Component({ styles: [ require('./filename.scss') ] })` see issue [#136](https://github.com/AngularClass/angular2-webpack-starter/issues/136)
* How do I test a Service?
 * See issue [#130](https://github.com/AngularClass/angular2-webpack-starter/issues/130#issuecomment-158872648)
* How do I add `vscode-chrome-debug` support?
 * The VS Code chrome debug extension support can be done via `launch.json` see issue [#144](https://github.com/AngularClass/angular2-webpack-starter/issues/144#issuecomment-164063790)
* How do I make the repo work in a virtual machine?
 * You need to use `0.0.0.0` so revert these changes [#205](https://github.com/AngularClass/angular2-webpack-starter/pull/205/files)
* What are the naming conventions for Angular 2?
 * please see issue [#185](https://github.com/AngularClass/angular2-webpack-starter/issues/185) and PR [196](https://github.com/AngularClass/angular2-webpack-starter/pull/196)
* How do I include bootstrap or jQuery?
 * please see issue [#215](https://github.com/AngularClass/angular2-webpack-starter/issues/215) and [#214](https://github.com/AngularClass/angular2-webpack-starter/issues/214#event-511768416)
* I'm getting an error about not finding my module that I installed?
 * please see [custom_typings.d.ts](https://github.com/AngularClass/angular2-webpack-starter/blob/master/src/custom_typings.d.ts)

# Support, Questions, or Feedback
> Contact us anytime for anything about this repo or Angular 2

* [Chat: AngularClass.slack](http://angularclass.com/member-join/)
* [Twitter: @AngularClass](https://twitter.com/AngularClass)
* [Gitter: AngularClass/angular2-webpack-starter](https://gitter.im/angularclass/angular2-webpack-starter)

___

enjoy — **AngularClass**

<br><br>

[![AngularClass](https://cloud.githubusercontent.com/assets/1016365/9863770/cb0620fc-5af7-11e5-89df-d4b0b2cdfc43.png  "Angular Class")](https://angularclass.com)
##[AngularClass](https://angularclass.com)
> Learn AngularJS, Angular 2, and Modern Web Development from the best.
> Looking for corporate Angular training, want to host us, or Angular consulting? patrick@angularclass.com

# License
 [MIT](/LICENSE)
