<script lang="ts" setup>

</script>

<template>
   <div class="root">
      <table border="1">
         <tr v-for="ridx in 500" :key="ridx">
            <td v-for="cidx in 30" :key="cidx">{{ 100 * (ridx - 1) + cidx }}</td>
         </tr>
      </table>
   </div>
</template>

<style lang="css">
.root {
   width: 500px;
   height: 500px;
   border: 1px solid red;
   overflow: auto;
}

table{
   border-collapse: collapse;
}

td{
   max-width: 20px !important;
   border: 1px solid blue;
   word-wrap: break-word;
}
</style>