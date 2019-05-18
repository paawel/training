1. npm init
2. npm i typescript (-g)
3. look in tsconfig.json
4. npm install -g browserify
5. npm i babel-cli --save-dev
6. npm i babel-preset-env --save-dev


  "scripts": {
    "ts": "tsc",
    "babel": "babel dist/app.js --out-file dist/app.es5.js",
    "build": "browserify dist/app.js -o dist/result.js"
  }