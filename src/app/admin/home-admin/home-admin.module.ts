import { AgmCoreModule } from '@agm/core';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HomeAdminComponent } from './home-admin.component';

import { ViewsModule } from './views/views.module';
import { SharedModule } from './shared/shared.module';
import { ErrorModule } from './views/errors/error.module';

// main layout
import { NavigationModule } from './main-layout/navigation/navigation.module';

//https://www.npmjs.com/package/ngx-cookie-service
import { CookieService } from 'ngx-cookie-service';
import { Dashboard1Component } from './views/dashboards/dashboard1/dashboard1.component';
import { Profile1Component } from './views/profile/profile1/profile1.component';
import { BasicTableComponent } from './views/tables/basic-table/basic-table.component';
import { Map1Component } from './views/maps/map1/map1.component';
import { ModalsComponent } from './views/modals/modals.component';
import { NotFoundComponent } from './views/errors/not-found/not-found.component';
import { ListPianoComponent } from './list-piano/list-piano.component';
import { UpdatePianoComponent } from './update-piano/update-piano.component';
import { AddPianoComponent } from './add-piano/add-piano.component';
import { ListNewsComponent } from './list-news/list-news.component';
import { UpdateNewsComponent } from './update-news/update-news.component';
import { AddNewsComponent } from './add-news/add-news.component';
import { HttpModule } from '@angular/http';
import { PianoService } from 'src/app/api/piano.service';
import { CommonModule } from '@angular/common';

import { AngularEditorModule } from '@kolkov/angular-editor';
import { ListVideoComponent } from './list-video/list-video.component';
import { UpdateVideoComponent } from './update-video/update-video.component';
import { AddVideoComponent } from './add-video/add-video.component';

const routing: Routes = [{
    path: '', component: HomeAdminComponent, children: [
        { path: 'list-piano', component: ListPianoComponent },
        { path: 'update-piano/:id', component: UpdatePianoComponent },
        { path: 'add-piano', component: AddPianoComponent },

        { path: 'list-news', component: ListNewsComponent },
        { path: 'update-news/:id', component: UpdateNewsComponent },
        { path: 'add-news', component: AddNewsComponent },
        { path: 'add-video', component: AddVideoComponent },
        { path: 'list-video', component: ListVideoComponent },
        { path: 'update-video/:id', component: UpdateVideoComponent },



        // { path: 'dashboards', component: Dashboard1Component }, 
        // {
        //     path: 'profiles', children:
        //         [
        //             { path: 'profile1', component: Profile1Component },
        //         ]
        // },
        // {
        //     path: 'tables', children:
        //         [
        //             { path: 'table1', component: BasicTableComponent },
        //         ]
        // },
        // {
        //     path: 'maps', children:
        //         [
        //             { path: 'map1', component: Map1Component },
        //         ]
        // },
        { path: 'modals', component: ModalsComponent },
        { path: '**', component: NotFoundComponent },
    ]
}];

@NgModule({
    declarations: [
        HomeAdminComponent,
        ListPianoComponent,
        UpdatePianoComponent,
        AddPianoComponent,
        ListNewsComponent,
        UpdateNewsComponent,
        AddNewsComponent,
        ListVideoComponent,
        UpdateVideoComponent,
        AddVideoComponent
    ],
    imports: [
        AgmCoreModule.forRoot({
            apiKey: ''
        }),
        NavigationModule,
        RouterModule,
        FormsModule,
        SharedModule,
        ViewsModule,
        ErrorModule,
        FormsModule,
        ReactiveFormsModule,

        CommonModule,

        HttpModule,
        AngularEditorModule,

        RouterModule.forChild(routing),
    ],
    providers: [CookieService, PianoService],
    bootstrap: [HomeAdminComponent],
    schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeAdminModule { }
