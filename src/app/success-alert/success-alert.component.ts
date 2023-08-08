import { Component } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  template: `
    <div class="container mt-5">
      <div class="alert alert-success text-center" role="alert">
        <h4 class="alert-heading">¡Éxito!</h4>
        <p>Se ha completado la acción con éxito. ¡Bien hecho!</p>
        <hr>
        <p class="mb-0">Continúa con tus tareas.</p>
      </div>
    </div>
  `,
})
export class SuccessAlertComponent {

}
