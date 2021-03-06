import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import RouterOut from './router'
// import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

//引入全局样式
import './stylesheets/main.scss'
// import 'swiper/dist/css/swiper.min.css'

//引入全局配置
import './modules/config'

//引入store
import store from './store'

ReactDOM.render(<Provider store = {store}><RouterOut></RouterOut></Provider>, document.getElementById('root'));
registerServiceWorker();
