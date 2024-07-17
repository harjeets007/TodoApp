This is a Todo app.
which is made in react using useReducer method.

Explanation of the code =>

Use of Reducer => 1. As we use two varibale in array . [task,dispatch] => before that we use set method using useState.

but when we use Reducer we use dispatch instead of setTask.

2.  in use reducer we use three argument here.

    First Thing is reducerFunction (we name it taskReducer) which is a pure js without any side effect having two params first is
    state and second is action.

second Thing is initialState => which is used to define the data type.

Third thing is a localStorage function => which is used to store the data that we put in the list.

How Local storage works => to use the local storage we use, useEffect hook , which is used whenever we open the page.
its work will start. in the useEffect hook i set the local storage by setItem method which take id and its value.
in this id is "text" and in value i convert the tasks to JSON.stringify which means i convert all the data to the string.
Now in useReducer third arugument i take a fucntion which has a variable that get the data by localStorage.getItem
which take the id refered by the setItem.
than we use JSON.parse method which again convert the data into object. thats how a localStorage works.

Now moving to the first thing again our taskReducer is a function which is an another file.
taskReducer have tasks and dispatch. in taskReducer file we use this tasks and action.
action is nothing but all the value that is set in the dispatch function. if we want to
access the value of the dispatch we use action. property. using switch case we use all the type(in dispatch) as the
cases to perform our certain task.
