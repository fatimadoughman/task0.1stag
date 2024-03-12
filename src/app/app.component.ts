import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FormsModule, NgModel } from '@angular/forms';
import { InfoComponent } from './info/info.component';
import { SenderComponent } from './sender/sender.component';
import { ReceiverComponent } from './receiver/receiver.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,HeaderComponent,FormsModule,InfoComponent,SenderComponent,ReceiverComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task0.1';
 // FN: string=""

 // receive(FN :string) {
   // this.FN=FN
   // console.log(FN)
  //}


opt:string=""
recieveopt(opt:string){
  this.opt=opt
}

}
