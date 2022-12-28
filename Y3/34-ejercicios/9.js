//Programa una función que obtenga un numero aleatorio entre 501 y 600.

const numeroAleatorio = () => {
  min = Math.ceil(501);
  max = Math.floor(600);
  const resultado =  Math.floor(Math.random() * (max - min + 1) + min);
    console.log(resultado);
};

numeroAleatorio();
