document.getElementById('rdForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Previne o envio padrão do formulário

  // Captura dos valores dos campos
  var nome = document.getElementById('nome').value;
  var email = document.getElementById('email').value;
  var funcionarios = document.getElementById('funcionarios').value;
  var baseLegal = document.getElementById('baselegal').value;
  var status = document.getElementById('status').value;
  var category = document.getElementById('categoria').value;

  // Criação do objeto payload no formato esperado
  var payload = {
    nome: nome,
    email: email,
    funcionarios: funcionarios,
    legal_basis: {
      category: category,        // Sempre "communications"
      type: baseLegal,           // Um dos tipos válidos (consent, legitimate_interest, etc.)
      status: status             // "granted" ou "declined"
    }
  };

  console.log("Dados a serem enviados:", payload);

  // Simulação da integração via API do RD Station Marketing
  // Para realizar uma integração real, substitua o bloco abaixo
  /*
  fetch('https://api.rd.services/endpoint', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // Adicione outros headers necessários, como a API key
    },
    body: JSON.stringify(payload)
  })
  .then(response => response.json())
  .then(data => console.log('Sucesso:', data))
  .catch(error => console.error('Erro:', error));
  */

  alert("Dados enviados! Verifique o console para detalhes.");
});
