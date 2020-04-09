const path = require('path')
const withNextAntdLess = require('./next-antd-less.config')
const fs = require('fs')
const lessToJS = require('less-vars-to-js')
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './src/assets/antd-custom.less'), 'utf8')
)

module.exports = (phase, { defaultConfig }) => {
  const config = {
    ...defaultConfig,
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: '[local]___[hash:base64:5]',
    },
    lessLoaderOptions: {
      javascriptEnabled: true,
      modifyVars: themeVariables,
    },
    webpack: (config, options) => {
      config.resolve.alias['@'] = path.join(__dirname, 'src')
      return config
    },
  }
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return withNextAntdLess({
      ...config,
      env: {
        BASE_URL: 'http://localhost:3000',
      },
    })
  }

  return withNextAntdLess({
    ...config,
    env: {
      BASE_URL: 'https://hermappsondh.azurewebsites.net',
    },
  })
}
