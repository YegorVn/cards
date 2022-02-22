import store from '../index'

export default class Actions{
    static async get(){
        store.dispatch({type: 'get'})
    }
    
    static async create(data){
        store.dispatch({type: 'create', payload: data})
        Actions.get()
    }

    static async delete(data){
        store.dispatch({type: 'delete', payload: data})
        Actions.get()
    }

    static async edit(data){
        store.dispatch({type: 'edit', payload: data})
        Actions.get()
    }
}