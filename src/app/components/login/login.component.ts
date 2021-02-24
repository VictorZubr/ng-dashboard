import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../../interfaces';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit, AfterViewInit {
  @ViewChild('email') emailElement: ElementRef;

  public form: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(6)])
  });

  public submitted = false;

  constructor(
    public auth: AuthenticationService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.auth.logout();
  }

  ngAfterViewInit(): void {
    this.emailElement.nativeElement.focus();
  }

  submit() {
    if (this.form.invalid) {
      return;
    }

    this.submitted = true;

    const user: User = {
      email: this.form.value.email,
      password: this.form.value.password,
    };

    this.auth.login(user).subscribe(() => {
      this.form.reset();
      this.router.navigate(['/dashboard']);
      this.submitted = false;
    }, () => {
      this.submitted = false;
    });
  }
}
