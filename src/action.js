export const add=(name)=>async dispatch=>
{
    dispatch(
        {
            type:"add",
            payload:[name]
        }
    )
}