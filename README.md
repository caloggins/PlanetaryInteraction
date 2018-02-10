# PlanetaryInteraction

## General Setup

* npm packages
  * enzyme
  * enzyme-adapter-react-16
  * axios
  * moxios
  * redux
  * react-redux
  * thunk
  * redux-thunk
  * redux-mock-store
  * react-router-dom
  * renamer
* Add files
  * .prettierrc
  * .editorconfig
  * .eslintrc
  * setupTests.js file
* Update package.json
* For integration with the host
  * add `scripts/postbuild.js`
  * add postbuild script to package.json

## Files

### setupTests.js

```js
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })
```

### postbuild.js

```js
const fse = require('fs-extra')

const copy = (source, target) => {
    console.log(`Copying files from ${source} to ${target}`)

    fse.copy(source, target)
        .then(() => console.log('Files copied'))
        .catch(err => console.error(err))
  }

  copy('./build/static/css', '../Paylocity.WireLog.Web/Content')
  copy('./build/static/js', '../Paylocity.WireLog.Web/Scripts')
  copy('./build/static/media', '../Paylocity.WireLog.Web/Content')
```

### package.json additions
```js
    "build": "react-scripts build&&npm run build-rename",
    "build-rename": "npm run build-rename-js&&npm run build-rename-css&&npm run build-fix-sourcemap",
    "build-rename-js": "renamer --regex --find \"main\\.[^\\.]+\\.\" --replace \"main.\" build\\static\\js\\*",
    "build-rename-css": "renamer --regex --find \"main\\.[^\\.]+\\.\" --replace \"main.\" build\\static\\css\\*",
    "build-fix-sourcemap": "npm run build-fix-sourcemap-js&&npm run build-fix-sourcemap-css",
    "build-fix-sourcemap-js": "replace \"# sourceMappingURL=main.*.js.map\" \"# sourceMappingURL=main.js.map\" build\\static\\js\\main.js",
    "build-fix-sourcemap-css": "replace \"# sourceMappingURL=main.*.map\" \"# sourceMappingURL=main.css.map\" build\\static\\css\\main.css",
    "postbuild": "node scripts/postbuild.js",
```