//questão 1

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

class Seriado extends Programa {
  constructor(duracao, generos, numeroDeEpsodios, anoDeInicio, anoDeFim) {
    super(duracao, generos);
    this.numeroDeEpsodios = numeroDeEpsodios;
    this.anoDeInicio = anoDeInicio;
    this.anoDeFim = anoDeFim;
  }
  get numeroDeEpisodios() {
    return this.#numeroDeEpisodios;
  }

  set numeroDeEpisodios(numeroDeEpisodios) {
    this.#numeroDeEpisodios = numeroDeEpisodios > 1 ? numeroDeEpisodios : 1;
  }

  get anoDeFim() {
    return this.#anoDeFim;
  }

  set anoDeFim(anoDeFim) {
    this.#anoDeFim = anoDeFim > this.anoDeInicio ? anoDeFim : this.anoDeInicio;
  }
}

class Filme extends Programa {
  constructor(duracao, generos) {
    super(duracao, generos);
    const minutosExcedentesDeHoras = this.duracao % 60;
    const horas = this.duracao - minutosExcedentesDeHoras;

    this.duracao = `${horas / 60}h ${minutosExcedentesDeHoras}m`;
  }
}

const programaX = new Programa(50, ["suspense", "drama", "romance"]);

const theOffice = new Seriado(22, ["comédia", "sátira"], 120, 2005, 2012);

const naoOlhePraCima = new Filme(128, ["comédia", "suspense", "drama"]);
