<template>
<div class="navbar">
   <div class="home" @click="$router.push('/')">Vue.js</div>
         <div>
            <my-button @click="$router.push('/post')" style="margin-right: 10px" to="/post">Пости</my-button>
            <my-button @click="$router.push('/about')" style="margin-right: 10px">Опис</my-button>
            <my-button @click="$router.push('/store')">Store</my-button>
         </div>
</div>
</template>
<script>
export default {
}
</script>
<style>
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
</style>