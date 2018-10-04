import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { TypeVisaComponent } from './type-visa/type-visa.component';
import { DemandevisaComponent } from './demandevisa/demandevisa.component';
import { DetailsComponent } from './details/details.component';
import { Route } from '@angular/compiler/src/core';
import { RootingModule } from './rooting/rooting.module';
import { HttpClientModule} from '@angular/common/http';
import { ClientServiceService } from './client/client-service.service';
import { TypeVisaService } from './type-visa/type-visa.service';
import { DemandevisaService } from './demandevisa/demandevisa.service';
import { DetailsService } from './details/details.service';
import { FinddemandevisaComponent } from './finddemandevisa/finddemandevisa.component';
import { FindvisaService } from './finddemandevisa/findvisa.service';

import { VoirdetailsComponent } from './voirdetails/voirdetails.component';
import { ConsultervisasComponent } from './consultervisas/consultervisas.component';
import { VoirdetailsService } from './voirdetails/voirdetails.service';
import { ConsultervisasService } from './consultervisas/consultervisas.service';
import { MenuComponent } from './menu/menu.component';
import { MydetailsComponent } from './mydetails/mydetails.component';
import { MydetailsService } from './mydetails/mydetails.service';
import { LoginComponent } from './login/login.component';
import { AutheticationService } from './login/authetication.service';
import { DemendevisaphotoComponent } from './demendevisaphoto/demendevisaphoto.component';
import { PhotoService } from './demendevisaphoto/photo.service';





@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    TypeVisaComponent,
    DemandevisaComponent,
    DetailsComponent,
    FinddemandevisaComponent,
    LoginComponent,
   
    VoirdetailsComponent,
    ConsultervisasComponent,
    MenuComponent,
    MydetailsComponent,
    DemendevisaphotoComponent,
    
    
  ],
  imports: [
    BrowserModule,
    RootingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ClientServiceService,
  TypeVisaService,
DemandevisaService,
DetailsService,
FindvisaService,
VoirdetailsService,
ConsultervisasService,
AutheticationService,
PhotoService,
MydetailsService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
