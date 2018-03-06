import {MatButtonModule, MatCardModule, MatCheckboxModule} from '@angular/material';
import {NgModule} from "@angular/core";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    MatCardModule,
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    MatCardModule,
  ],
})
export class MaterialModule {
}
