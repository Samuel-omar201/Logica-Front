import { Component, OnInit } from '@angular/core';
import {ClientService} from '../../services/client.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  clients = [];
  busqueda: string;
  searchComplete: any;
  search;
  variable;

  constructor(public rest: ClientService) { }

  ngOnInit() {
    this.getClient();
  }

  verId(indice){
    console.log(this.clients[indice]._id);
}

getClient(){
  this.rest.getClient().subscribe(res => {
    console.log(res.result)
    this.clients = res.result;
  });

}

}
