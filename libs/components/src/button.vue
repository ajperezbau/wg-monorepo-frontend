<template>
  <button>
    <slot>
      {{ capitalize(text) }}
    </slot>
  </button>
</template>

<script setup lang="ts">
  import { capitalize } from 'wg-monorepo-frontend-utils';

  defineProps({
    text: {
      type: String
    }
  });

</script>
