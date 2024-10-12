<script setup>
import { PhPhone } from "@phosphor-icons/vue";

const { data } = await useAsyncData("schedule", () =>
  queryContent("/schedule").findOne()
);
</script>

<template>
  <head>
    <title>Hack WashU - Schedule</title>
  </head>
  <div class="flex justify-center">
    <div class="prose prose-lg mt-10 text-center">
      <h1 class="text-center">Event Schedule 📆</h1>
      <p class="text-center">
        This schedule will be updated as the event progresses.
      </p>
      <ContentRenderer :value="data" />
    </div>
  </div>
</template>
