alert("Teste");

class Teste{
    digaOla() {
        alert("Olá, tudo bem?");
    }

    digaOi() {
    alert("Oi");
    }
}

// --

class ListaConvidados {
    constructor() {
      this.convidados = [];
    }
  
    adicionar(nome, idade, cpf) {
      this.convidados.push({ nome: nome, idade: idade, cpf: cpf });
    }
  
    listarConvidados() {
      console.log(this.convidados);
    }
  }
  
  var listaConv = new ListaConvidados();
  
  document.getElementById("adicionar").onclick = function() {
    var nome = document.getElementById("nome").value;
    listaConv.adicionar(nome, 37, "123456789");
  };
  
  document.getElementById("listar").onclick = function() {
    listaConv.listarConvidados();
  };

// --

// const nunca muda
// let pode ser alterado

function digaOla(nome) {
    console.log("Olá ", nome);
  }
  
  digaOla("Felipe");
  digaOla("Daniel");

// --

// var soma = function(x, y) {
//   return x + y;
// };

var soma = (x, y) => x + y;
var mult = x => x * 2;

console.log(mult(2));

// --

const convidado = {
    nome: "Felipe",
    idade: 37,
    endereco: { lagradouro: "Av X", numero: 399 }
  };
  
  const {
    nome,
    idade,
    endereco: { numero }
  } = convidado;
  
  console.log(nome);
  console.log(idade);
  console.log(numero);
  
  const imprimir = ({ nome, idade }) => {
    console.log(nome);
    console.log(idade);
  };
  
  imprimir(convidado);
  
  
