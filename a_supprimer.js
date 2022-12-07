
let datas;

// Fonction Promesse<Datas>
fetch('https://jsonplaceholder.typicode.com/users', {
  method: 'GET'
}).then(res => res.json())
  .then(json => {
    datas = json;
    trucsImportants();
  })
  .catch(err => console.log('Oups !'))

axios.get('https://jsonplaceholder.typicode.com/users')
  .then(res => datas = res.data)
  .catch(err => console.log('Oups'))


function trucsImportants() {
  console.log(datas);
  /// faire des trucs
}

// Fichier service
function getTodos() {
  return axios.get('urltodo');
}

// Fichier composant
async function load() {
  todos = await getTodos();
} // Promesse<Todos[]>

load()
