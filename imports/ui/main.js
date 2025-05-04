import { Meteor } from 'meteor/meteor';
import { mount } from 'svelte';
import App from './App.svelte';

Meteor.startup(() => {
  mount(App, { target: document.getElementById('app') });
  const html = document.querySelector('html');
  html.className = 'dark';
  const body = document.querySelector('body');
  body.className = 'bg-gray-50 antialiased dark:bg-gray-900';
});
