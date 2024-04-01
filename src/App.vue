<script setup>
import Button from './components/Button.vue';
import Alert from './components/Alert.vue';
</script>

<template>
  <main>
    <Button color="success" isSecondary="false" type="left-icon-text" action="action" />
    <Alert color="info" type="all" action="Action" actionSecondary="Action" title="A short descriptive header" content="This is a paragraph of information with additional supporting detail or links to help the user understand what they should do."/>
  </main>
</template>

<style scoped>

</style>
