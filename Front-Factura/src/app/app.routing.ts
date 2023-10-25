import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

/*componentes  */
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FacturasComponent } from './components/factura/components/facturas/facturas.component';
import { DespachoFacturaComponent } from './components/factura/components/despacho-factura/despacho-factura.component';
import { FacturasDespachoComponent } from './components/factura/components/facturas-despacho/facturas-despacho.component';
import { NotasCreditoComponent } from "./components/credito/pages/notas-credito/notas-credito.component";
import { PushTableComponent } from "./components/pushmoney/pages/push-table/push-table.component";

/* definir rutas */

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'Despacho', component: DespachoFacturaComponent},
    {path: 'facturas', component: FacturasComponent},
    {path: 'Despacho-Facturas', component: FacturasDespachoComponent},
    {path: 'Notas-Credito', component: NotasCreditoComponent},
    {path: 'Push-Money', component: PushTableComponent},
]

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);