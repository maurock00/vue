import Home from './components/Home.vue';

const Portfolio = resolve => { 
    require.ensure(['./components/portfolio/Portfolio.vue'], () => { 
        resolve(require('./components/portfolio/Portfolio.vue'));
    });
};

const Stocks = resolve => { 
    require.ensure(['./components/stock/Stocks.vue'], () => { 
        resolve(require('./components/stock/Stocks.vue'));
    });
};

export const routes = [
    { path: '/', component: Home }, 
    { path: '/portfolio', component: Portfolio }, 
    { path: '/stocks', component: Stocks}
];