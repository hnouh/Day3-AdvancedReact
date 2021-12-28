import { incCounter, decCounter, resetCounter } from "../reducers/counter";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../reducers/posts";
import { useEffect, useState } from "react";
import axios from "axios";

const ReduxEx = () => {
  const dispatch = useDispatch();
  // const [posts,setPosts]=useState([])
  // const [loading,setLoading]=useState(true)

  useEffect(() => dispatch(fetchData), []);

  // useEffect (() => {
  //     axios.get('https://jsonplaceholder.typicode.com/posts').then((res)=>{
  //         setPosts(res.data)
  //     })
  //   },[]);

  const state = useSelector((store) => {
    // console.log(store)
    return {
      counter: store.counter.counter,
      posts: store.posts.posts,
    };
  });

  return (
    <>
      <br></br>
      <button onClick={() => dispatch(incCounter(5))}>+</button>
      {/* <button onClick={() => dispatch(incCounter())}>+</button> */}
      <p>{state.counter}</p>
      <button onClick={() => dispatch(decCounter(5))}>-</button>
      <br></br>
      {/* <button onClick={() => dispatch(decCounter())}>-</button> */}
      <br></br>
      <button onClick={() => dispatch(resetCounter())}>Reset Counter</button>
      <br></br>
      <br></br>

      {state.posts.map((post) => {
        return (
          <>
            <h3>{post.userId}</h3>
            <p>{post.body}</p>
          </>
        );
      })}
    </>
  );
};

export default ReduxEx;
