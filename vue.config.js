const CopyWebpackPlugin = require('copy-webpack-plugin')
module.exports = {
    outputDir: 'dist/' + process.env.outputDir,
    configureWebpack: config => {
        config.plugins.push(
            new CopyWebpackPlugin([{ from: 'src/assets/files', to: './' }]),
        )
    }
}