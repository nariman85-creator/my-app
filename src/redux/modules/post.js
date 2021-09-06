const modulName='posts';
const GET_POSTS=`${modulName}/GET_POSTS`;
const DELETE_POST=`${modulName}/DELETE_POST`;


const defaultState={
    posts:[],
};
export default(state=defaultState,{type,peyload})=>{
    switch(type){
        case GET_POSTS:
            return{
                ...state,
                posts:peyload
            };
            case DELETE_POST:
                return{
                   ...state,posts:state.posts.filter(item=>item.id!=peyload.id)
                };
            default:
            return state;
    }
};
export const getPosts=()=>async(dispatch)=>{
    try{
   await fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((data) =>dispatch({type:GET_POSTS,peyload:data}) );
    }catch(e){
        console.log(e)

    }
};
export const deletePost=(id)=>async(dispatch)=>{
    try {
        await fetch(`'https://jsonplaceholder.typicode.com/posts/${id}`,{
            method:'DELETE'
        });
          dispatch({type:DELETE_POST,peyload:{id}}) 

    } catch (error) {
        
    }
}
