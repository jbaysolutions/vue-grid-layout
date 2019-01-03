module.exports = {
    configureWebpack: {
        output: {
            library: "VueGridLayout",
            libraryExport: 'default'
        },
        externals : {
            vue : {
              amd: 'vue'
            }
        }
    },
    css: {
        extract: false
    }
}