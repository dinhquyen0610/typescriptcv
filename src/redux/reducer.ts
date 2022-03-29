interface Info {
    name?: string,
    image?: string,
    date?: string,
    job?: string,
    email?: string,
    phone?: string
}
interface Action {
    type: string,
    payload: Info
}
const initState = {
    name: "",
    image: "",
    date: "",
    job: "",
    email: "",
    phone: ""
}
const rootReducer = (state = initState, action: Action) => {
    // console.log(state,action)
    switch (action.type) {
        case "importInfo": 
            {console.log(action)}
            return {
                ...state, ...action.payload
            }
        default: return{...state}

    }

}
export default rootReducer