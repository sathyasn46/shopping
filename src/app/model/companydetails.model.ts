import { Injectable } from '@angular/core';

@Injectable()
export class CompanyDetailsModel{
  
  public companyInfo : any = 
    {
      name : 'Autoparts',
      address : 'No:22, Arcot road',
      city: 'Chennai',
      pincode: '600092',
      email: 'customer.care@autoparts.com',
      phone : '044-12345678'
    }
    
  
} 