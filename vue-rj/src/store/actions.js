import {HEAD} from './types.js'

export default {
    showHead:({commit})=>{
        commit(HEAD.showHead)
    },
    hideHead:({commit})=>{
        commit(HEAD.hideHead)
    }
}