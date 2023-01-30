import getters from '@/store/LocationStatus/getters'
import mutations from '@/store/LocationStatus/mutations'
import actions from '@/store/LocationStatus/actions'

export default {
    namespaced: true,
    state: {
        locationState: {},
    },
    getters,
    mutations,
    actions

}