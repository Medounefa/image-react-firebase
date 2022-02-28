import React, { Component } from 'react'
import { firestore, app } from '../../firebase'
import { addDoc,collection } from 'firebase/firestore'
import {getStorage, ref, uploadBytesResumable} from "firebase/storage"
import { Navbar } from './Navbar'
import List from './List'
import Menu from './Menu'
import "./Ajout.css"


export class Ajout extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         nom :"",
         prenom : "",
         email :"",
         image :null
      }
    }
    

  render() {
   
    const submit = (e) =>{
        e.preventDefault();
    
        let user = {
            nom : this.state.nom,
            prenom : this.state.prenom,
            email : this.state.email,
            image : "https://firebasestorage.googleapis.com/v0/b/profileimg-21309.appspot.com/o/"+this.state.image.name+"?alt=media"
        }

        addDoc(collection(firestore, "users"), user).then(() =>{
            console.log("Yes")
        }).catch(() =>{
            console.log("Error")
        })

        let storageRef=ref(getStorage(app), this.state.image.name)
        uploadBytesResumable(storageRef,this.state.image)
      


        }
    return (
      <div>
          <div className='row'>
             <Navbar />
          </div>

          <div className='row'>
            <div className='col-4'>
                <Menu />
            </div>
            <div className='col-6 my-5'>
            <form className='' onSubmit={submit}>
            <div class="mb-3 form-group">
                <label for="nom" class="form-label">Nom</label>
                <input type="text" class="form-control" id="nom" value={this.state.nom} onChange={ e=>this.setState({nom:e.target.value})}/>
            </div>
            <div class="mb-3 form-group">
                <label for="nom" class="form-label">Prenom</label>
                <input type="text" class="form-control" id="prenom"  value={this.state.prenom} onChange={ e=>this.setState({prenom:e.target.value})}/>
            </div>
            <div class="mb-3 form-group">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" value={this.state.email} onChange={ e=>this.setState({email:e.target.value})}/>
            </div>
            {/* <div class="mb-3 form-group">
                <label for="mdp" class="form-label">Mot de passe</label>
                <input type="password" class="form-control" id="mdp" />
            </div>
            */}
            <div class="mb-3 form-group">
               <input type="file" name="profile" className='form-control' onChange={ e =>this.setState({image:e.target.files[0]})}/>
            </div> 
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
            </div>
          </div>
      </div>
    )
  }
}

export default Ajout