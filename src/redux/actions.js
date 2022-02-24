import store from '../index'

export default class Actions{
    static async create(data){
        store.dispatch({type: 'create', payload: data})
    }

    static async delete(data){
        store.dispatch({type: 'delete', payload: data})
    }

    static async edit(data){
        store.dispatch({type: 'edit', payload: data})
    }
}