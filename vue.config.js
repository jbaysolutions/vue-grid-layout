module.exports = {
    configureWebpack: {
        output: {
            library: "VueGridLayout",
            libraryExport: 'default'
        },
        externals: {
            vue: 'vue'
        },
    },
    css: {
        extract: false
    }
}