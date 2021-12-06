<template>
    <button v-bind="$attrs" :class ="['dark', 'baseButton']">{{buttonText}}</button>
</template>

<script>
export default {
    props:{
        buttonText:{
            type:String,
            default:()=>"label",
        },
        dark:{
            type:Boolean,
            default:()=>true,
        },
    },

};
</script>


<style scoped>
.baseButton{
    padding: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
.dark{
    background: black;
    color: white;
}
</style>
