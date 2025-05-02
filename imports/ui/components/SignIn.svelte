<script>
  import { Meteor } from 'meteor/meteor';
  import { Card, Button, Label, Input, Checkbox } from 'flowbite-svelte';
  import { goto } from '@mateothegreat/svelte5-router';

  const username = 'admin';
  const password = 'Passw0rd';
  let error = '';

  function handleLogin(event) {
    event.preventDefault(); // Останавливаем обычную отправку формы

    Meteor.loginWithPassword(username, password, (err) => {
      console.log('Login callback:', err);
      if (err) {
        error = err.message || 'Login failed';
        console.error('Login error:', err);
      } else {
        goto('/protected'); // перенаправление на защищённый маршрут
      }
    });
  }
</script>

<!-- <Card> -->
<form class="flex flex-col space-y-6">
  <h3 class="text-xl font-medium text-gray-900 dark:text-white">
    Sign in to our platform
  </h3>
  <Label class="space-y-2">
    <span>Username</span>
    <Input type="email" name="email" placeholder="name@company.com" required />
    <!-- <input placeholder="Say your name" bind:value={username} required /> -->
  </Label>
  <Label class="space-y-2">
    <span>Your password</span>
    <Input type="password" name="password" placeholder="•••••" required />
  </Label>
  <div class="flex items-start">
    <Checkbox>Remember me</Checkbox>
    <a
      href="/"
      class="ms-auto text-sm text-primary-700 hover:underline dark:text-primary-500">
      Lost password?
    </a>
  </div>
  <button type="button" on:click={handleLogin} class="w-full"
    >Login to your account</button>
  <!-- <Button type="button" on:click={handleLogin} class="w-full"
      >Login to your account</Button> -->
  <Button type="submit" class="w-full">Google</Button>
  <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
    Not registered? <a
      href="/"
      class="text-primary-700 hover:underline dark:text-primary-500">
      Create account
    </a>
  </div>
</form>
<!-- </Card> -->
