import { Meteor } from 'meteor/meteor';
import { mount } from 'svelte';
import App from './App.svelte';

Meteor.startup(() => {
  mount(App, { target: document.getElementById('app') });
  const html = document.querySelector('html');
  html.setAttribute('data-mode', 'dark');
  html.setAttribute('data-theme', 'sahara');
});
