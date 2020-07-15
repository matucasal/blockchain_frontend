<template>
    <el-row>
        <el-col :span="12">
            <el-card class="box-card" header="Estado actual de la cadena">
                <div v-for="block in blockchain" :key="block" class="text item">
                    - Data: {{ block.data }}
                    - Hash: {{ block.hash }}  
                </div>
            </el-card>
        </el-col>
        <el-col :span="12">   
            <el-card class="box-card" header="Agregar transacción">
                <FormAddTransaction></FormAddTransaction>
            </el-card>
        </el-col>
    </el-row>
        

     
</template>


<style>
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    width: 480px;
  }
</style>


<script>
import axios from 'axios';
import FormAddTransaction from './FormAddTransaction'

export default {
    name: "App",
    components: {
        FormAddTransaction
    },
    data() {
        return {
            blockchain: ''
        }
    },
    created() {
        this.interval = setInterval(() => this.getBlockchain(), 4000);
    },
    //En el mounted de la aplicacion cargo el usuario del login
    mounted() {
        console.log("monte")
        //TODO: Por ahora no hago nada aca
        //Apenas se monta la aplicacion, trato de traer la data del usuario
        //store.dispatch('getUser')
    },
    methods: {
        getBlockchain(){
            axios
            .get('http://localhost:3000/api/blocks' , this.form)
                .then(response => {
                    console.log(response.data)
                    this.blockchain = response.data
                })
        }
    }

}
</script>
