<script>
  import { Meteor } from 'meteor/meteor';
  import { Card, Button, Label, Input, Checkbox } from 'flowbite-svelte';
  import { goto } from '@mateothegreat/svelte5-router';

  let username, password;

  function handleLogin(event) {
    event.preventDefault();
    Meteor.loginWithPassword(username, password, (err) => {
      console.log('Login callback:', err);
      if (err) {
        const error = err.message || 'Login failed';
        console.error('Login error:', error);
      } else {
        goto('/client/statistics');
      }
    });
  }
</script>

<div class="p-2 flex items-center justify-center h-[100dvh]">
  <Card>
    <form class="flex flex-col space-y-6">
      <h3 class="text-xl font-medium text-gray-900 dark:text-white">
        Sign in to our platform
      </h3>
      <Label class="space-y-2">
        <span>Username</span>
        <Input
          class="mt-1"
          name="login"
          placeholder="name@company.com"
          bind:value={username}
          required />
      </Label>
      <Label class="space-y-2">
        <span>Your password</span>
        <Input
          class="mt-1"
          autocomplete="on"
          type="password"
          name="password"
          placeholder="•••••"
          bind:value={password}
          required />
      </Label>
      <Button type="button" on:click={handleLogin} class="w-full"
        >Login to your account</Button>
      <Button type="submit" class="w-full">Google</Button>
    </form>
  </Card>
</div>
