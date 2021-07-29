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