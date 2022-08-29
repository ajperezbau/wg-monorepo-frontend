<template>
  <lib-button data-test-id="button" :text="message" @click="showMessage()"/>
</template>

<script setup lang="ts">
  import { Button as LibButton } from 'wg-monorepo-frontend-components';
  import { MESSAGES } from 'wg-monorepo-frontend-messages';
  import { capitalize } from 'wg-monorepo-frontend-utils';

  const message = MESSAGES.helloWorld;

  const showMessage = (): void => {
    alert(capitalize(message));
  };

</script>
