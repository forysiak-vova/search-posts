<template>
   <input 
   :value="modelValue"
   @input="updateInput"
   class="input" 
   type="text"/>
</template>
<script>
export default {
   name: 'my-input',
   props:{
      modelValue: [String, Number],
   }, 
   methods: {
      updateInput(event) {
         this.$emit('update:modelValue', event.target.value)
         // console.log(event)
      }
   }
}
</script>
<style scoped>
   .input {
      margin-top: 10px;
      padding: 10px 15px;
   }
</style>