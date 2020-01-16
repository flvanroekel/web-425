import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
  <h1 class="login">Please enter your login information!</h1>
  <div class="wrapper">
    <form class="form-signin">
      <h2 class="form-signin-heading">Login</h2>
      <input type="text" class="form-control" name="username" placeholder="Email Address" required="" autofocus="" />
      <input type="password" class="form-control" name="password" placeholder="Password" required=""/>
      <button class="btn btn-lg btn-warning btn-block" type="submit">Login</button>
    </form>
  </div>
`,
styles: [`
  .login { 
    margin-right: 5%;
   margin-left: 5%;
   text-align: center
  }
`]
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}