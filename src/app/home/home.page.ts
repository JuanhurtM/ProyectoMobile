import { Component } from '@angular/core';
import { CrudService } from '../service/crud.service';
import { RouterModule, Router, ActivatedRoute, Routes } from '@angular/router';
import { Padres } from '../model/padres';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  todo:Padres= {
    cedula:'',
    contraseña:''
  }
  credentialForm!: FormGroup;

  onSession !:boolean;
  padre!: any;
  padreCedula!: string;
  padreContraseña!:string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private crudService: CrudService
  ) { 
    this.credentialForm=new FormGroup({
      cedula: new FormControl(),
      contraseña: new FormControl(),
    })
  }

  async ingresar(){
    const loading = await this.loadingController.create();
    await loading.present();
    this.crudService.login(this.credentialForm.value)
    .then(response=>{
      loading.dismiss();
      console.log(response);
      this.router.navigateByUrl('/home', { replaceUrl: true });
    })
    .catch(async(error)=>{
      loading.dismiss();
      const alert = await this.alertController.create({
        header: 'Inicio Fallido',
        message: "Error en la autenticación",
        buttons: ['OK'],
      });
      await alert.present();
    });
  }
  
  
  
  
  ngOnInit(){
    this.credentialForm = this.fb.group({
      cedula: [''],
      contraseña: ['']
    });
  }
  get cedula() {
    return this.credentialForm.get('cedula');
  }
  
  get contraseña() {
    return this.credentialForm.get('contraseña');
  }
}
