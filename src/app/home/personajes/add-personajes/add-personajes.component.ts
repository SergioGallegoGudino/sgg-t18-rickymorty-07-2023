import { Component } from '@angular/core';
import { Personaje } from 'src/app/models/personaje.Model';
import { PersonajesService } from 'src/app/personajes.service';

@Component({
  selector: 'app-add-personajes',
  templateUrl: './add-personajes.component.html',
  styleUrls: ['./add-personajes.component.css']
})
export class AddPersonajesComponent {

  // Creamos un objeto de tipo Personaje con todos sus atributos

  personaje: Personaje = {
    id: "",
    name: "",
    status: "",
    species: "",
    type: "",
    gender: "",
    origin: {name: "", url: ""},
    location: {name: "", url: ""},
    image: "",
    episode: [""],
    url: "",
    created: ""
  };

  // Pasamos por el constructor personajeService

  constructor(private personajesService: PersonajesService){}

  addPersonaje(): void{
    const data = {
      id: this.personaje.id,
      name: this.personaje.name,
      status: this.personaje.status,
      species: this.personaje.species
    };

    this.personajesService.create(data)
      .subscribe(
        response =>{
          console.log(response);
        },
        error => {
          console.log(error);
        }
    );

  }
}
