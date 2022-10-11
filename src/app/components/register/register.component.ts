import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerFrom!:FormGroup;

  constructor(fb: FormBuilder,private pokeService: PokemonService, private router: Router, private http: HttpClient) {
    this.registerFrom = fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      address: ['', Validators.required],
      name: ['', Validators.required],
      birthdate: ['', Validators.required],
      city: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  register(){
    var user:any={
      "email":this.registerFrom.controls['email'].value,
      "password":this.registerFrom.controls['password'].value,
      "address":this.registerFrom.controls['address'].value,
      "name":this.registerFrom.controls['name'].value,
      "birthdate":this.registerFrom.controls['birthdate'].value,
      "city":this.registerFrom.controls['city'].value,
    }
    console.log(user);

    // this.pokeService.register(user).subscribe(
    //   res =>{
    //   console.log(res);
    //     }
    // )
  }

}
