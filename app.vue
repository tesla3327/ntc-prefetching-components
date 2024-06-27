<template>
  <div class="prose m-auto max-w-xl py-8">
    <h1>Prefetching Components</h1>

    <p>
      When we add a <code>Lazy*</code> prefix to our
      components we can load it async, on-demand, by using a
      <code>v-if</code>.
    </p>
    <p>
      However, we can also trigger this loading at any time,
      <em>before</em> we even need the component. This is
      useful when the component is large and will take time
      to load.
    </p>
    <p>
      If you click "Show Counter", we load the lazy
      component immediately before rendering it to the page.
    </p>
    <p>
      However, if you first click "Fetch Counter", we use
      <code>prefetchComponents</code> to load the component
      first. Then, when you click "Show Counter" no fetch
      request is made, since we already have the component
      loaded!
    </p>
    <p>
      You can verify this by checking the network tab in the
      dev tools (throttle to slow 3G to see the effect
      better).
    </p>

    <hr />

    <div class="flex items-center space-x-4 mb-4">
      <button
        type="button"
        :disabled="counterFetched"
        @click="fetchCounter"
        class="border rounded-md py-2 px-4 font-medium transition-colors"
        :class="{
          'cursor-not-allowed bg-slate-200 text-slate-400':
            counterFetched,
          'bg-slate-50 hover:bg-slate-100': !counterFetched,
        }"
      >
        Fetch Counter
      </button>
      <span
        v-if="counterFetched"
        class="font-bold text-green-600"
      >
        Counter is being fetched...
      </span>
    </div>

    <!-- Will load Counter if not loaded already -->
    <button
      type="button"
      class="border rounded-md py-2 px-4 font-medium bg-slate-50 hover:bg-slate-100 transition-colors"
      @click="
        showCounter = !showCounter;
        counterFetched = true;
      "
    >
      {{ showCounter ? 'Hide' : 'Show' }} Counter
    </button>

    <hr />

    <!-- Must use Lazy prefix or component will be loaded on page load -->
    <LazyCounter v-if="showCounter" />
  </div>
</template>

<script setup>
const showCounter = ref(false);
const counterFetched = ref(false);

async function fetchCounter() {
  counterFetched.value = true;
  // Can also use preloadComponents
  await prefetchComponents('Counter');
}
</script>
