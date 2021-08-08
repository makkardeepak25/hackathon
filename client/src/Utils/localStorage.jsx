export function saveData(key,data){
    sessionStorage.setItem(key,JSON.stringify(data))
}
export function loadData(key){
    try{
        let data =  sessionStorage.getItem(key)
        data = JSON.parse(data)
        return data
    }catch(err){
        return undefined
    }
}