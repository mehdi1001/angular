import { NgModule } from '@angular/core';
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatSidenavModule, MatToolbarModule, MatListModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
     imports: [MatButtonModule,
               MatIconModule,
               MatFormFieldModule,
               MatInputModule,
               MatSidenavModule,
               MatToolbarModule,
               MatListModule
          ],
     exports: [MatButtonModule,
               MatIconModule,
               MatFormFieldModule,
               MatInputModule,
               MatSidenavModule,
               MatToolbarModule,
               MatListModule 
          ]

})

export class MaterialModule{

} 