import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UserI } from '../../models/user';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  onLogin(form):void{
    console.log('Login', form.value);
    /*this.authService.login(form.value).subscribe(res=>{
      this.router.navigateByUrl('/auth');
    })*/
    this.router.navigateByUrl('/addemployees');
  }
}
