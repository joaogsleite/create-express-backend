
# create-express-backend

Example `create-<package>` package to init projects with `npm init <package>`


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
