let proxy_table = {
    'mz': 'https://m.maizuo.com',
}

let proxy = {};

for(var key in proxy_table){
    proxy['/' + key] = {
        target: proxy_table[key],
        changeOrigin: true,
        pathRewrite: {
            ['^/' + key]: ''
        }
    }
}

console.log(proxy)
module.exports = proxy;