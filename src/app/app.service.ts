import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {TranslateService} from '@ngx-translate/core';
import {PaginationModel} from '../models/pagination.model';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  // public  email =  /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  public email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  public language = new BehaviorSubject<string>(null);
  public isUserLoggedIn: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  public countOrder: BehaviorSubject<number> = new BehaviorSubject<number>(null);
  allOrders: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  name: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  // photoSocial: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  showCart = false;
  shipping = 5;
  minOrder = 50;

  active = 0;
  keyword: string;
  category_id: any;
  farmer_id: any;
  location = new PaginationModel();
  public loading = false;
  currentLanguage: string;
  orders: any[] = [];

  constructor(private translate: TranslateService) {
    /** Language Configurations **/
    if (!localStorage.getItem('language')) {
      localStorage.setItem('language', 'en');
    }
    const browserLang = localStorage.getItem('language');
    translate.setDefaultLang(browserLang.match(/en|ar/) ? browserLang : 'en');
    this.language.next(browserLang);
    this.currentLanguage = browserLang;


    const token = localStorage.getItem('auth_token_CrowdMarket') ? localStorage.getItem('auth_token_CrowdMarket') : '';
    this.isUserLoggedIn.next(token);

    const name = localStorage.getItem('name') ? localStorage.getItem('name') : '';
    // const photoSocial = localStorage.getItem('photoSocial') ? localStorage.getItem('photoSocial') : '';
    this.name.next(name);
    // this.photoSocial.next(photoSocial);
    this.orders = localStorage.getItem('orders_crowd') ? JSON.parse(localStorage.getItem('orders_crowd')) : [];
    this.countOrder.next(this.orders.length);
    this.allOrders.next(this.orders);
  }


  /* Switch Language */
  switchLanguage(language: string) {
    localStorage.setItem('language', language);
    location.reload();
    setTimeout(() => {
      this.translate.use(language);
      this.language.next(language);
      this.currentLanguage = language;
    }, 2000);


  }


}
