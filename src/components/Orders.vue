<template>
    <div class="orders">


        <div class="row">

            <div class="col-12">
                <h3 class="header">Order</h3>
                <form action="">
                    <input type="text" name="Name" v-model="order.Name" placeholder="Name">
                    <input type="text" name="Description" v-model="order.description" placeholder="Description">
                    <input type="number" name="Quantity" v-model="order.Quantity" placeholder="quantity">
                    <input type="datetime-local" name="CreatedAt" v-model="order.CreaterdAt" placeholder="">

                    <button type="button" @click="create">Create</button>

                </form>
            </div>

            <div class="col-4" v-for="(order, index) in orders">
                <p>{{order.id}}</p>
                <p>{{order.Name}}</p>
                <p>{{order.Quantity}}</p>
                <p>{{order.Description}}</p>
                <p>{{order.CreatedAt}}</p>
                <p>{{order.Process}}</p>

                <Button>Edit</Button>
                <Button>Delete</Button>
                <Button>Process</Button>



            </div>



        </div>



    </div>
</template>


<script>
    export default {
        name: 'orders',
        data() {
            return {
                order: {}
            }
        },
        computed: {
            orders() {
                return this.$store.state.orders
            }

        },

        methods: {

            create() {

                this.$store.dispatch("addOrder", this.order);
                this.order = {};


            },

            updateOrder() {
                this.$store.dispatch("editOrder", this.editOrder);
            }

        },


        components: {}
    }
</script>


<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>