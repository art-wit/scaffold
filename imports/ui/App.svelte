<script>
  import { Router, goto } from '@mateothegreat/svelte5-router';
  import BaseLayout from './layouts/BaseLayout.svelte';
  import Login from './pages/Login.svelte';
  import Home from './pages/Home.svelte';
  import ProtectedRouter from './pages/protected/Routes.svelte';
  const routes = [
    {
      path: '',
      hooks: {
        pre: () => {
          // goto('/login');
        },
      },
    },
    {
      path: 'login',
      component: Login,
    },
    {
      path: 'home',
      component: Home,
    },
    {
      path: 'protected',
      component: ProtectedRouter,
      hooks: {
        pre() {
          console.log('!!!Protected!!!');
          goto('/login');
          return false;
        },
      },
    },
  ];
</script>

<BaseLayout>
  <Router id="open-router" {routes} />
</BaseLayout>
