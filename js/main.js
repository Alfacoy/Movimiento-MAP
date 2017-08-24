var keyOne = true;
var keyTwo = false;




//VARIABLES DEL MAPEADO.
//Linea numero uno
  var l1a = document.querySelector('#box0')
  var l1b = document.querySelector('#box1')
  var l1c = document.querySelector('#box2')
  var l1d = document.querySelector('#box3')

//Linea numero dos
  var l2a = document.querySelector('#box4')
  var l2b = document.querySelector('#box5')
  var l2c = document.querySelector('#box6')
  var l2d = document.querySelector('#box7')

//Linea numero tres
  var l3a = document.querySelector('#box8')
  var l3b = document.querySelector('#box9')
  var l3c = document.querySelector('#box10')
  var l3d = document.querySelector('#box11')

//Linea numero cuatro
  var l4a = document.querySelector('#box12')
  var l4b = document.querySelector('#box13')
  var l4c = document.querySelector('#box14')
  var l4d = document.querySelector('#box15')

  var casillas = new Array();
    casillas = [ [l1a,l1b,l1c,l1d],[l2a,l2b,l2c,l2d],[l3a,l3b,l3c,l3d],[l4a,l4b,l4c,l4d] ]

//FIN VARIABLES DEL MAPEADO.

//BOTONERA.
const btn_arriba = document.querySelector('#arriba')
btn_arriba.addEventListener('click',Arriba)
const btn_derecha = document.querySelector('#derecha')
btn_derecha.addEventListener('click',Derecha)
const btn_abajo = document.querySelector('#abajo')
btn_abajo.addEventListener('click',Abajo)
const btn_izquierda = document.querySelector('#izquierda')
btn_izquierda.addEventListener('click',Izquierda)
const btn_buscar = document.querySelector('#buscar')
btn_buscar.addEventListener('click',Buscar)
//FIN BOTONERA.

