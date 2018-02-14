import Home from './components//Home.vue';
import Header from './components//Header.vue';
import NotFound from './components/NotFound.vue';
import User from './components/user/User.vue';
import UserDetail from './components/user/UserDetail.vue';
import UserStart from './components/user/UserStart.vue';
import UserEdit from './components/user/UserEdit.vue';

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
            { path: ':id', component: UserDetail, name: 'userDetail'}, 
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