fetch('https://jsonplaceholder.typicode.com/todos', {mode: 'cors'})  
  .then(function(response) {  
    return response.text();  
  })  
  .then(function(text) {  
    document.write('Request successful', text);  
  })  
  .catch(function(error) {  
    log('Request failed', error)  
  });
