<script>
  import { goto as originalGoto } from '@mateothegreat/svelte5-router';
  import { BottomNav, BottomNavItem } from 'flowbite-svelte';
  import {
    HomeSolid,
    WalletSolid,
    AdjustmentsVerticalOutline,
    UserCircleSolid,
    ChartMixedDollarOutline,
    ChartPieSolid,
  } from 'flowbite-svelte-icons';
  import { writable } from 'svelte/store';

  const currentPath = writable(window.location.pathname);

  $: activeUrl = $currentPath;

  function goto(url) {
    originalGoto(url);
    currentPath.set(url);
  }
</script>

<BottomNav
  {activeUrl}
  navType="card"
  classInner="grid-cols-4"
  classActive="font-bold text-green-500 hover:text-green-900 dark:hover:text-green-300 dark:text-green-300">
  <BottomNavItem
    btnName="Chart"
    on:click={(e) => {
      e.preventDefault();
      goto('/client/statistics');
    }}
    href="/client/statistics">
    <ChartPieSolid />
  </BottomNavItem>
  <BottomNavItem
    on:click={(e) => {
      e.preventDefault();
      goto('/client/products');
    }}
    href="/client/products"
    btnName="Products">
    <WalletSolid />
  </BottomNavItem>
  <BottomNavItem
    on:click={(e) => {
      e.preventDefault();
      goto('/client/settings');
    }}
    href="/client/settings"
    btnName="Settings">
    <AdjustmentsVerticalOutline />
  </BottomNavItem>
  <BottomNavItem
    btnName="Logout"
    on:click={(e) => {
      e.preventDefault();
      Meteor.logout(() => goto('/login'));
    }}>
    <UserCircleSolid />
  </BottomNavItem>
</BottomNav>
