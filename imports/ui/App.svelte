<script>
  import { Router, goto } from '@mateothegreat/svelte5-router';
  import BaseLayout from './layouts/BaseLayout.svelte';
  import Login from './pages/Login.svelte';
  import ClientRouter from './pages/client/Routes.svelte';
  const routes = [
    {
      path: '',
      hooks: {
        pre: () => {
          goto('/login');
        },
      },
    },
    {
      path: 'login',
      component: Login,
      hooks: {
        pre: () => {
          if (Meteor.userId()) {
            goto('/client');
          }
          return true;
        },
      },
    },
    {
      path: 'client',
      component: ClientRouter,
      hooks: {
        pre() {
          if (!Meteor.userId()) {
            goto('/login');
            return false;
          }
          return true;
        },
      },
    },
  ];
</script>

<BaseLayout>
  <Router id="open-router" {routes} />
</BaseLayout>
