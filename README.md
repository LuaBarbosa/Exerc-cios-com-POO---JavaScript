# POO-JS

Exercícios realizados na aula do Programa Quero Ser Dev, ministrado pela Lets Code - Programação Orientada a Objeto 

Trabalhando com herança e composição.


Questão 1

Construa uma classe Veiculo que tem como propriedades rodas (1 a n), usaCombustivel (true/false),
uma classe Carro (tipoDecombustivel: 'gasolina', 'álcool', 'flex') que herda de Veiculo e
Bicicleta (infantil: true/false - tem que ter mais que 2 rodas) que também herda as características de Veiculo.

Questão 2

Construa uma classe Programa com as propriedades duracao e generos (ação, comédia, suspense, drama, terror) e duas classes que herdam desta (Seriado e Filme). A classe Seriado deve ter numeroDeEpisodios (de 1 a n), anoDeInicio e anoDeFim. Já a classe Filme precisa ter a duracao (em minutos).

Questão 3 

Crie uma classe Livro com as propriedades autor e ano. Crie também as classes Ebook e AudioBook que herdam de Livro. Ebook deve ter numero de páginas e número de capítulos. Já a classe AudioBook deve ter a duração total do áudio em minutos.


Questão 4 

Utilizando como base a classe:
  Dispositivo: 
  + calcula()
Faça alguns mixins para as seguintes funcionalidades:
  + ilumina()
  + acessaInternet()
  + tiraFoto()
  + registraPassos()
Para construir as seguintes classes:
  Relogio: + calcula(), + acessaInternet(), + registraPassos()
  Computador: + calcula(), + acessaInternet(), + tiraFoto()
  Celular: + calcula(), + ilumina(), + acessaInternet(), + tiraFoto(), + registraPassos()
