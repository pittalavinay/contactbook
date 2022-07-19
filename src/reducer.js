const initial=[{name:"vinay",phoneno:"9014633625",email:"vinay@"}]

export default function reducer(state=initial,action)
{
    const{type,payload}=action;
    switch(type){
        case "add":
            return [...state,payload]
            default:
                return state;
    }
}