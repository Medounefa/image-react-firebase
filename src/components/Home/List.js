import React, { Component } from 'react'
import { firestore } from '../../firebase';
import { onSnapshot,collection,doc,deleteDoc } from 'firebase/firestore';
import { Routes, Route } from 'react-router-dom';
import Ajout from './Ajout';
import { Navbar } from './Navbar';
import Menu from './Menu';
import "./List.css"

export default class List extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list:[]
        }
        onSnapshot(collection(firestore,"users"),(snapshot)=>{
            snapshot.forEach((snap)=>{
                this.setState({
                    list:this.state.list.concat([snap])
                })
            })
        },(error)=>alert(error))

    }
  render() {

    
    const allList = () =>{
      return this.state.list.map((snap, index) =>{
          let id = snap.id
          let list = snap.data()
          return(

              <>
              <table className="table table-hover ">
                  <tbody>
                      <tr key={index} >
                          <td><p>  {list.nom}</p></td>
                          <td><p>  {list.prenom}</p></td>
                          <td><p>  {list.email}</p></td>
                          <td><img src={list.image} alt="image" style={{width:'50px',height:"50px"}}/></td>
                          <td>
                              <button className="btn btn-primary">Supp</button>
                          </td>
                      </tr>
                  </tbody>
              </table>
              {/* <div key={index}>
                  <p>Nom : {list.nom}</p>
                  <p>Prenom : {list.prenom}</p>
                  <p>Email : {list.email}</p>
                  <img src={list.image} alt="image" style={{width:'120px',height:"100px"}}/>
              </div> */}
              </>
          )
      })
    }
    // const Supprimer = (id) =>{
    //     if(window.confirm("Voulez-vous reelement supprimer ce cours")){
    //         deleteDoc(doc(firestore,"users",id))
    //         .then((result) =>{
    //             updateCoursList()
    //         })
    //         .catch((err) =>{
    //            alert(err)
    //         })
    //        }
    // }

    // const updateCoursList =()=>{
    //     this.setState({list:[]})
    //     onSnapshot(collection(firestore,"users"),(snapshot)=>{
    //         snapshot.forEach((snap)=>{
    //             this.setState({
    //                 list:this.state.list.concat([snap])
    //             })
    //         })
    //     },(error)=>alert(error))
    // }

    return (
      <div>
          <div className='row'><Navbar /></div>
        <div className='row'>
            <div className='col-4'>
                <Menu />
            </div>
            <div className='col-6' style={{marginTop:"80px",marginRight:"200px"}}>
                <table className='table table-hover'>
                <thead>
                      <tr>
                          <th>Nom</th>
                          <th>Prenom</th>
                          <th>Email</th>
                          <th>Profile</th>
                          <th>Action</th>
                      </tr>
                  </thead>
                </table>
            {allList()}
            <Routes>
              
             <Route path='/ajout' element={<Ajout/>}></Route>
            </Routes>
            </div>
        </div>
      </div>
    )
  }
}
