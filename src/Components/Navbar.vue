<template>
<div class="navbar">
   <div class="home" @click="$router.push('/')">Vue.js</div>
         <div @click="click">
            <my-button @click="$router.push('/post'), activeBtn = 'btn1' "  v-bind:class="{active: activeBtn === 'btn1'}" style="margin-right: 10px">Пости</my-button>
            <my-button @click="$router.push('/about')" v-on:click="activeBtn = 'btn2'" v-bind:class="{active: activeBtn === 'btn2'}" style="margin-right: 10px">Опис</my-button>
            <my-button @click="$router.push('/store')" v-on:click="activeBtn = 'btn3'" v-bind:class="{active: activeBtn === 'btn3'}" style="margin-right: 10px">Store</my-button>
            <my-button @click="$router.push('/composition')" v-on:click="activeBtn = 'btn4'" v-bind:class="{active: activeBtn === 'btn4'}" style="margin-right: 10px">composition</my-button>
         </div>
</div>
</template>
<script>

export default {
   data() {
      return {
         activeBtn: '',
      }
   },
}
</script>
<style scoped>
.navbar{
   height: 70px;
   background-color: grey;
   display: flex;
   box-shadow: 2px 2px 4px gray;
   align-items: center;
   justify-content: space-around;
}
.home{
   cursor: pointer;
}
.home:hover{
   color:white;
}
.active {
   background-color: blue;
}
.activeColor{
   color:white;
}
</style>