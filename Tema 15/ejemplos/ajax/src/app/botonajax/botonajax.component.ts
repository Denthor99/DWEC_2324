import { Component } from '@angular/core';
import { ServiajaxService } from '../serviajax.service';
import { OnInit, Renderer2, ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-botonajax',
  templateUrl: './botonajax.component.html',
  styleUrl: './botonajax.component.css'
})
export class BotonajaxComponent {
  @ViewChild('datos') idDiv: ElementRef | any;
  constructor(private serviAjax: ServiajaxService, private rd:Renderer2){}
  llamaAjaxC():void{
    this.serviAjax.llamaAjax('http://localhost/DWEC/Tema%2015/ejemplos/ajax/src/app/jsonGET.php?nombre=Juan&ciudad=Ubrique').subscribe((data) =>{
      this.rd.setProperty(this.idDiv.nativeElement,'innerHTML',`Desde servidor ${data['nombre']} de ${data['ciudad']}`);
    } )
  }
}
