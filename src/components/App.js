import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  handleFindPets = () =>{
    switch(this.state.filters.type){

      case 'cat':
        fetch('/api/pets?type=cat')
        .then(r => r.json())
        .then(data=>{
          this.setState({
            pets: data
          })
        })
        break;

      case 'dog':
        fetch('/api/pets?type=dog')
        .then(r => r.json())
        .then(data=>{
          this.setState({
            pets: data
          })
        })

        break;

      case 'micropig':
        fetch('/api/pets?type=micropig')
        .then(r => r.json())
        .then(data=>{
          this.setState({
            pets: data
          })
        })
        
        break;
      
      default:
        fetch('/api/pets')
        .then(r => r.json())
        .then(data=>{
          this.setState({
            pets: data
          })
        })
        break;
    }
  }

  handleAdoptPet = (furFriendId) => {
    
    const newFam = this.state.pets.map(pet => {return pet.id === furFriendId? {...pet, isAdopted:true} : pet} )

    this.setState(
      {
        pets:newFam      
      }
    )

    // this.setState(
    //   {
    //     pets:{...this.state.pets.filter(pet => pet.id === id)},  isAdopted: true      
    //   }
    // )
  }

  handleChangetype = (e) => {
    this.setState({
      filters: {...this.state.filters, type: e.target.value}
    }, ()=> console.log(this.state.filters.type))
  } 

  // handleChangetype = ({target:{value}}) => {

  //   this.setState({
  //     filters: {...this.state.filters, type: value}
  //   }, ()=> console.log(this.state.filters.type))
  // } 


  render() {
    return (
      <div className="ui container">

        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>

        <div className="ui container">

          <div className="ui grid">
            <div className="four wide column">
              <Filters onFindPetsClick={this.handleFindPets} onChangeType={this.handleChangetype}  />
            </div>

            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.handleAdoptPet}/>
            </div>
          </div>

        </div>

      </div>
    )
  }
}

export default App
