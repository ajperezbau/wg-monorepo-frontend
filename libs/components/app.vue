<template>
  <lib-button :text="message" @click="showMessage()"/>
</template>

<script setup lang="ts">
  import { Button as LibButton } from './src';

  const message = 'hello, World!';

  const showMessage = (): void => {
    alert(message);
  };

</script>
