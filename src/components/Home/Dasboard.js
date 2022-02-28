import React, { Component } from 'react'
import { firestore } from '../../firebase'
import { onSnapshot, collection } from 'firebase/firestore'
import { Navbar } from './Navbar'
import Menu from './Menu'

export class Dasboard extends Component {
    state = {
        nbreInscrit : 0
     }

    constructor(props) {
      super(props);
    
    onSnapshot(collection(firestore,"users"),(snapshot)=>{
        snapshot.forEach((snap)=>{
            
            let user = snap.data();

            if(user){
                this.setState({nbreInscrit:this.state.nbreInscrit+1})
            }
        })
    },(error)=>alert(error))
}

  render() {
    return (
      <div>
          <div className='row'>
             <Navbar />
          </div>

          <div className='row'>
               <div className='col-4'>
                    <Menu />
                </div>
              <div className='col-4'  style={{marginTop:"80px"}}>
                  <div className='card bg-warning'>
                      <div className='card-body'>
                          <p>{this.state.nbreInscrit}</p>
                      </div>
                  </div>
              </div>
          </div>

      </div>
    )
  }
}

export default Dasboard