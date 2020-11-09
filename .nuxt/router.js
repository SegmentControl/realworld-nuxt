import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _e022797e = () => interopDefault(import('../pages/layout' /* webpackChunkName: "" */))
const _a0145294 = () => interopDefault(import('../pages/home' /* webpackChunkName: "" */))
const _4efd4872 = () => interopDefault(import('../pages/login' /* webpackChunkName: "" */))
const _5df3c472 = () => interopDefault(import('../pages/profile' /* webpackChunkName: "" */))
const _1c764b0c = () => interopDefault(import('../pages/settings' /* webpackChunkName: "" */))
const _f7c02cf8 = () => interopDefault(import('../pages/editor' /* webpackChunkName: "" */))
const _44be07bf = () => interopDefault(import('../pages/article' /* webpackChunkName: "" */))

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
    component: _e022797e,
    children: [{
      path: "",
      component: _a0145294,
      name: "home"
    }, {
      path: "/login",
      component: _4efd4872,
      name: "login"
    }, {
      path: "/register",
      component: _4efd4872,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _5df3c472,
      name: "profile"
    }, {
      path: "/settings",
      component: _1c764b0c,
      name: "settings"
    }, {
      path: "/editor/:slug?",
      component: _f7c02cf8,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _44be07bf,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
