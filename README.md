
# create-express-backend

Generator to scaffold Express backend projects using `npm init express-backend`


![node][node]
[![npm version][npm-badge]][npm]
[![dependencies Status][dependencies-badge]][dependencies]
[![devDependencies Status][dev-dependencies-badge]][dev-dependencies]
[![PRs Welcome][prs-badge]][prs]
[![GitHub][license-badge]][license]


## Usage

* Creating a new project

```
npm init express-backend
```

> Run this command inside an empty folder

* Running a generator

```
npm init express-backend login:local
```

> Run this command inside a folder with a previous generated project

* List available generators

```
npm init express-backend --list
```


## Folder structure

#### `src/index.js`

* Entry point

#### `src/init`

* Main generator to init a new project
* Dispatched using: 

```
npm init express-backend <folder>
```

#### `src/generators`

* Folder with all generators
* All generators must be registed in `src/generators/index.js`:

```javascript
// src/generators/index.js
const login = require('./login')

module.exports = {
  login,
}
```

* Example generator dispatched with: 

```
npm init express-backend <generator-name>
```

#### `src/generator/<generator>/<sub-generator>`

* A generator can have sub-generators
* The generator folder must have an `index.js` file with all sub-generators registered:

```javascript
// src/generator/login/index.js
const local = require('./local')
const oauth = require('./oauth')

module.exports = {
  local,
  oauth,
}
```

* The sub-generator can be dispatched with: 

```
npm init express-backend <generator>:<sub-generator>
```

[node]: https://img.shields.io/node/v/create-express-backend.svg

[npm-badge]: https://badge.fury.io/js/create-express-backend.svg
[npm]: https://badge.fury.io/js/create-express-backend

[dependencies-badge]: https://david-dm.org/joaogsleite/create-express-backend/status.svg
[dependencies]: https://david-dm.org/joaogsleite/create-express-backend

[dev-dependencies-badge]: https://david-dm.org/joaogsleite/create-express-backend/dev-status.svg
[dev-dependencies]: https://david-dm.org/joaogsleite/create-express-backend?type=dev

[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg
[prs]: http://makeapullrequest.com

[license-badge]: https://img.shields.io/github/license/joaogsleite/create-express-backend.svg
[license]: https://github.com/joaogsleite/create-express-backend/blob/master/LICENSE