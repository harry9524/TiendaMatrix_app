import { Component, OnInit } from '@angular/core';
import { Rol } from '../_model/rol';
import { RolService } from './rol.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  titulo = 'Lista de Estudiantes';
  prueba = 'Prueba';

  roles: Rol[];

  constructor(private rolService: RolService) { }

  ngOnInit(): void {

    this.rolService.getAll().subscribe(
      r => this.roles = r
    );

  }

}
