const API_URL = 'http://192.168.1.6:3000/api/personagens';


export async function listarPersonagens() {

  const resposta = await fetch(API_URL);

  if (!resposta.ok) {
    throw new Error('Erro ao listar personagens.');
  }

  return await resposta.json();
}


export async function cadastrarPersonagem(personagem) {

  const resposta = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(personagem)
  });

  if (!resposta.ok) {
    throw new Error('Erro ao cadastrar personagem.');
  }

  return await resposta.json();
}


export async function editarPersonagem(id, personagem) {

  const resposta = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(personagem)
  });

  if (!resposta.ok) {
    throw new Error('Erro ao editar personagem.');
  }

  return await resposta.json();
}


export async function excluirPersonagem(id) {

  const resposta = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE'
  });

  if (!resposta.ok) {
    throw new Error('Erro ao excluir personagem.');
  }

  return await resposta.json();
}