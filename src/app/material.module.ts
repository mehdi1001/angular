import { NgModule } from '@angular/core';
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatSidenavModule, MatToolbarModule, MatListModule, MatProgressBarModule, MatProgressSpinnerModule, MatMenuModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {MatTreeModule} from '@angular/material/tree';

@NgModule({
     imports: [MatButtonModule,
               MatIconModule,
               MatFormFieldModule,
               MatInputModule,
               MatSidenavModule,
               MatToolbarModule,
               MatListModule,
               MatTreeModule,
               MatProgressBarModule,
               MatProgressSpinnerModule,
               MatMenuModule
          ],
     exports: [MatButtonModule,
               MatIconModule,
               MatFormFieldModule,
               MatInputModule,
               MatSidenavModule,
               MatToolbarModule,
               MatListModule,
               MatTreeModule,
               MatProgressBarModule,
               MatProgressSpinnerModule,
               MatMenuModule
          ]

})

export class MaterialModule{

} 