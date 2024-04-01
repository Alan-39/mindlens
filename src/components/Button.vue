<script setup>
defineProps(['type', 'color', 'action', 'isSecondary']);
</script>

<template>
  <div class="flex inline-flex hover:shadow-lg rounded-md" :class="{ 'bg-orange-30 hover:bg-orange-40': color == 'info' && isSecondary == 'false' },
    { 'border border-orange-90 text-orange-90 bg-white': color == 'info' && isSecondary == 'true' }, { 'bg-red-80 text-white': color == 'error' && isSecondary == 'false' },
    { 'border border-red-80 text-red-80 bg-white': color == 'error' && isSecondary == 'true' }, { 'bg-orange-90 text-white': color == 'warning' && isSecondary == 'false' },
    { 'border border-orange-90 text-orange-90 bg-white': color == 'warning' && isSecondary == 'true' }, { 'bg-green-80 text-white': color == 'success' && isSecondary == 'false' },
    { 'border border-green-80 text-green-80 bg-white': color == 'success' && isSecondary == 'true' }">

    <div class="inline-flex px-6 py-2" v-if="type == 'right-icon-text'">
      <span class="text-base font-semibold px-1">{{ action }}</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
        class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M5 12l16 0" />
        <path d="M15 18l6 -6" />
        <path d="M15 6l6 6" />
      </svg>
    </div>
    <div class="inline-flex px-6 py-2 " v-if="type == 'left-icon-text'">
      <svg v-if="isSecondary == 'false'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
        class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M5 12l16 0" />
        <path d="M15 18l6 -6" />
        <path d="M15 6l6 6" />
      </svg>
      <svg v-if="isSecondary == 'true'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
        class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M15 6l-6 6l6 6" />
      </svg>
      <span class="text-base font-semibold px-1">{{ action }}</span>
    </div>
    <div class="inline-flex p-2" v-if="type == 'icon-only'">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
        class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M5 12l16 0" />
        <path d="M15 18l6 -6" />
        <path d="M15 6l6 6" />
      </svg>
    </div>
    <div class="inline-flex px-6 py-2" v-if="type == 'text-only'">
      <span class="text-base font-semibold px-1">{{ action }}</span>
    </div>

  </div>
</template>
