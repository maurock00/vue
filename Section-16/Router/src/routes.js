import Home from './components//Home.vue';
import Header from './components//Header.vue';

// Normal way to import the components

// import NotFound from './components/NotFound.vue';
// import User from './components/user/User.vue';
// import UserDetail from './components/user/UserDetail.vue';
// import UserStart from './components/user/UserStart.vue';
// import UserEdit from './components/user/UserEdit.vue';

// Lasy way to import the componentes, this ensures that webpack only bundle the components when it is needed. 
// Also we can add another parameter to require.ensure method which is a string and set a group name to bundle some components

const User = resolve => { 
    require.ensure(['./components/user/User.vue'], () => { 
        resolve(require('./components/user/User.vue'));
    }, 'user');
};

const UserDetail = resolve => { 
    require.ensure(['./components/user/UserDetail.vue'], () => { 
        resolve(require('./components/user/UserDetail.vue'));
    }, 'user');
};

const UserStart = resolve => { 
    require.ensure(['./components/user/UserStart.vue'], () => { 
        resolve(require('./components/user/UserStart.vue'));
    }, 'user');
};

const UserEdit = resolve => { 
    require.ensure(['./components/user/UserEdit.vue'], () => { 
        resolve(require('./components/user/UserEdit.vue')); 
    }, 'user');
};

const NotFound = resolve => { 
    require.ensure(['./components/NotFound.vue'], () => { 
        resolve(require('./components/NotFound.vue'));
    });
};

export const routes = [
    { path: '', components: {
        default: Home, 
        'header-top': Header
    }},
    { path: '/user', components: {
        default: User, 
        'header-bottom': Header
        },
        children: [
            { path: '', component: UserStart }, 
            { path: ':id', component: UserDetail, name: 'userDetail', beforeEnter: (to, from, next) => { 
                console.log('Inside route guard, (User Detail)');
                next();
            } }, 
            { path: ':id/edit', component: UserEdit, name: 'editUser' }
        ]
    },
    {path: 'not-found', name: 'not-found', components: { 
        default: NotFound, 
        'header-top': Header
        }
    },   
    { path: '/redirect-me', redirect: '/user'},
    { path: '*', redirect: { name: 'not-found'} }
];