import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  FN:string=""
  @Output() y:EventEmitter<string> = new EventEmitter<string>();
  sendFN(){
this.y.emit(this.FN)
  }
}
