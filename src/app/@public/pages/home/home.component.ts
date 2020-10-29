import { Component, OnInit } from '@angular/core';
import { ApiService } from '@graphql/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {

    //Obtenemos la data del servicio
    this.apiService.login('test1@gmail.com', '123').subscribe((data) => {
      console.log(data);
    });

    // Obtenemos la información de los usuarios
    this.apiService.getUsers().subscribe((data) => {
      console.log(data);
    })

    this.apiService.getMe().subscribe((data) => {
      console.log(data);
    })
  }

}
