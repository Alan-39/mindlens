<script setup>
import Button from './Button.vue';

defineProps(['title', 'content', 'type', 'color', 'action', 'actionSecondary']);
</script>

<template>
  <div class="border rounded" :class="{ 'border-blue-60 bg-blue-00': color == 'info' },
    { 'border-red-80 bg-red-00': color == 'error' },
    { 'border-orange-90 bg-orange-05': color == 'warning' },
    { 'border-green-80 bg-green-00': color == 'success' }" style="max-width: 720px;">
    <div class="flex" :class="type == 'content-only' ? 'p-3' : 'p-6'">
      <div class="pr-3">
        <svg v-if="color == 'info'" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"
          fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-info-circle text-blue-60">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path
            d="M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm0 9h-1l-.117 .007a1 1 0 0 0 0 1.986l.117 .007v3l.007 .117a1 1 0 0 0 .876 .876l.117 .007h1l.117 -.007a1 1 0 0 0 .876 -.876l.007 -.117l-.007 -.117a1 1 0 0 0 -.764 -.857l-.112 -.02l-.117 -.006v-3l-.007 -.117a1 1 0 0 0 -.876 -.876l-.117 -.007zm.01 -3l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z" />
        </svg>
        <svg v-if="color == 'error'" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"
          fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-alert-circle text-red-80">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path
            d="M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm.01 13l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm-.01 -8a1 1 0 0 0 -.993 .883l-.007 .117v4l.007 .117a1 1 0 0 0 1.986 0l.007 -.117v-4l-.007 -.117a1 1 0 0 0 -.993 -.883z" />
        </svg>
        <svg v-if="color == 'warning'" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"
          fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-alert-triangle text-orange-90">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path
            d="M12 1.67c.955 0 1.845 .467 2.39 1.247l.105 .16l8.114 13.548a2.914 2.914 0 0 1 -2.307 4.363l-.195 .008h-16.225a2.914 2.914 0 0 1 -2.582 -4.2l.099 -.185l8.11 -13.538a2.914 2.914 0 0 1 2.491 -1.403zm.01 13.33l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm-.01 -7a1 1 0 0 0 -.993 .883l-.007 .117v4l.007 .117a1 1 0 0 0 1.986 0l.007 -.117v-4l-.007 -.117a1 1 0 0 0 -.993 -.883z" />
        </svg>
        <svg v-if="color == 'success'" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"
          fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-circle-check text-green-80">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path
            d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" />
        </svg>
      </div>
      <div class="grow">
        <div class="flex items-center font-semibold" :class="{ 'h-full': type == 'title-only' }, { 'pb-2': type !== 'title-only' }"
          v-if="type == 'all' || type == 'title-content' || type == 'title-only'">{{ title }} </div>
        <div class="flex items-center" :class="{ 'h-full': type == 'content-only' }"
          v-if="type == 'all' || type == 'title-content' || type == 'content-only'">
          {{ content }}
        </div>
        <div class="flex flex-col mt-4 sm:flex-row" v-if="type == 'all'">
          <div class="mr-3">
            <Button :color="color" isSecondary="true" type="text-only" :action="actionSecondary"></Button>
          </div>
          <div>
            <Button :color="color" isSecondary="false" type="text-only" :action="action"></Button>
          </div>
        </div>
      </div>
      <div class="pl-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
          class="icon icon-tabler icons-tabler-outline icon-tabler-x">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M18 6l-12 12" />
          <path d="M6 6l12 12" />
        </svg>
      </div>
    </div>



  </div>
</template>
