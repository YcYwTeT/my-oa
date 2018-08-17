//全局配置

import { Component } from 'react'; 

// import axios from 'axios';
import store from '../store'
import http from './http'

// Component.prototype.$http = axios;
Component.prototype.store = store;
Component.prototype.$http = http