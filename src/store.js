import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
// import db from "//localhost:5001/api";

let api = axios.create({
  baseURL: "//localhost:5001/api/orders",
  timeout: 3000
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    orders: []
  },
  mutations: {
    setOrders(state, orders) {
      state.orders = orders;
    }
  },
  actions: {
    getAllOrders({ commit, dispatch }) {
      api
        .collection("orders")
        .get()
        .then(querSnapShot => {
          let orders = [];
          querySnapshot.forEach(doc => {
            let order = doc.data();
            order.id = doc.id;
            orders.push(order);
          });
          commit("setOrders", orders);
        });
    },

    addOrder({ commit, dispatch }, order) {
      api
        .collection("orders")
        .add(order)
        .then(res => {
          console.log(res);
          dispatch("getAllOrders");
        });
    },

    editOrder({ commit, dispatch }, order) {
      api
        .put("orders/" + orders.id, order)
        .then(res => {
          console.log(res);
          dispatch("getAllOrders");
        })
        .catch(err => {
          console.error(err.response.data.message);
        });
    }

    // processOrder ({commit, dispatch}, order){
    //   api.collection("orders")
    // }
  }
});
