import reducer from '../reducers/course_reducer';
describe ('Reducer ',()=>
{it ('Get courses',()=>
{
    let state={
        articles:[]
    }
    state = reducer(state,{
        action: "GET_COURSES"
    })
    expect (state).toEqual(
        {
            
            "articles":[]


        
        })
        
})
it ('Post Courses',()=>
{
    let state={
        articles:[]
    }
    state = reducer(state,{
        action: "POST_COURSES"
    })
    expect (state).toEqual(
        {
            
            "articles":[]


        
        })
})
})