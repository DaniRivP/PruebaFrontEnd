/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { FacturasComponent } from './app/app.component';

bootstrapApplication(FacturasComponent, appConfig)
  .catch((err) => console.error(err));
