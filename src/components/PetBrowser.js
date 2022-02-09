import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    return <div className="ui cards">
              PET COMPONENT SHOULD GO HERE
              {/* {console.log(this.props.pets)} */}
              {this.props.pets.map(
                  furFriend => <Pet key={furFriend.id} pet={furFriend} onAdoptPet={this.props.onAdoptPet} />
                )}
            </div>
  }
}

export default PetBrowser
