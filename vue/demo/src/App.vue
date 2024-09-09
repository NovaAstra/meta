<script lang="ts" setup>
import Table from "./core/components/Table.vue"

</script>

<template>
   <div class="root">
      <Table :rows="100" :cols="100" />
   </div>
</template>

<style lang="css">
.root {
   width: 500px;
   height: 500px;
}
</style>