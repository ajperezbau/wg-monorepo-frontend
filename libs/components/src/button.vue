<template>
  <button>
    <slot>
      {{ text }}
    </slot>
  </button>
</template>

<script setup lang="ts">
  defineProps({
    text: {
      type: String
    }
  });

</script>
