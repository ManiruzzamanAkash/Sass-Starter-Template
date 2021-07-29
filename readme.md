# Sass HTML Starter Template

A starter kit to use `sass`/`scss` in your HTML project and maintain a scalable code in your design.

---

## How can I start
#### Easy way to integrate scss:
Just clone the repo and run the following commands to start

```bash
git clone https://github.com/ManiruzzamanAkash/Sass-Starter-Template.git
npm install
npm start
```

### The way I made the setup:
#### Init NPM
```bash
npm init
```

#### Use Webpack
We'll use webpack to make our setup:

Doc Link - https://webpack.js.org/loaders/sass-loader/
```bash
npm i webpack webpack-cli --save-dev
```


#### Install sass and css loaders
Now, install all necessay plugins to load sass, css and for the extract plugin.

```bash
npm install sass-loader style-loader css-loader postcss-loader sass mini-css-extract-plugin --save-dev
```

or, you can check the `package.json`

```json
{
  "name": "design",
  "version": "1.0.0",
  "description": "Sass Setup",
  "main": "index.js",
  "scripts": {
    "start": "webpack"
  },
  "author": "",
  "license": "ISC",
  
  "devDependencies": {
    "sass": "^1.36.0",
    "sass-loader": "^12.1.0",
    "webpack": "^5.47.0",
    "webpack-cli": "^4.7.2",
    "css-loader": "^6.2.0",
    "mini-css-extract-plugin": "^2.1.0",
    "node-sass": "^6.0.1",
    "postcss-loader": "^6.1.1",
    "style-loader": "^3.2.1"
  }
}

```

### Process:

#### Create folder - `src`

#### Inside `src`, create two file - 
`src/scss/app.scss` - 
```scss
body {
  background-color: red;
}
```

`src/index.js` with this line - 
```js
import './scss/app.scss';
```


#### Create a `webpack.config.js` file  in root - 

`webpack.config.js`

```js
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {

    entry: './src',
    mode: 'development',

    output: {
        path: __dirname + "/dist",
        filename: 'js/main.js'
    },

    module: {
        rules: [
            {
                test: /\.js/,
                exclude: /(node_modules|bower_components)/,
                include: __dirname + '/src',
            },

            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                ]
            },

            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            }
        ],
    },

    plugins: [

        // Plugins that will make a css file after converting from scss and extract to location
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
            chunkFilename: "css/[id].min.css",
            ignoreOrder: false
        })
    ],

    watch: true, // Make running codes
};
```

### Start webpack with watching
```bash
npm start
```

And now in your design folder, you can put your HTML code and add the auto-generated CSS, like so,

`design/index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome Scss</title>
    <link rel="stylesheet" href="../dist/css/main.css">
</head>
<body>
    <div class="header">
        <h2>Header Part</h2>
    </div>
    <div class="content">
        <h2>Content Part</h2>

        <div class="home-page">
            <h3>Home Page</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam reiciendis sit consequatur accusantium repudiandae sequi, rem cupiditate necessitatibus. Molestiae nisi facere iusto et repellendus cumque reprehenderit, modi recusandae tempora. Facilis?</p>
        </div>
    </div>
    <div class="footer">
        <h2>Footer Part</h2>
    </div>
</body>
</html>
```

Open this `index.html` in browser. And hope, you can get a red background color template.


## Check More stuff for scss with real-life data

### Create some files inside `src/scss/scss`

**Inside `src/scss/layouts` folder -**

`content.scss`
```scss
.content {
    background-color: greenyellow;
}
```

`header.scss`
```scss
.header {
    background-color: blueviolet;
}
```

`footer.scss`
```scss
.footer {
    background-color: blueviolet;
}
```


**Inside src/scss/pages folder -**

`home.scss`
```scss
.home-page {
    background: hotpink;

    h3 {
        font-size: 100px;
    }
}
```

Now in `app.scss` - 
```scss
@import './layouts/header.scss';
@import './layouts/footer.scss';
@import './layouts/content.scss';
@import './pages/home.scss';
```

# Done, WOW
That's all. Now check, `auto generated css` stored in `dist/css/main.css` and that's very clean.

```css
/*!******************************************************************************************************************************************************!*\
  !*** css ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/app.scss ***!
  \******************************************************************************************************************************************************/
.header {
  background-color: blueviolet;
}

.footer {
  background-color: blueviolet;
}

.content {
  background-color: greenyellow;
}

.home-page {
  background: hotpink;
}
.home-page h3 {
  font-size: 100px;
}

```

Open the `index.html` again in browser. And hope, you can get a dummy-template with integrated CSS.

## Contrinution:
Yes, you can add some demo HTML page with `scss` designed. Just create Pull-Request and you'll be a contributor of us.