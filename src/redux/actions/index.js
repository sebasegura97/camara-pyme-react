// import { getNews } from '../../firebase/firestore'

// export const addNew = data => ({
//     type: 'ADD_NEW',
//     payload: {
//         data
//     }
// })

export function addNew(data){
    return{
        type: 'ADD_NEW',
        data
    }
}

export function removeNew(id){
    return{
        type: 'DELETE_NEW',
        id
    }
}

export function addFormData(data){
    return{
        type: "ADD_FORM_DATA",
        data
    }
}

export function addMember(data) {
    return {
        type: 'ADD_MEMBER',
        data
    }
}
export function searchMember(cuit) {
    return {
        type: 'SEARCH_MEMBER',
        payload: {
            cuit
        }
    }
}

export function frontendLogin() {
    return {
        type: 'FRONTEND_LOGIN',
    }
}
