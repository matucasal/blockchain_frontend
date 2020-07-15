<template>
    <div>
        <el-alert
        title="Transaccion agregada"
        type="success"
        :closable="true"
        v-model="alert_transaction_add"
        >
        </el-alert>
        
        <el-form ref="transaction" :model="form" label-width="120px">
            <el-form-item label="Data">
                <el-input v-model="form.data"></el-input>
            </el-form-item>
        
            <el-form-item>
                <el-button type="primary" @click="onSubmit">Agregar</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            form: {
                data: '',
            },
            alert_transaction_add: false
        }
    },
    methods: {
        onSubmit() {
            console.log('submit!',this.form.data);
            axios
                .post('http://localhost:3000/api/mine' , this.form)
                    .then(response => {
                        console.log(response)
                        this.alert_transaction_add = true
                    })
        }
    }
}

</script>
