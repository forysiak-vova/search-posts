<template>
   <div class="dialog" v-if="show" @click="hideDialog">
      <div @click.stop class="content">
         <slot></slot>
      </div>
   </div>
</template>
<script>
import toggleMixin from '@/mixins/toggleMixin'
   export default {
   name: 'my-dialog',
   mixins: [toggleMixin],
   //    props: {
   //       show: {
   //          type: Boolean,
   //          default: false,
   //       }
   // },
   // methods: {
   //    hideDialog() {
   //       this.$emit('update:show', false)
   //    }
   //    }
   mounted() {
      console.log("mounted in dialog");
   },
}  

</script>
<style scoped>
.dialog{
   top: 0;
   right: 0;
   bottom: 0;
   left: 0;
   background-color: rgba(0,0,0, 0.5);
   position: fixed;
   display: flex;
}
.content{
   background-color: white;
   padding: 25px 20px;
   border-radius: 12px;
   min-height: 50px;
   min-width: 300px;
   margin: auto;
}
</style>