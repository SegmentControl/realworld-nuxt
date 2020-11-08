import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _338be152 = () => interopDefault(import('../pages/layout' /* webpackChunkName: "" */))
const _07b1304c = () => interopDefault(import('../pages/home' /* webpackChunkName: "" */))
const _22a5bcc8 = () => interopDefault(import('../pages/login' /* webpackChunkName: "" */))
const _5ddc09c8 = () => interopDefault(import('../pages/profile' /* webpackChunkName: "" */))
const _3b250de0 = () => interopDefault(import('../pages/settings' /* webpackChunkName: "" */))
const _4b2994cc = () => interopDefault(import('../pages/editor' /* webpackChunkName: "" */))
const _9047832e = () => interopDefault(import('../pages/article' /* webpackChunkName: "" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _338be152,
    children: [{
      path: "",
      component: _07b1304c,
      name: "home"
    }, {
      path: "/login",
      component: _22a5bcc8,
      name: "login"
    }, {
      path: "/register",
      component: _22a5bcc8,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _5ddc09c8,
      name: "profile"
    }, {
      path: "/settings",
      component: _3b250de0,
      name: "settings"
    }, {
      path: "/editor/:slug?",
      component: _4b2994cc,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _9047832e,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
