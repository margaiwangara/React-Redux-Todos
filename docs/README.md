## Creating A Simple Todo List With React and Redux

<p>As part of my recent interest in React, I watched a tutorial on creating a simple application using Redux in vanilla javascript First got acquainted with the basics of redux before finally embarking on creating a simple todo app using first redux in vanilla js then applying it in React.
Understanding redux basically involves the codes below:</p>
<h3>Creating a Redux app in vanilla js - Without React</h3>
<p>Personally, I believe that in order to learn Redux properly, you have to start from the basics. Before using it with React, one should try it out on its own, try to create an app using only redux in a .js file and the markup in a .html file. Once one understands stuff like stores, actions and how they work, the same concept is applied in React.</p>
<pre>
<code>
    //first you import the redux cdn, check out online you can find a bunch
    //then declare the initial state
    //under normal circumstances, we would just ignore declaring the initial state but this will involve //some more error checking. Codes below show the two ways this can be handled
    //declare initial state
    const initialState = {
        todos:[]
    };

    //reducer function
    function rootReducer(state=initialState, action) //if no initial state is declared, we have to write conditionals
    {
        //if no state is defined
        if(state === undefined){
            //do stuff here
        }

        //but here we insert our initial state in the parameters
        //then switch through the action to get the action, code for actions later on
        switch(action.type){
            case "ADD_TODOS":
                //Object.assign() can also be used, duplicate state, don't change directly
                var newState = { ...state };
                return {
                    ...newState,
                    todos:[...newState, {task: action.task}]
                };
            default:
                //if no action.type value is passed return initial state
                return state;
        }

    }
    //then create a store
    const store = createStore(rootReducer)//pass in a function here, a reducer. To use reduxdevtools                                           //pass second parameter, found in docs

    //actions basically get the type of user_defined actions, something the user wants todo and gives it //an identifying name, eg. ADD_TODOS, REMOVE_TODOS, UPDATE_TODOS, EAT_CHICKEN etc...
    //defined as follows
    store.dispatch({type: "ADD_TODOS", task:"Go To Market"}); //after the type, the user can add                                                                  //variables based on form data or any data

    //to view the final state call getState();
    store.getState();//this displays the value of the state

    //using this same concept, we can apply it to react

</code>
</pre>
<strong>NB: </strong>Documentation of my application with React still in progress. Will be added later.
