<script lang="ts" setup>
import { ref } from 'vue';

const elRef = ref<HTMLElement>()
</script>

<template>
    <div class="table" ref="elRef">
        <div class="table-scroll-clip">
            <table>

            </table>
        </div>
        <div class="table-virtual-panel" style="height: 5000px;"></div>
    </div>
</template>

<style lang="css">
.table {
    scrollbar-width: thin;
    outline: none;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: scroll;
    overflow-anchor: none;
    overscroll-behavior: none;
}

.table-scroll-clip {
    position: sticky;
    contain: strict;
    overflow-anchor: none;
    width: 100%;
    height: 100%;
    border: 1px solid red;
    top: 0;
    left: 0;
}

.table-virtual-panel {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
}

table {
    position: absolute;
    overflow: hidden;
    outline: none;
}
</style>