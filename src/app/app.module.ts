import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { MainComponent } from './Components/main/main.component';
import { TasksComponent } from './Components/tasks/tasks.component';
import { FormsModule } from '@angular/forms';
import { LightBoxDirective } from './Directives/lightbox.directive';
import { ReminderPipe } from './Pipes/reminder.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    MainComponent,
    TasksComponent,
    LightBoxDirective,
    ReminderPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
