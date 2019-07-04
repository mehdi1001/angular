import { NgModule } from '@angular/core';
import {MatButtonModule, MatSnackBarModule, MatFormFieldModule, MatInputModule, MatSidenavModule, MatToolbarModule, MatListModule, MatProgressBarModule, MatProgressSpinnerModule, MatMenuModule} from '@angular/material';
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
               MatMenuModule,
               MatSnackBarModule
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
               MatMenuModule,
               MatSnackBarModule
          ]

})

export class MaterialModule{

} 