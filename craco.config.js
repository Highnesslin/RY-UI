// * 配置完成后记得重启下
const CracoLessPlugin = require('craco-less');

module.exports = {
  babel: {
    //用来支持装饰器
    plugins: [['@babel/plugin-proposal-decorators', { legacy: true }]],
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-light': '#8abdff',
              '@primary': '#6d5dfc',
              '@primary-dark': '#5b0eeb',
              '@white': '#ffffff',
              '@greyLight-1': '#e4ebf5',
              '@greyLight-2': '#c8d0e7',
              '@greyLight-3': '#bec8e4',
              '@greyDark': '#9baacf',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
