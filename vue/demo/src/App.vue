<script lang="ts" setup>
</script>

<template>
   <div class="root">
   </div>
</template>

<style lang="css">
.root {
   width: 400px;
   height: 400px;
   border: 1px solid red;
   position: relative;
}

.table {
   scrollbar-width: thin;
   outline: none;
   position: absolute;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   overflow: auto;
}

.table-scroll-clip {
   position: sticky;
   contain: strict;
   overflow-anchor: none;
   width: 100%;
   height: 100%;
   top: 0;
   left: 0;
}

table {
   position: absolute;
   overflow: hidden;
   color: #666;
   outline: none;
}

.table-virtual-panel {
   position: absolute;
   top: 0;
   left: 0;
   right: 0;
   pointer-events: none;
}
</style>