import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconComponent } from './components/icon/icon.component';

// font-awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Toaster
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [AppComponent, IconComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule, // required animation module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
You have to install: npm i ngx-toastr bootstrap (Type exactly)
You can create a folder by using this command: ng generate component components/iconny
Here, component is a command, generating a folder should be done after the command component.
By this method, everything will be updates inside app.modules.ts
Now i have deleted in iconny inside components, after deleting 
app.module.ts doesn't get updated, so you have to remove iconny inside 
app.module.ts.
Now i have created another new folder inside component
code: ng g c components/icon
g - generate
c - component
It's better to use full word.
You have to install: npm i @fortawesome/angular-fontawesome
Pen, cross and circle icon are scattered and are there in different libraries
So, need to install those libraries
Without angular-fontawesome we can't install below libraries
You have to install: npm install @fortawesome/free-solid-svg-icons
You have to install: npm install @fortawesome/fontawesome-svg-core
You have to install: npm install @fortawesome/free-regular-svg-icons
*/
