import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { DetailsComponent } from "./details/details.component";
import { HomeComponent } from "./home/home.component";


@NgModule({
    declarations: [
      HomeComponent,
      DetailsComponent  
      ],
  
    imports: [  
      CommonModule,  
      FormsModule,    
      RouterModule.forChild([]),  
   ],  
    exports: []
  
  })
  
  export class PagesModule {}
