import {HEAD,CustomComponents} from './types.js'

export default {
    showHead:({commit})=>{
        commit(HEAD.showHead)
    },
    hideHead:({commit})=>{
        commit(HEAD.hideHead)
    },
    showLoading:({commit})=>{
        commit(CustomComponents.showLoading)
    },
    hideLoading:({commit})=>{
        commit(CustomComponents.hideLoading)
    }
}