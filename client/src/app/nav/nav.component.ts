import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, observable } from 'rxjs';
import { of } from 'rxjs';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model : any = {};
  
 constructor(public accountService : AccountService, 
              private router: Router, private toastr: ToastrModule,
              private toastrservice: ToastrService) { }
 
  ngOnInit(): void {
  
  }
    login(){
     this.accountService.login(this.model).subscribe({
      next: _ => this.router.navigateByUrl('/members'),
      error : error => this.toastrservice.error(error.error)
     })
    }

    logout(){
      this.accountService.logout();
      this.router.navigateByUrl('/');
      
    }
}
