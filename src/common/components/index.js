import Vue from 'vue';
import preview from './preview'
const components = [preview];
components.map(function(component) {
    Vue.component(component.name, component);
});