//JUGADOR.
  function Player(posicion){
    this.posicion = posicion
    this.mover = Move
    this.buscar = Buscar
  }




    function Abajo(){
      if(alfacoy.posicion == casillas[0][0]) {
          alfacoy.posicion = casillas[1][0]
          Move(alfacoy.posicion)
        }
        else if(alfacoy.posicion == casillas[1][0]) {
          alfacoy.posicion = casillas[2][0]
          Move(alfacoy.posicion)
        }
        else if(alfacoy.posicion == casillas[2][0]) {
          alfacoy.posicion = casillas[3][0]
          Move(alfacoy.posicion)
        }
        else if(alfacoy.posicion == casillas[0][3]) {
          alfacoy.posicion = casillas[1][3]
          Move(alfacoy.posicion)
        }
        else if(alfacoy.posicion == casillas[1][3]) {
          alfacoy.posicion = casillas[2][3]
          Move(alfacoy.posicion)
        }
        else if(alfacoy.posicion == casillas[2][3]) {
          alfacoy.posicion = casillas[3][3]
          Move(alfacoy.posicion)
        }
        else if(alfacoy.posicion == casillas[2][2]) {
          alfacoy.posicion = casillas[3][2]
          Move(alfacoy.posicion)
        }
        else if(alfacoy.posicion == casillas[2][1]) {
          alfacoy.posicion = casillas[3][1]
          Move(alfacoy.posicion)
        }else{
        console.error("Error de parametro en funcion Abajo.")
      }
    }

    function Arriba(){
      if(alfacoy.posicion == casillas[3][0]) {
          alfacoy.posicion = casillas[2][0]
          Move(alfacoy.posicion)
        }
        else if(alfacoy.posicion == casillas[2][0]) {
          alfacoy.posicion = casillas[1][0]
          Move(alfacoy.posicion)
        }
        else if(alfacoy.posicion == casillas[1][0]) {
          alfacoy.posicion = casillas[0][0]
          Move(alfacoy.posicion)
        }
        else if(alfacoy.posicion == casillas[3][1]) {
          alfacoy.posicion = casillas[2][1]
          Move(alfacoy.posicion)
        }
        else if(alfacoy.posicion == casillas[3][2]) {
          alfacoy.posicion = casillas[2][2]
          Move(alfacoy.posicion)
        }
        else if(alfacoy.posicion == casillas[3][3]) {
          alfacoy.posicion = casillas[2][3]
          Move(alfacoy.posicion)
        }
        else if(alfacoy.posicion == casillas[2][3]) {
          alfacoy.posicion = casillas[1][3]
          Move(alfacoy.posicion)
        }
        else if(alfacoy.posicion == casillas[1][3]) {
          alfacoy.posicion = casillas[0][3]
          Move(alfacoy.posicion)
        }else {
        console.error("Error de parametro en funcion Arriba.")
      }
    }

    function Derecha(){
      if (alfacoy.posicion == casillas[0][0]) {
        if (keyTwo) {
          alfacoy.posicion = casillas[0][1]
          Move(alfacoy.posicion)
          consola.innerHTML = "Abriste la puerta!"
        }
        consola.innerHTML = "La puerta esta bloqueada."
      }
        else if(alfacoy.posicion == casillas[0][1]) {
          alfacoy.posicion = casillas[0][2]
          Move(alfacoy.posicion)
        }
        else if(alfacoy.posicion == casillas[0][2]) {
          alfacoy.posicion = casillas[0][3]
          Move(alfacoy.posicion)
        }
        else if(alfacoy.posicion == casillas[1][2]) {
          alfacoy.posicion = casillas[1][3]
          Move(alfacoy.posicion)
        }
        else if(alfacoy.posicion == casillas[2][2]) {
          alfacoy.posicion = casillas[2][3]
          Move(alfacoy.posicion)
        }
        else if(alfacoy.posicion == casillas[3][0]) {
          alfacoy.posicion = casillas[3][1]
          Move(alfacoy.posicion)
        }
        else if(alfacoy.posicion == casillas[3][1]) {
          alfacoy.posicion = casillas[3][2]
          Move(alfacoy.posicion)
        }
        else if(alfacoy.posicion == casillas[3][2]) {
          alfacoy.posicion = casillas[3][3]
          Move(alfacoy.posicion)
        }else {
        console.error(`Error de parametro en funcion Derecha.`)
      }
    }

    function Izquierda(){
      if(alfacoy.posicion == casillas[0][3]) {
          alfacoy.posicion = casillas[0][2]
          Move(alfacoy.posicion)
        }
        else if(alfacoy.posicion == casillas[0][2]) {
          alfacoy.posicion = casillas[0][1]
          Move(alfacoy.posicion)
        }
        else if(alfacoy.posicion == casillas[0][1]) {
          alfacoy.posicion = casillas[0][0]
          Move(alfacoy.posicion)
        }
        else if(alfacoy.posicion == casillas[1][3]) {
          alfacoy.posicion = casillas[1][2]
          Move(alfacoy.posicion)
        }
        else if(alfacoy.posicion == casillas[1][2]) {
          alfacoy.posicion = casillas[1][1]
          Move(alfacoy.posicion)
        }
        else if(alfacoy.posicion == casillas[2][3]) {
          alfacoy.posicion = casillas[2][2]
          Move(alfacoy.posicion)
        }
        else if(alfacoy.posicion == casillas[3][3]) {
          alfacoy.posicion = casillas[3][2]
          Move(alfacoy.posicion)
        }
        else if(alfacoy.posicion == casillas[3][2]) {
          alfacoy.posicion = casillas[3][1]
          Move(alfacoy.posicion)
        }
        else if(alfacoy.posicion == casillas[3][1]) {
          alfacoy.posicion = casillas[3][0]
          Move(alfacoy.posicion)
        }else {
        console.error("Error de parametro en funcion Izquierda.")
      }
    }


    function Buscar(){

      if (alfacoy.posicion == casillas[0][2]) {
        keyOne = true
        consola.innerHTML = "Encontraste una llave"
      }
    }




  function Move(posicion){
  //Primera Linea.
    if (posicion == casillas[0][0]) {
      Reset()
      Location()
      l1a.classList.add('box-red')
      l1b.classList.add('box-white')
      l2a.classList.add('box-white')
    }else if(posicion == casillas[0][1]){
      Reset()
      Location()
      l1b.classList.add('box-red')
      l1a.classList.add('box-white')
      l1c.classList.add('box-white')
    }
    else if(posicion == casillas[0][2]){
      Reset()
      Location()
      l1c.classList.add('box-red')
      l1b.classList.add('box-white')
      l1d.classList.add('box-white')
    }
    else if(posicion == casillas[0][3]){
      Reset()
      Location()
      l1d.classList.add('box-red')
      l1c.classList.add('box-white')
      l2d.classList.add('box-white')
    }
    //Segunda linea.
    else if(posicion == casillas[1][0]){
      Reset()
      Location()
      l2a.classList.add('box-red')
      l1a.classList.add('box-white')
      l3a.classList.add('box-white')
    }
    else if(posicion == casillas[1][1]){
      Reset()
      Location()
      l2b.classList.add('box-red')
    }
    else if(posicion == casillas[1][2]){
      Reset()
      Location()
      l2c.classList.add('box-red')
      l2b.classList.add('box-white')
      l2d.classList.add('box-white')
    }
    else if(posicion == casillas[1][3]){
      Reset()
      Location()
      l2d.classList.add('box-red')
      l1d.classList.add('box-white')
      l2c.classList.add('box-white')
      l3d.classList.add('box-white')
    }
    //Tercera linea.
    else if(posicion == casillas[2][0]){
      Reset()
      Location()
      l3a.classList.add('box-red')
      l2a.classList.add('box-white')
      l4a.classList.add('box-white')
    }
    else if(posicion == casillas[2][1]){
      Reset()
      Location()
      l3b.classList.add('box-red')
      l4b.classList.add('box-white')
    }
    else if(posicion == casillas[2][2]){
      Reset()
      Location()
      l3c.classList.add('box-red')
      l4c.classList.add('box-white')
      l3d.classList.add('box-white')
    }
    else if(posicion == casillas[2][3]){
      Reset()
      Location()
      l3d.classList.add('box-red')
      l3c.classList.add('box-white')
      l2d.classList.add('box-white')
      l4d.classList.add('box-white')
    }
    //Cuarta linea.
    else if(posicion == casillas[3][0]){
      Reset()
      Location()
      l4a.classList.add('box-red')
      l3a.classList.add('box-white')
      l4b.classList.add('box-white')
    }
    else if(posicion == casillas[3][1]){
      Reset()
      Location()
      l4b.classList.add('box-red')
      l3b.classList.add('box-white')
      l4a.classList.add('box-white')
      l4c.classList.add('box-white')
    }
    else if(posicion == casillas[3][2]){
      Reset()
      Location()
      l4c.classList.add('box-red')
      l4d.classList.add('box-white')
      l4b.classList.add('box-white')
      l3c.classList.add('box-white')
    }
    else if(posicion == casillas[3][3]){
      Reset()
      Location()
      l4d.classList.add('box-red')
      l4c.classList.add('box-white')
      l3d.classList.add('box-white')
    }else{
      console.error("Hubo un error de posicionamiento.")
    }


  }


  function Reset(){
    l1a.classList.remove('box-white')
    l1b.classList.remove('box-white')
    l1c.classList.remove('box-white')
    l1d.classList.remove('box-white')
    l2a.classList.remove('box-white')
    l2b.classList.remove('box-white')
    l2c.classList.remove('box-white')
    l2d.classList.remove('box-white')
    l3a.classList.remove('box-white')
    l3b.classList.remove('box-white')
    l3c.classList.remove('box-white')
    l3d.classList.remove('box-white')
    l4a.classList.remove('box-white')
    l4b.classList.remove('box-white')
    l4c.classList.remove('box-white')
    l4d.classList.remove('box-white')

    l1a.classList.remove('box-red')
    l1b.classList.remove('box-red')
    l1c.classList.remove('box-red')
    l1d.classList.remove('box-red')
    l2a.classList.remove('box-red')
    l2b.classList.remove('box-red')
    l2c.classList.remove('box-red')
    l2d.classList.remove('box-red')
    l3a.classList.remove('box-red')
    l3b.classList.remove('box-red')
    l3c.classList.remove('box-red')
    l3d.classList.remove('box-red')
    l4a.classList.remove('box-red')
    l4b.classList.remove('box-red')
    l4c.classList.remove('box-red')
    l4d.classList.remove('box-red')
  }


//FIN JUGADOR

//CONSOLA.
  const consola = document.querySelector('#consola')
//FIN Consola.
