import { Component, OnInit } from '@angular/core';
import { ApiService } from '@graphql/services/api.service';
import { ICarouselItem } from '@mugan86/ng-shop-ui/lib/interfaces/carousel-item.interface';
import { AuthService } from 'src/app/services/auth.service';
import { UsersService } from '../../../services/users.service';
import caroulselItems from '@data/carousel.json';
import productList from '@data/products.json';
import { IProduct } from '@mugan86/ng-shop-ui/lib/interfaces/product.interface';
import { ProductService } from '../../../services/product.service';
import { ACTIVE_FILTERS } from 'src/app/@shared/constants/filter';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items: ICarouselItem[] = [];​ 
  productList; 
  listOne;
  listTwo;
  listThree;

  constructor(private apiService: ApiService, private auth: AuthService, 
                private userService: UsersService, private productService:ProductService) { }

  ngOnInit(): void {

    // Traer los valores cargados en el carousel.json u otros 
    this.productService.getByLastUnitsOffers(1, 3, ACTIVE_FILTERS.ACTIVE, true, -1, 40).subscribe ( (data) => {
      data.result.map( (item: IProduct) => {
        this.items.push({
          id: item.id,
          title: item.name,
          description: item.description,
          background: item.img,
          url: ''
        })
      })
      // console.log(this.items);
    });


    this.productList = productList;
    this.listOne = this.fakeRandomProductList();
    this.listTwo = this.fakeRandomProductList();
    this.listThree = this.fakeRandomProductList();

    this.productService.getByLastUnitsOffers(1,4, ACTIVE_FILTERS.ACTIVE, true, 40).subscribe((data) => {
      this.listTwo = data.result
    })
    this.productService.getByPlatform(1,4, ACTIVE_FILTERS.ACTIVE, '4' ,true ).subscribe((data) => {
      this.listOne = data.result
    })

    //Obtenemos la data del servicio
    // this.auth.login('test1@gmail.com', '123').subscribe((data) => {
    //   console.log(data);
    // });

    // Obtenemos la información de los usuarios
    this.userService.getUsers(1,2).subscribe((data) => {
      // console.log(data);
    })

    this.auth.getMe().subscribe((data) => {
      // console.log(data);
    })
  }


  

  fakeRandomProductList() {
    const list = [];
    const arrayMax = 4;
    const limit = this.productList.length;
    for (let i = 0; i < arrayMax; i++) {
      list.push(this.productList[Math.floor(Math.random() * limit)])
    }
    return list
  }

}
