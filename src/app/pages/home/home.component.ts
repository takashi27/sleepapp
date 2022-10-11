import { Component, OnInit } from '@angular/core';
import { Firestore,collectionData, collection } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public usuario ='';
  public pass ='';

  constructor(private router: Router,private firestore: Firestore) { }

  ngOnInit(): void {
    let hola = collection(this.firestore, 'items');
    let x = collectionData(hola).subscribe(resp => {
      console.log(resp);
    });
    console.log(x);

  }

  ingresar(){
    if(this.usuario.toUpperCase() == 'UNIMINUTO' && this.pass.toUpperCase() == 'UNIMINUTO'){
      console.log(this.usuario.toUpperCase(),this.pass.toUpperCase());
      this.router.navigateByUrl('Graficas');
    }else{
      Swal.fire('Error','Usuario y Contraeña Inválidos','error')
    }
  }

}
