import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    

    this.form = this.fb.group({
      nombre: [null],
      arreglo: this.fb.array([])
    })

  }


  agregarTelefonoCorreo() {

    const arreglo = this.form.get('arreglo') as FormArray;

    const grupo = this.fb.group({
      telefono: [null],
      correo: [null]
    })

    arreglo.push(grupo);

  }


  borrarGrupo(i: number) {
    const arreglo = this.form.get('arreglo') as FormArray;
    arreglo.removeAt(i);
  }
  


}
