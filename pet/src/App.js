import React, {Component} from 'react'
import './App.css';
import img3 from "./assets/cao-adote.png";
import img5 from "./assets/caos-adote.png";
import dog1 from "./assets/dog1.png";
import dog2 from "./assets/dog2.png";
import dog3 from "./assets/dog3.png";
import dog4 from "./assets/dog4.png";
import dog5 from "./assets/dog5.png";



class App extends Component{
  state = {
    list: [],
    dogs: [
      {
          name: "Afonso",
          age: 1,
          sex: "macho",
          breed: "Rough Collie",
          img:  dog1
      },
      {
         name: "Lana",
         age: "2 anos",
         sex: "fêmea",
         breed: "Golden Retriever",
          img:  dog2
      },
      {
         name: "Fred",
         age: "4 anos",
         sex: "macho",
         breed: "Dálmata",
         img:  dog3
      },
      {
         name: "Pandora",
         age: "3 anos",
         sex: "fêmea",
         breed: "Ritmeester",
         img: dog4
     },
     {
         name: "Bradock",
         age: "5 anos",
         sex: "macho",
         breed: "Jack Russell",
         img: dog5
     }
     
    ]
  }

  listDogs = () => {
    this.setState({
      list: this.state.dogs.map((item) => (
<section className='container-dog-adoption'>
  <div className='imgs-dog-adoption' >
<img  className='dogs-adoption' src={item.img} />
  </div>
<div>
  <h2 className='info-dog'> Nome: {item.name}</h2>
  <h2 className='info-dog' >Idade: {item.age}</h2>
  <h2 className='info-dog' >Sexo: {item.sex}</h2>
  <h2 className='info-dog' >Raça: {item.breed}</h2>
  </div>
</section>
      ))
    })
  }

  clear = () => {
    this.setState({
      list: []
    });
  };

  render(){
    let {listDogs, clear} = this
    return(
      <div className='container'>
        <header>
        <h2 className='title-header'>PetLove Adoption</h2>
        <nav>
          <ul>
            <li>
              <a href="topo">INÍCIO</a>
            </li>
            <li>
              <a href="adot">ADOTE</a>
            </li> 
            <li>
              <a href="end">CONTATO</a>
            </li>
          </ul>
          </nav>
        </header>

        <main>

          <section className='container-intro'>
            <div className='box-intro'>
                <h2 className='title-intro'>AMIGO NÃO SE COMPRA!</h2>
                <p className='p-adopt'>Adotar é um gesto de amor! É dar a chance de um animalzinho ter uma família e a oportunidade de ser recompensado diariamente com muito amor! Comprar animais alimenta um mercado muito nocivo à vida dos animais. Adotar é salvar vidas!</p>
            </div>
            <div className='dog-intro'>
            <img  src={img3} alt="Cachorrinho segurando coração" />
            </div>
            </section>

            <section className='container-adopt'>
            <div className='box-adopt'>
               <button className='button-adopt' onClick={listDogs}> ADOTAR </button>
                <button className='button-clear' onClick={clear}> LIMPAR  </button>
                <img className='img-dogs' src={img5} alt="Cachorros deitados" />
            </div>
          </section>

          <section className='container-dogs'>
            <div className='box-dogs'>
                <h3>{this.state.list}</h3>
               
            </div>
          </section>

        </main>

     
      </div>
    )
  }

}

export default App;

