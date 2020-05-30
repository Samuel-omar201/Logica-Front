import { Component, OnInit } from '@angular/core';
import { Client } from '../../models/client';
import { ClientService } from '../../services/client.service';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
client: Client;
message: String;
  constructor(public rest: ClientService) { 

      this.client = new Client('','','','','','')
  }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.client);
    this.rest.setClient(this.client).subscribe(
      response =>{
        if(response.isclient && response.isclient._id){
          this.message = 'Registro completado correctamente';
          alert(this.message)
        }else{
          this.message = 'No se pudo registrar'
          alert(this.message)
        }
      },
      error =>{
        console.log(<any>error);
      }
    )
  }

}
