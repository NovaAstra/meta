<script lang="ts" setup>
import { onMounted, ref } from 'vue';

const root = ref<HTMLElement>()

onMounted(() => {
   let scrollHeight = root.value!.scrollHeight;
   console.log(scrollHeight);

   root.value!.addEventListener("scroll", () => {
      console.log(root.value!.scrollTop)
   })
})
</script>

<template>
   <div class="root" ref="root">
      <div class="clip">
         <table border="1" cellspacing="0">
            <tr v-for="ridx in 500" :key="ridx">
               <td>{{ ridx }}</td>
            </tr>
         </table>
      </div>

      <div class="scroll"></div>
   </div>
</template>

<style lang="css">
.root {
   border: 1px solid red;
   width: 500px;
   height: 500px;
   overflow: auto;
   position: relative;
}

.clip {
   position: sticky;
   contain: strict;
   overflow-anchor: none;
   width: 100%;
   height: 100%;
   top: 0;
   left: 0;
}

.scroll {
   position: absolute;
   top: 0;
   left: 0;
   right: 0;
   height: 11502px;
}
</style>