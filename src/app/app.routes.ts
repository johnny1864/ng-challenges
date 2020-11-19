import { Routes } from '@angular/router';
import { DocumentationComponent } from './components/documentation/documentation.component';
import { DirectivesDocumentationComponent } from './directives/directives-documentation/directives-documentation.component';

import { PipesDocumentationComponent } from './pipes/pipes-documentation/pipes-documentation.component';
import { ServicesDocumentationComponent } from './services/services-documentation/services-documentation.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./components/components.module').then((m) => m.ComponentsModule),
  },
  { path: 'directives', component: DirectivesDocumentationComponent },
  {
    path: 'pipes',
    loadChildren: () =>
      import('./pipes/pipes.module').then((m) => m.PipesModule),
  },
  { 
    path: 'services', 
  loadChildren: () => import('./services/services.module').then(m => m.ServicesModule) 
},
  {
    path: 'other',
    loadChildren: () => import('./other/other.module').then(m => m.OtherModule)
  }
];
