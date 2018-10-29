<style scoped lang="less">
    @import 'styles/common.less';
</style>
<template>
    <div class="numCounter" :style='numCounterStyle' ref="numCounter">
        <b v-for="(item,index) in counterArray" :style='numStyle' :class="item"></b>
    </div>
</template>
<script>
import Vue from 'vue'
    export default {
        name:'vueFlippingCounter',
        data () {
            return {
                counterOptions:{},
                counterArray:['d0'],
                numCounterStyle:{
                    fontSize:30,
                },
                numStyle:{
                    width:40,
                }
            }
        },
        props:{
            options:{
                type:Object
            },
            value:{
                default:()=>{
                    return 0;
                }
            }
        },
        methods: {
            init:()=>{
                let that = this;
                this.counterOptions =  Object.assign({
                    length:10,//位数

                },this.options)
                // console.log("width" ,this.$refs.numCounter)
                // this.numCounterStyle.zoom =  this.$refs.numCounter.offsetWidth / (50*this.counterOptions.length);
            }
        },
        watch:{
            options:{
                deep:true,
                handler:function(options,oldOptions){

                }
            },
            value:{
                deep:true,
                handler:function(value,oldValue){
                    let that = this;

                    let arr = (value+'').split('');
                    let arrLen = arr.length;
                    let counterLen = this.counterArray.length
                    this.counterArray.splice(arr.length)
                    this.numCounterStyle.fontSize =  (this.$refs.numCounter.offsetWidth / (arrLen +0.3)) + 'px';
                    this.numStyle.width = (this.$refs.numCounter.offsetWidth / arrLen) + 'px';
                    arr.forEach((item,i)=>{
                        setTimeout(()=>{
                            that.$set(that.counterArray,i,'d'+ arr[i] || 0);
                        },(arrLen-i)*250)
                    })
                }
            }
        },
        mounted(){
            let that = this;
            this.$nextTick(() => { 
                this.init();
            });    
            

        }
    }
</script>
