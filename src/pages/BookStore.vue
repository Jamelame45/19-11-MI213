<template>
    <Navbar />
    <section class="about">
        <h1 class="heading"> book <span>store</span></h1>
        <a-table :columns="columns" :data-source="data" :rowKey="(record)=> record => record.id">
        </a-table>
    </section>
    <section class="about">
        <h1 class="heading"> book <span>store</span> </h1>
        <!-- Table Here -->

        <!-- Button Here -->

    </section>

    <!-- Modal Here-->


</template>

<script>
import Navbar from "../components/Navbar.vue";
import axios from 'axios'
import { Modal } from 'ant-design-vue';
const columns = [
    {
        title: "Id" ,
        dataIndex: "id",
        key: "id",
        width: 65,
    },
    {
        title: "ชื่อหนังสือ",
        dataIndex: "name",
        key: "name",
    },
    {
        title: "ราคา",
        dataIndex:"name",
        key: "price",
        align: 'right'
    },
    {
        title:"Action",
        slots: {customRender: "action"},
        key: "id",
        align: 'center',
        width:150,
    },
];
export default {
    components: { Navbar },
    methods: {
        
    },
    data() {
        return {

        }
    },
    beforeMount() {

    }
}
</script>

<style>

</style>