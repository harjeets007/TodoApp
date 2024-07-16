import React, { act, useEffect, useReducer } from "react";
import AddTask from "./AddTask";
import MapTask from "./MapTask";
import { taskReducer } from "./taskReducer";

const TodoAppReducer = () => {
  const [tasks, dispatch] = useReducer(taskReducer, [], () => {
    const localData = localStorage.getItem("task");
    return localData ? JSON.parse(localData) : [];
  });

  
  const handleAdd = (task) => {
    dispatch({ type: "added", id: Date.now(), text: task });
  };

  const handleUpdate = (task) => {
    dispatch({ type: "update", task: task });
  };

  const handleDelete = (taskid) => {
    dispatch({ type: "delete", id: taskid });
  };

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(tasks));
  }, [tasks]);

  return (

    <div className="bg-cyan-600 h-screen w-full flex justify-center items-center">
    <div className=" bg-cyan-400 w-2/5 rounded-md">
    <div className=" w-[90%] m-auto my-6 ">
    <h1 className="text-5xl text-center py-8">Todo List</h1>
    <hr className="mb-5" />
      <AddTask onAddTask={handleAdd} />
      <MapTask tasks={tasks} onUpdatae={handleUpdate} onDelete={handleDelete} />
    </div>
    </div>
    </div>
  );
};

export default TodoAppReducer;



// diff b/w useState & useReducer

// use reduer uses dispatch method to dispatch action objects. & use state uses setter fn to set state.
// use state only takes one arg of initial state but use reducer takes reducerfn as well as initialState.

//  we have encountered with words like action & reducer fn . what exactly are these things?

// action object=> It is a plain js object having type & data inside it.
// reducer fn => It is pure js fn without any side effects having two params first is state & second is
// action object.





//Use of Reducer => 1. As we use two varibale in array . [task,dispatch] => before that we use set method using useState.

// but when we use Reducer we use dispatch instead of setTask.


// 2. in use reducer we use three argument here. 

   // First Thing is reducerFunction (we name it taskReducer) which is a pure js without any side effect having two params  first is
  //  state and second is action.


  // second Thing is initialState => which is used to define the data type.


  
  // Third thing is a localStorage function => which is used to store the  data that we put in the list.

  // How Local storage works  => to use the local storage we use, useEffect hook , which is used whenever we open the page.
  // its work will start. in the useEffect hook i set the local storage by setItem method which take id and its value.
  // in this id is "text" and in value i convert the tasks to JSON.stringify which means i convert all the data to the string.
 //  Now in useReducer third arugument i take a fucntion which has a variable that get the data by localStorage.getItem
 // which take the id refered by the setItem.
 // than we use JSON.parse method which again convert the data into  object. thats how a localStorage works.


 
 // Now moving to the first thing again our taskReducer is a function which is an another file.
 //taskReducer have tasks and dispatch. in taskReducer file we use this tasks and  action.
 // action is nothing but all the value that is set in the dispatch function. if we want to 
 // access the value of the dispatch we use action.  property. using switch case we use all the type(in dispatch) as the 
 // cases to perform our certain task.



