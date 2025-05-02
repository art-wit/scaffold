<script>
  import { Router, route, goto } from '@mateothegreat/svelte5-router';
  import {
    BottomNav,
    BottomNavItem,
    Skeleton,
    ImagePlaceholder,
  } from 'flowbite-svelte';
  import {
    HomeSolid,
    WalletSolid,
    AdjustmentsVerticalOutline,
    UserCircleSolid,
  } from 'flowbite-svelte-icons';

  let activeUrl;
  $: activeUrl = window.location.pathname;
</script>

<Skeleton class="py-4" />
<ImagePlaceholder class="pb-20" />

<BottomNav
  {activeUrl}
  position="absolute"
  classInner="grid-cols-4"
  classActive="font-bold text-green-500 hover:text-green-900 dark:hover:text-green-700 dark:text-green-300">
  <BottomNavItem btnName="Home" href="/home">
    <HomeSolid />
  </BottomNavItem>
  <BottomNavItem
    on:click={() => {
      // activeUrl = '/protected/products';
      goto('/protected/products');
    }}
    href="/protected/products"
    btnName="Products">
    <WalletSolid />
  </BottomNavItem>
  <BottomNavItem
    on:click={() => {
      // activeUrl = '/protected/settings';
      goto('/protected/settings');
    }}
    href="/protected/settinegs"
    btnName="Settings">
    <AdjustmentsVerticalOutline />
  </BottomNavItem>
  <BottomNavItem btnName="Accordion" href="/docs/components/accordion">
    <UserCircleSolid />
  </BottomNavItem>
</BottomNav>

<a use:route href="/home"> Home </a>
<a use:route href="/protected/products"> Products </a>s
<a use:route href="/protected/settings"> Settings </a>
