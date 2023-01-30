import getters from "@/store/weatherStatus/getters";
import actions from "@/store/weatherStatus/actions";
import mutations from "@/store/weatherStatus/mutations";
export default {
    namespaced:true,
    state:{
        weatherStatus:{}
    },
    getters,
    actions,
    mutations
}