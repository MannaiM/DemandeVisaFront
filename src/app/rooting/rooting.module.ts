import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from '../client/client.component';
import { TypeVisaComponent } from '../type-visa/type-visa.component';
import { DetailsComponent } from '../details/details.component';
import { DemandevisaComponent } from '../demandevisa/demandevisa.component';
import { FinddemandevisaComponent } from '../finddemandevisa/finddemandevisa.component';
import { VoirdetailsComponent } from '../voirdetails/voirdetails.component';
import { ConsultervisasComponent } from '../consultervisas/consultervisas.component';
import { MenuComponent } from '../menu/menu.component';
import { MydetailsComponent } from '../mydetails/mydetails.component';
import { LoginComponent } from '../login/login.component';
import { DemendevisaphotoComponent } from '../demendevisaphoto/demendevisaphoto.component';

const routes: Routes = [
{path: 'ajouter', component: ClientComponent },
{path: 'ajouterTypeVisa', component: TypeVisaComponent},
{path: 'ajouterDetails', component: DetailsComponent},
{path: 'ajouterDemandeVisa', component: DemandevisaComponent},
{path: 'consultervisaByClient', component: FinddemandevisaComponent},
{path: 'voirDetails/:id', component: VoirdetailsComponent },
{path: 'consultervisas', component: ConsultervisasComponent },
{path: 'menu', component: MenuComponent },
{path: 'MyDetails/:id', component: MydetailsComponent},
{path: 'login', component: LoginComponent },
{path: 'ajouterDemandeVisa/:id', component: DemendevisaphotoComponent },


]

@NgModule({
  imports: [RouterModule.forRoot(routes)
  ],
 exports: [ RouterModule ]
})
export class RootingModule { }
