<script>
  import { DarkMode } from 'flowbite-svelte';
</script>

<div class="min-h-screen flex items-center justify-center">
  <DarkMode
    class="text-primary-500 dark:text-primary-600 dark:border-gray-800" />
  <slot />
</div>
