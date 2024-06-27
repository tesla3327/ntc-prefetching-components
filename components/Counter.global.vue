<template>
  <div class="flex space-x-4">
    <button
      class="border rounded-md py-2 px-4 font-medium bg-slate-50 hover:bg-slate-100 transition-colors"
      @click="decrement"
    >
      -
    </button>
    <p>{{ count }}</p>
    <button
      class="border rounded-md py-2 px-4 font-medium bg-slate-50 hover:bg-slate-100 transition-colors"
      @click="increment"
    >
      +
    </button>
  </div>
</template>

<script setup>
const count = ref(0);

const increment = () => {
  count.value++;
};

const decrement = () => {
  count.value--;
};
</script>
