import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../../Services/auth/auth.service';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { OrderService } from '../../Services/order.service';


@Component({
  selector: 'app-pages-nav',
  standalone: true,
  imports: [RouterModule,CommonModule,NgbCollapseModule],
  templateUrl: './pages-nav.component.html',
  styleUrl: './pages-nav.component.css'
})

export class PagesNavComponent {

  constructor( private router: Router,
    private cookieService: CookieService,
    private orderservice: OrderService,
    private userAuth : AuthService){}
    isNavbarOpen = false;
    isMenuCollapsed = true;
    get isUserLogged(): boolean
    {
      return  this.userAuth.isAuthenticated()
    }

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
}

logout(){
   this.orderservice.cartCount = 0;
    this.userAuth.LogOut()
    this.router.navigate(['/login']);
  }
}




