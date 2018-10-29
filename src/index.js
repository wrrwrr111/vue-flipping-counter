import vueFlippingCounter from './app.vue'
export default vueFlippingCounter;
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('vue-flipping-counter', vueFlippingCounter);
}