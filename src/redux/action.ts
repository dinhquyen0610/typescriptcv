interface Info {
    name?: string,
    image?: string,
    date?: string,
    job?: string,
    email?: string,
    phone?: string
}
export const importInfo=(data: Info)=>{
    return {
        type: 'importInfo',
        payload: data
    }
}