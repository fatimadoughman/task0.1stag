import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sender',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sender.component.html',
  styleUrl: './sender.component.css'
})
export class SenderComponent {

option :string=""

@Output() optionn:EventEmitter<string> = new EventEmitter<string>();
sendopt(){
this.optionn.emit(this.option)

}
}
