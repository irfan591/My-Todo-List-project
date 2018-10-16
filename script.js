var todoList = {
  todos: [],

  //add a new "addTodo"method
  addTodo: function(todoText) {
    this.todos.push ({
      todoText: todoText,
      completed: false
    });
  },

    //add a new "changeTodo" method
    changeTodo: function(position, todoText) {
      this.todos[position].todoText= todoText;
    },
    
    //add a new "deleteTodo" method
    deleteTodo: function(position) {
      this.todos.splice(position, 1);
    },
    
    //adding new method "toggleComlpeted"
    toggleCompleted: function(position) {
      var todo = this.todos[position];
      todo.completed = !todo.completed;
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
    }
    };
 
    var handlers = {
      toggleAll: function() {
        todoList.toggleAll();
        view.displayTodos();
      },
      
      addTodo: function() {
        var addTodoTextInput = document.getElementById("addTodoTextInput");
        todoList.addTodo(addTodoTextInput.value);
        addTodoTextInput.value= '';
        view.displayTodos();
      },
      
      changeTodo: function() {
        var changeTodoPositionInput = document.getElementById("changeTodoPositionInput"); 
        var changeTodoTextInput = document.getElementById("changeTodoTextInput");
        todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
        changeTodoPositionInput.value = '';
        changeTodoTextInput.value = '';
        view.displayTodos();
      },
      
      deleteTodo: function() {
        var deleteTodoPositionInput = document.getElementById("deleteTodoPositionInput");
        todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
        deleteTodoPositionInput.valueAsNumber = "";
        view.displayTodos();
      },
      toggleCompleted: function(){
        var toggleTodoPositionInput = document.getElementById("toggleTodoPositionInput");
        todoList.toggleCompleted(toggleTodoPositionInput.valueAsNumber)
        toggleTodoPositionInput.valueAsNumber = "";
        view.displayTodos();
      }     
    };
    
    var view = {
      
      displayTodos: function() {
        
        var todosUl = document.querySelector('ul');
          todosUl.innerHTML = '';
          
        for (i=0; i<todoList.todos.length; i++) {
        
          var todoLi = document.createElement('li');
          var todo = todoList.todos[i];
          var todoTextWithCompletion = '';
          
          if (todo.completed === true){
            todoTextWithCompletion = '[ x ] ' + todo.todoText;
    
            }
          
           else {
              todoTextWithCompletion = '[  ] ' + todo.todoText;
            }
          
              todoLi.textContent = todoTextWithCompletion;
              todosUl.appendChild(todoLi);
    
        }
      
      }
      
    }