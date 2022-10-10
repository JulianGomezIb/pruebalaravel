import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginFrom!:FormGroup;
  link:string='';

  constructor(fb: FormBuilder,private pokeService: PokemonService, private router: Router, private http: HttpClient) {
    this.loginFrom = fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });

  }

  ngOnInit(): void {

  }

  login(){
    var user:any={
      "email":this.loginFrom.controls['email'].value,
      "password":this.loginFrom.controls['password'].value,
    }
    console.log(user);

    this.pokeService.login(user).subscribe(
      res =>{
      console.log(res);
        }
    )


  }
  getRegister(){
    this.router.navigateByUrl(`register`);
  }
}
