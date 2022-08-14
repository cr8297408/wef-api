fetch('http://localhost:3000/api/v1/perfil')
  .then(response => response.json())
  .then(data => console.log(data));

console.log('hola');