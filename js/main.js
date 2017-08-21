//VARIABLES DEL MAPEADO.
//Linea numero uno
  var a = document.querySelector('#box0')
  var b = document.querySelector('#box1')
  var c = document.querySelector('#box2')

//Linea numero dos
  var d = document.querySelector('#box3')
  var e = document.querySelector('#box4')
  var f = document.querySelector('#box5')

//Linea numero tres
  var g = document.querySelector('#box6')
  var h = document.querySelector('#box7')
  var i = document.querySelector('#box8')


  var casillas = new Array(9);
    casillas = [ [a,b,c],[d,e,f],[g,h,i] ]

//FIN VARIABLES DEL MAPEADO.

//BOTONERA.
const btn_frente = document.querySelector('#arriba')
btn_frente.addEventListener('click',Arriba)
const btn_derecha = document.querySelector('#derecha')
btn_derecha.addEventListener('click',Derecha)
const btn_atras = document.querySelector('#abajo')
btn_atras.addEventListener('click',Abajo)
const btn_izquierda = document.querySelector('#izquierda')
btn_izquierda.addEventListener('click',Izquierda)
//FIN BOTONERA.

//JUGADOR.
  function Player(posicion){
    this.posicion = posicion
    this.mover = Move
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
        else if(alfacoy.posicion == casillas[0][1]) {
          alfacoy.posicion = casillas[1][1]
          Move(alfacoy.posicion)
        }
        else if(alfacoy.posicion == casillas[1][2]) {
          alfacoy.posicion = casillas[2][2]
          Move(alfacoy.posicion)
        }else {
        console.error("Error de parametro en funcion Abajo.")
      }
    }

    function Arriba(){
      if(alfacoy.posicion == casillas[1][0]) {
          alfacoy.posicion = casillas[0][0]
          Move(alfacoy.posicion)
        }
        else if(alfacoy.posicion == casillas[2][0]) {
          alfacoy.posicion = casillas[1][0]
          Move(alfacoy.posicion)
        }
        else if(alfacoy.posicion == casillas[1][1]) {
          alfacoy.posicion = casillas[0][1]
          Move(alfacoy.posicion)
        }
        else if(alfacoy.posicion == casillas[2][2]) {
          alfacoy.posicion = casillas[1][2]
          Move(alfacoy.posicion)
        }else {
        console.error("Error de parametro en funcion Arriba.")
      }
    }

    function Derecha(){
      if (alfacoy.posicion == casillas[0][0]) {
        alfacoy.posicion = casillas[0][1]
        Move(alfacoy.posicion)
      }
        else if(alfacoy.posicion == casillas[0][1]) {
          alfacoy.posicion = casillas[0][2]
          Move(alfacoy.posicion)
        }
        else if(alfacoy.posicion == casillas[1][1]) {
          alfacoy.posicion = casillas[1][2]
          Move(alfacoy.posicion)
        }
        else if(alfacoy.posicion == casillas[2][0]) {
          alfacoy.posicion = casillas[2][1]
          Move(alfacoy.posicion)
        }else {
        console.error("Error de parametro en funcion Derecha.")
      }
    }

    function Izquierda(){
      if(alfacoy.posicion == casillas[0][2]) {
          alfacoy.posicion = casillas[0][1]
          Move(alfacoy.posicion)
        }
        else if(alfacoy.posicion == casillas[0][1]) {
          alfacoy.posicion = casillas[0][0]
          Move(alfacoy.posicion)
        }
        else if(alfacoy.posicion == casillas[1][2]) {
          alfacoy.posicion = casillas[1][1]
          Move(alfacoy.posicion)
        }
        else if(alfacoy.posicion == casillas[2][1]) {
          alfacoy.posicion = casillas[2][0]
          Move(alfacoy.posicion)
        }else {
        console.error("Error de parametro en funcion Izquierda.")
      }
    }





  function Move(posicion){
    if (posicion == casillas[0][0]) {
      Reset()
      a.classList.add('box-red')
      b.classList.add('box-white')
      d.classList.add('box-white')
    }else if(posicion == casillas[1][0]){
      Reset()
      d.classList.add('box-red')
      a.classList.add('box-white')
      g.classList.add('box-white')
    }else if(posicion == casillas[2][0]){
      Reset()
      g.classList.add('box-red')
      d.classList.add('box-white')
      h.classList.add('box-white')
    }else if(posicion == casillas[0][1]) {
      Reset()
      b.classList.add('box-red')
      a.classList.add('box-white')
      c.classList.add('box-white')
      e.classList.add('box-white')
    }else if(posicion == casillas[1][1]) {
      Reset()
      e.classList.add('box-red')
      b.classList.add('box-white')
      f.classList.add('box-white')
    }else if(posicion == casillas[2][1]) {
      Reset()
      h.classList.add('box-red')
      g.classList.add('box-white')
    }else if(posicion == casillas[0][2]) {
      Reset()
      c.classList.add('box-red')
      b.classList.add('box-white')
    }else if(posicion == casillas[1][2]) {
      Reset()
      f.classList.add('box-red')
      e.classList.add('box-white')
      i.classList.add('box-white')
    }else if(posicion == casillas[2][2]) {
      Reset()
      i.classList.remove('box-blue')
      i.classList.add('box-red')
    }else{
      console.error("Hubo un error de posicionamiento.")
    }


  }


  function Reset(){
    a.classList.remove('box-white')
    b.classList.remove('box-white')
    c.classList.remove('box-white')
    d.classList.remove('box-white')
    e.classList.remove('box-white')
    f.classList.remove('box-white')
    g.classList.remove('box-white')
    h.classList.remove('box-white')
    i.classList.remove('box-white')

    a.classList.remove('box-red')
    b.classList.remove('box-red')
    c.classList.remove('box-red')
    d.classList.remove('box-red')
    e.classList.remove('box-red')
    f.classList.remove('box-red')
    g.classList.remove('box-red')
    h.classList.remove('box-red')
    i.classList.remove('box-red')
  }
//FIN JUGADOR

//CONSOLA.
  const consola = document.querySelector('#consola')
//FIN Consola.
