import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'item1111', loadChildren: './item1111/item1111.module#Item1111PageModule' },
  { path: 'item1112', loadChildren: './item1112/item1112.module#Item1112PageModule' },
  { path: 'item1121', loadChildren: './item1121/item1121.module#Item1121PageModule' },
  { path: 'item1122', loadChildren: './item1122/item1122.module#Item1122PageModule' },
  { path: 'item1211', loadChildren: './item1211/item1211.module#Item1211PageModule' },
  { path: 'item1212', loadChildren: './item1212/item1212.module#Item1212PageModule' },
  { path: 'item1221', loadChildren: './item1221/item1221.module#Item1221PageModule' },
  { path: 'item1222', loadChildren: './item1222/item1222.module#Item1222PageModule' },
  { path: 'item2111', loadChildren: './item2111/item2111.module#Item2111PageModule' },
  { path: 'item2112', loadChildren: './item2112/item2112.module#Item2112PageModule' },
  { path: 'item2121', loadChildren: './item2121/item2121.module#Item2121PageModule' },
  { path: 'item2122', loadChildren: './item2122/item2122.module#Item2122PageModule' },
  { path: 'item2211', loadChildren: './item2211/item2211.module#Item2211PageModule' },
  { path: 'item2212', loadChildren: './item2212/item2212.module#Item2212PageModule' },
  { path: 'item2221', loadChildren: './item2221/item2221.module#Item2221PageModule' },
  { path: 'item2222', loadChildren: './item2222/item2222.module#Item2222PageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
