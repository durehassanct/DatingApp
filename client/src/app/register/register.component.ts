import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {}
  
  constructor(private accountService : AccountService, private toastr: ToastrModule,
    private toastrservice: ToastrService) {}

  ngOnInit(): void {
    
  }

  register(){
    this.accountService.register(this.model).subscribe({
      next: () => {
        this.cancel();
      },
      error : error => {
        this.toastrservice.error(error.error);
        console.log(error);
      }
    });
  }

  cancel(){
    this.cancelRegister.emit(false);
  }
}
