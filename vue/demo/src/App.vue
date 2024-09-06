<script setup lang="ts">
import { ref, onMounted } from 'vue';

const viewport = ref()

onMounted(() => {
   viewport.value.scrollTop = 400
})
</script>

<template>
   <div class="viewport" ref="viewport">
      <table>
         <tr v-for="ridx in 60" :key="ridx">
            <td class="cell" v-for="cidx in 20" :key="cidx">{{ ridx * cidx }}</td>
         </tr>
      </table>
   </div>
</template>

<style lang="css" scoped>
.viewport {
   width: 500px;
   height: 500px;
   overflow: auto;
   border: 1px solid red;
   position: relative;
}

table{
   position: absolute;
   top: 0;
}

.cell {
   width: 100px;
   height: 50px;
   border: 1px solid blue;
}
</style>
