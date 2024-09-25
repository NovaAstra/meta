<script lang="ts" setup>
import { List } from "./List"
</script>

<template>
   <div class="root">
      <List />
   </div>
</template>

<style>
.root {
   width: 500px;
   height: 500px;
   border: 1px solid red;
   position: relative;
}

.list-root {
   overflow: auto;
   position: absolute;
   width: 100%;
   height: 100%;
}

.list-scroll-clip {
   position: sticky;
   contain: strict;
   overflow-anchor: none;
   width: 100%;
   height: 100%;
   top: 0px;
   left: 0px;
}
</style>