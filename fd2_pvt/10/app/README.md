1. npm init
2. npm i typescript (-g)
3. look in tsconfig.json
4. npm run build
5. npm i babel-cli -g
6. npm i babel-preset-env --save-dev
7. npm install -g browserify

  "scripts": {
    "ts": "tsc",
    "babel": "babel dist/app.js --out-file dist/app.es5.js",
    "build": "browserify dist/app.js -o dist/result.js"
  }