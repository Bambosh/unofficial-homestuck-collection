module.exports = {
    configureWebpack: {
        devtool: "source-map",
        resolve: {
            alias: {
                // Include the vue compiler so mods can use templates
                "vue$": "vue/dist/vue.esm.js"
            }
        }
    },
    pluginOptions: {
        electronBuilder: {
            nodeIntegration: true,
            builderOptions: {
                appId: "com.bambosh.unofficialhomestuckcollection",
                productName: "The Unofficial Homestuck Collection",
                copyright: "Copyright © 2020-2022 Bambosh",
                directories: {
                    buildResources: "build"
                },
                win: {
                    target: "zip"
                },
                mac: {
                    category: "entertainment"
                },
                linux: {
                    target: "tar.gz",
                    category: "game"
                }
            }
        }
    }
}
