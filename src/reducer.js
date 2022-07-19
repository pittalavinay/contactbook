const initial=[{name:"vinay",phoneno:"9014633625",email:"vinay@"}]

export default function reducer(state=initial,action)
{
    const{type,payload}=action;
    switch(type){
        case "add":
            return [...state,payload]
            case "remove":
                return state.filter(product=>product!==payload)
         case "search":
            return state.filter(product=>product.name.toLowerCase.includes(payload))
            default:
                return state;
    }
}