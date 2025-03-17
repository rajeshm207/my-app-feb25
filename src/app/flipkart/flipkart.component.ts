import { Component } from '@angular/core';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css']
})
export class FlipkartComponent {

  products:any=[
    {productname: 'pen' ,price:10,rating:3,freedelivery:'true'},
    {productname: 'phone' ,price:100,rating:2,freedelivery:'false'},
    {productname: 'shirt' ,price:400,rating:4,freedelivery:'true' },
    {productname: 'cap' ,price:200,rating:5,freedelivery:'false'},
    {productname: 'mobile case' ,price:300,rating:2,freedelivery:'true'},
    {productname: 'remote' ,price:400,rating:2.5,freedelivery:'false'},
    {productname: 'watch' ,price:7000,rating:4.5,freedelivery:'true'}

  ]
  delete(i:number){
    this.products.splice(i,1)
  }
  
  // create
  productname:string='';
  price:number=0;
  rating:number=0;
  freedelivery:boolean=true;
  create(){
    let product={
      productname:this.productname,
      price:this.price,
      rating:this.rating,
      freedeliver:this.freedelivery

    }
    this.products.unshift(product);
  }
  // sort
  sort(){
    this.products.sort((a:any,b:any)=>a.price-b.price)
  }
  sortt(){
    this.products.sort((a:any,b:any)=>b.price-a.price)
  }
  rate(){
    this.products.sort((a:any,b:any)=>a.rating-b.rating)
  }
  ratee(){
    this.products.sort((a:any,b:any)=>b.rating-a.rating)
  }
  map(){
    this.products=this.products.map((product:any)=>{
      product.price=product.price+50;
      return product;
    })
  }
  mapp(){
    this.products=this.products.map((product:any)=>{
      product.price=product.price*50/100;
      return product;
    })
  }
  reduce(){
    let totalcost=this.products.reduce((sum:any,product:any)=>sum+product.price,0);
    alert(totalcost)
  }
  carts(){
   var datatransferitemlist:{}
  }
  term:string='';
  search(){
  this.products=this.products.filter((product:any)=>product.productname.includes(this.term));
  }

}
