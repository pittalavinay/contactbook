export const add=(name)=>async dispatch=>
{
    dispatch(
        {
            type:"add",
            payload:name
        }
    )
}
export const remove=(value)=>async dispatch=>
{
    dispatch(
        {
            type:"remove",
            payload:value
        }
    )
}
export const search=(value)=>async dispatch=>
{
    dispatch(
        {
            type:"search",
            payload:value
        }
    )
}
