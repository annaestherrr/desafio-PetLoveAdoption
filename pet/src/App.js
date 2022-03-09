import React, {Component} from 'react'
import './App.css';
import img3 from "./assets/cao-adote.png";
import dog1 from "./assets/dog1.png";
import dog2 from "./assets/dog2.png";
import dog3 from "./assets/dog3.png";
import dog4 from "./assets/dog4.png";
import dog5 from "./assets/dog5.png";
import logoInsta from "./assets/instagram-logo.png"
import logoFace from "./assets/logo-face.jpg"
import dogs from "./assets/cachorros.png"




class App extends Component{
  state = {
    isShowList: false,
    list:[],
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

  handleShowList = () => {
    this.setState({
      isShowList: !this.state.isShowList /* a exclamação é operador de negação - vai me retornar o contrário */
  })
  }
 
 renderList = () => (
   this.state.dogs.map((item) => (
    <li className='container-dog-adoption'>
    <img className='imgs-dogs-adoption' src={item.img} />
    <div className='box-info-dog'>
      <h2 className='info-dog'> Nome: {item.name}</h2>
      <h2 className='info-dog' >Idade: {item.age}</h2>
      <h2 className='info-dog' >Sexo: {item.sex}</h2>
      <h2 className='info-dog' >Raça: {item.breed}</h2>
      </div>
    </li>
          ))
   )


  render(){
    let {handleShowList} = this
    return(
      <div className='container'>
        <header>
        <h2 className='title-header'>PetLove Adoption</h2>
        <nav>
          <ul className='list-nav'>
            <li className='item-nav'>
              <a href="topo">INÍCIO</a>
            </li>
            <li className='item-nav'>
              <a href="#adot">ADOTE</a>
            </li> 
           <li className='item-nav'>
            <a href="#end">CONTATO</a>
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
              <p className='p-button'> Temos uma lista de amigos disponíveis! </p>
            <div className='box-adopt'>
               <button id="adot" className='button-adopt' onClick={handleShowList}> VER LISTA </button>
            </div>
               {this.state.isShowList && <ul className='list-dogs'>{this.renderList()}</ul>}
          </section>
      <section className='end-main'>
        <div className='box-end-main'>
        <h3 className='title-end-main'>A carinha de quem vai te fazer feliz!</h3>
        <p className='p-end-main'>Adotar é encher de esperanças um coração que antes não sabia o que era carinho, e receber em troca um presente único: O Amor Incondicional. Adote!</p>
        </div>
      <img className='img-and-main' src={dogs} alt="Cachorros juntos" />
      </section>
        </main>

         <footer id="end">
         <p className='contato'>Contato: (21) 1234-56789</p>
          <div className='box-redes-sociais'>
          <p className='p-redes-sociais'>Redes Sociais: </p>
          <a href="https://www.instagram.com/">
          <img className='logo-instagram'  src={logoInsta} alt="Logo do Instagram"/>
          </a>
          <a href="https://www.facebook.com/">
          <img className='logo-face'  src={logoFace} alt="Logo do Facebook"/>
          </a>
        </div>
          <p className='endereço'> Endereço:  <a href="https://www.google.com.br/maps/@-22.8619435,-43.2811485,15z">Rua Almirante Ary Rongel - Recreio dos Bandeirantes</a> </p>
        </footer>
      </div>
    )
  }

}

export default App;

