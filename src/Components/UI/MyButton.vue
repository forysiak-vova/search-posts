<template>
   <button>
    <slot></slot>
   </button>
</template>
<script>
export default {
   name: 'my-button'
}
</script>
<style scoped>
button {
   align-self: flex-end;
   background-color: green;
   color: yellow;
   border: 1px solid transparent;
   padding: 5px 10px;
   cursor: pointer;
   border-radius: 5px;
   min-width: 80px;
}
button:hover{
   background-color:blue
}
</style>