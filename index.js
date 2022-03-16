//questão 1
//Construa uma classe Veiculo que tem como propriedades rodas (1 a n), usaCombustivel (true/false),
//uma classe Carro (tipoDecombustivel: 'gasolina', 'álcool', 'flex') que herda de Veiculo e
//Bicicleta (infantil: true/false - tem que ter mais que 2 rodas) que também herda as características de Veiculo.

class Veiculo {
  constructor(rodas, usaCombustível) {
    this.rodas = rodas >= 1 ? rodas : 1;
    this.usaCombustível = usaCombustível;
  }
}

//usando herança:

class Carro extends Veiculo {
  #tipoDeCombustivelValido;
  constructor(rodas, usaCombustível, tipoDeCombustivel) {
    this.#tipoDeCombustivelValido = ["gasolina", "alcool", "flex"];
    super(rodas, usaCombustível);
    this.tipoDeCombustivel =
      this.#tipoDeCombustivelValidotipoDeCombustivelValido.includes(
        tipoDeCombustivel
      )
        ? tipoDeCombustivel
        : "Combustível inválido";
  }
}

class Bicicleta extends Veiculo {
  constructor(rodas, usaCombustível, infantil) {
    const infantilBoolean = typeof infantil === "boolean" ? infantil : false;
    const rodasAjustadasParaInfantil = rodas > 2 ? rodas : 3;
    const rodasAjustadas = infantilBoolean ? rodasAjustadasParaInfantil : rodas;
    infantilBoolean && rodas > 2 ? rodas : 3;
    super(rodas, usaCombustível);

    this.infantil = infantilBoolean;
  }
}

//questão 2

class Programa {
  #tiposDeGenero;
  #generos;
  constructor(duracao, generos) {
    this.#tiposDeGenero = ["ação", "comédia", "suspense", "drama", "terror"];
    this.duracao = duracao;
    this.generos = generos;
  }
  get generos() {
    return this.generos;
  }

  set generos(generos) {
    return this.#tiposDeGenero.includes(generos) ? generos : "Genero inválido";
  }
}

const programaX = new Programa(50, ["suspense"]);
class Seriado extends Programa {
  constructor(duracao, generos, numeroDeEpsodios, anoDeInicio, anoDeFim) {
    super(duracao, generos);
    this.numeroDeEpsodios = numeroDeEpsodios;
    this.anoDeInicio = anoDeInicio;
    this.anoDeFim = anoDeFim;
  }
}
