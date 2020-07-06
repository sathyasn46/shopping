import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';

@Injectable()
export class ProductsModel{
  public data : any = [
    {
      p_id : '1',
      product_name : 'Brakes-shoe',
      product_weight : '1Unit',
      product_price : '590',
     // product_image : ''
    },
    {
      p_id : '2',
      product_name : 'Clutch',
      product_weight : '1unit',
      product_price : '180',
    },
    {
      p_id : '3',
      product_name : 'Tyre tube',
      product_weight : '1Unit',
      product_price : '500',
    },
    {
      p_id : '4',
      product_name : 'Amaron-Battery',
      product_weight : '1Unit',
      product_price : '180',
    },
    {
      p_id : '5',
      product_name : 'Wheel-Rim',
      product_weight : '1Unit',
      product_price : '1750',
    },
    {
      p_id : '6',
      product_name : 'Cooler-liquid',
      product_weight : '200ml',
      product_price : '880',
    },
    {
      p_id : '7',
      product_name : 'Petrol',
      product_weight : '1 litre',
      product_price : '100',
    },
    {
      p_id : '8',
      product_name : 'Engine-oil',
      product_weight : '250ml',
      product_price : '235',
    },
    {
      p_id : '9',
      product_name : 'Puncture-paste',
      product_weight : '250ml',
      product_price : '293',
    }
  ]
} 