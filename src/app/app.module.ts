import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Navbar/Navbar.component';
import { BannerComponent } from './Banner/Banner.component';
import { SobreComponent } from './Sobre/Sobre.component';
import { InformacoesComponent } from './Informacoes/Informacoes.component';
import { AdmissaoComponent } from './Admissao/Admissao.component';
import { FooterComponent } from './Footer/Footer.component';

@NgModule({
  declarations: [				
    AppComponent,
    NavbarComponent,
    BannerComponent,
    BannerComponent,
      SobreComponent,
      InformacoesComponent,
      AdmissaoComponent,
      FooterComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
