import{Component} from '@angular/core';
import { HeaderComponent } from './header.component';
@Component({
    selector:'app-main',
    template:`<app-header></app-header>
              <app-body></app-body>
              `
})
export class MainComponent{
    
}