var todoList = {
  todos: [],
  
   //add a new "displayTodo" method
   displayTodos: function() {
     if (this.todos.length === 0){
     console.log('Your Todo List is empty');
       
     }
     
     else {
            console.log('My Todos are:');
     }
              for (i=0; i<this.todos.length; i++){
                  if (this.todos[i].completed === true){
                  console.log('(x)', this.todos[i].todoText);
      
    }
      else {
            console.log('()', this.todos[i].todoText);
      }
                
              } 
    },
    
  //add a new "addTodo"method
  addTodo: function(todoText) {
    this.todos.push ({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },

    //add a new "changeTodo" method
    changeTodo: function(position, todoText) {
      this.todos[position].todoText= todoText;
      this.displayTodos();
    },
    
    //add a new "deleteTodo" method
    deleteTodo: function(position) {
      this.todos.splice(position, 1);
      this.displayTodos();
    },
    
    //adding new method "toggleComlpeted"
    toggleCompleted: function(position) {
      var todo = this.todos[position];
      todo.completed = !todo.completed;
      this.displayTodos();
    },
    
    // adding new method "toggleAll"
    toggleAll: function() {
      var totalTodos = this.todos.length;
      var completedTodos = 0;
      
      // i should get the completedTodos value. So, that i can equate
        for (i=0; i<totalTodos; i++){
          if (this.todos[i].completed === true){
           completedTodos++; 
          }
        }
      
    // case-1 { should toggle everything done to undone or vice-versa }
        if (completedTodos === totalTodos){
          for (var i = 0; i < totalTodos; i++){
            this.todos[i].completed = false;
             }  
        } 
          else { 
            for (var i = 0; i < totalTodos; i++) {
              this.todos[i].completed = true;
            }
          }
      this.displayTodos();
    }
    };
    
  // //  1. we want access Display Todos
  //   var displayTodosButton = document.getElementById("displayTodosButton");
  //   displayTodosButton.addEventListener('click', function(){
  //     todoList.displayTodos();
  //   });
      
  //   // 2. functionality of DispayTodoButton
  //   var toggleAllButton = document.getElementById("toggleAllButton");
  //   toggleAllButton.addEventListener('click', function(){
  //     todoList.toggleAll();
  //   });
    
    var handlers = {
      
      displayTodos: function() {
        todoList.displayTodos();
      },
      
      toggleAll: function() {
        todoList.toggleAll();
      },
      
      addTodo: function() {
        var addTodoTextInput = document.getElementById("addTodoTextInput");
        todoList.addTodo(addTodoTextInput.value);
        addTodoTextInput.value= '';
      },
      
      changeTodo: function() {
        var changeTodoPositionInput = document.getElementById("changeTodoPositionInput"); 
        var changeTodoTextInput = document.getElementById("changeTodoTextInput");
        todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
        changeTodoPositionInput.value = '';
        changeTodoTextInput.value = '';
      },
      
      deleteTodo: function() {
        var deleteTodoPositionInput = document.getElementById("deleteTodoPositionInput");
        todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
        deleteTodoPositionInput.valueAsNumber = "";
      },
      toggleCompleted: function(){
        var toggleTodoPositionInput = document.getElementById("toggleTodoPositionInput");
        todoList.toggleCompleted(toggleTodoPositionInput.valueAsNumber)
        toggleTodoPositionInput.valueAsNumber = "";
      }
      
    }