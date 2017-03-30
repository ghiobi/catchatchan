import {Component, OnInit, Inject} from '@angular/core';
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['home.component.scss']
})
export class HomeComponent implements OnInit {

  form: FormGroup;

  constructor(
    private modal: NgbModal,
    private router: Router,
    private auth: AuthService,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required]
    })
  }

  ngOnInit() {}

  openAuth(modal: NgbModalRef) {
    this.modal.open(modal).result.then((result) => {

    }, (cancel) => {

    });
  }

  login(form: FormGroup, modal: NgbModalRef, close){
    if (form.valid) {
      this.auth.login(form.value)
        .then((res) => {
          close();
          this.router.navigate(['/dashboard']);
        }).catch((res) => {
        console.log(res);
      });
    }
  }

}
