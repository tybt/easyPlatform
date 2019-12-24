// https://umijs.org/config/
import { resolve } from 'path'

export default {
  plugins: [
    [
      'umi-plugin-react',
      {
        dva: true ,
        antd: true,
        routes: {
          exclude: [
            /model\.(j|t)sx?$/,
            /service\.(j|t)sx?$/,
            /models\//,
            /components\//,
            /services\//,
          ],
        },
        title:"豆瓣"
      },
    ],
  ],
  theme: {
    "primary-color": "#1DA57A",
  },
  proxy: {
    '/proxys': {
      target: 'http://172.20.10.3:8500/',
      changeOrigin: true,
      pathRewrite: {'^/proxys' : ''}
    }
  }
  
  
}
