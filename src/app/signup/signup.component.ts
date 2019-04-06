import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { compareValidator } from '../directives/compare-validator.directive';
import { SignupService } from './service/signup.service';
import { User } from '../users/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  reactiveForm: FormGroup;
  public userFile: File;
  public isMessage: boolean = false;
  id: number;

  public imagePath;
  url: any;
  public message: string;
  public IfSelectedFile: boolean = false;
  public selectedRoleUser: string;

  constructor(private signupService: SignupService, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.reactiveForm = this.fb.group({
      firstName: new FormControl('',
      [Validators.required, Validators.compose([Validators.pattern('[a-zA-z ]*'), Validators.minLength(3)])]),
      lastName: new FormControl('',
       [Validators.required, Validators.compose([Validators.pattern('[a-zA-z ]*'), Validators.minLength(2)])]),
      email: new FormControl('',
       [Validators.required, Validators.compose([Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])]),
      telNumber: new FormControl('',
       [Validators.required, Validators.compose([Validators.pattern('[0-9+ ]*'), Validators.minLength(8), Validators.maxLength(12)])]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required, compareValidator('password')]),
      cin: new FormControl(),
      city: new FormControl(),
      birthDate: new FormControl()
    });
  }

  saveForm(submitForm: FormGroup) {
    if (submitForm.valid) {
      console.log(submitForm.value);
      const user = submitForm.value;

      if (this.selectedRoleUser === 'Etudiant') {
        if (this.IfSelectedFile === false) {
          this.signupService.SaveStudentWithoutAvatar(user)
            .subscribe(
              data => {
                console.log(data);
                this.router.navigate(['/']);
                // We have to add Signup Modal
              }
            );
        } else {

          const formData: FormData = new FormData();
          formData.append('user', JSON.stringify(user));
          formData.append('file', this.userFile);
          console.log('form Data  =' + JSON.stringify(user));
          this.signupService.SaveStudentWithAvatar(formData)
            .subscribe(
              data => {
                console.log(data);
                this.router.navigate(['/']);
                // We have to add Signup Modal
              }
            );
        }

      }
      if (this.selectedRoleUser === 'Enseignant') {

        if (this.IfSelectedFile === false) {
          this.signupService.SaveProfessorWithoutAvatar(user)
            .subscribe(
              data => {
                console.log(data);
                this.router.navigate(['/']);
                // We have to add Signup Modal
              }
            );
        } else {
          const formData: FormData = new FormData();
          formData.append('user', JSON.stringify(user));
          formData.append('file', this.userFile);
          console.log('formData  =' + JSON.stringify(user));
          this.signupService.SaveProfessorWithAvatar(formData)
            .subscribe(
              data => {
                console.log(data);
                this.router.navigate(['/']);
                // We have to add Signup Modal
              }
            );
        }

      }

    }
  }

  onSelectFile(event) { // appelé à chaque changement d'entrée de fichier
    this.IfSelectedFile = true;
    const file = event.target.files[0]; // touts les coordonnes sur un image
    console.log(file);
    this.userFile = file;

    if (file.length === 0) {
      return;
    }

    const mimeType = event.target.files[0].type; //retourn le type de fichier
    if (mimeType.match(/image\/*/) == null) {
      this.message = 'Veuillez insérer une image.';
      this.isMessage = true;
      return;
    }

    this.isMessage = false;
    if (event.target.files && file) {
      const reader = new FileReader();
      this.imagePath = event.target.files;
      reader.readAsDataURL(file); // lire le fichier sous forme d'URL de données
      reader.onload = (event) => { // appelé une fois que readAsDataURL est terminée
        this.url = reader.result; // ajouter la source à l'image
      }

    }
  }

  selectChangeHandler(event: any) {
    this.selectedRoleUser = event.target.value;
    console.log('event.target.value ' + this.selectedRoleUser);
  }

}
