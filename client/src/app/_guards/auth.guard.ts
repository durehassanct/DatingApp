import { Injectable } from '@angular/core';
import {CanActivate} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { map, Observable } from 'rxjs';
import { AccountService } from '../_services/account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private accountService: AccountService,private toastrservice: ToastrService){}
 
  canActivate(): Observable<boolean> {
    return this.accountService.currentUser$.pipe(
      map((user: any): boolean => {
        if(user) return true;
        else{
          this.toastrservice.error('You shall not pass!');
          return false
        }
      })
    )
  
    }
  }
