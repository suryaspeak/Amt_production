import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { EventdetailsPage } from '../pages/eventdetails/eventdetails';
import { BarchatPage } from '../pages/barchat/barchat';
import { BarchatsixPage } from '../pages/barchatsix/barchatsix';
import { FilterChartPage } from '../pages/filter-chart/filter-chart';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { CustomerPage } from '../pages/customer/customer';
import { EventPage } from '../pages/event/event';
import { ViewPage } from '../pages/view/view';
import { AddPage } from '../pages/add/add';
import { TablefinincePage } from '../pages/tablefinince/tablefinince';
import { JobPage } from '../pages/job/job';
import { TableviewPage } from '../pages/tableview/tableview';
import { PopoverPage } from '../pages/popover/popover';
import { WorkorderPage } from '../pages/workorder/workorder';
import { DetailsPage } from '../pages/details/details';
import { TaskPage } from '../pages/task/task';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { HttpModule,Http } from '@angular/http';
import { ProfilePage } from '../pages/profile/profile';
import { EditeventPage } from '../pages/editevent/editevent';
import { ViewtaskPage } from '../pages/viewtask/viewtask';
import { TaskdetailsPage } from '../pages/taskdetails/taskdetails';
import { BasictabPage } from '../pages/basictab/basictab';
import { FeedbacktabPage } from '../pages/feedbacktab/feedbacktab';
import { EdittaskPage } from '../pages/edittask/edittask';
import { LinePage } from '../pages/line/line';
import { BarresultPage } from '../pages/barresult/barresult';
import { TablefinincepopoverPage } from '../pages/tablefinincepopover/tablefinincepopover';
import { LineFinPage } from '../pages/line-fin/line-fin';
import { LinepopoverPage } from '../pages/linepopover/linepopover';
import { BacklogtablePage } from '../pages/backlogtable/backlogtable';
import { BackloglinePage } from '../pages/backlogline/backlogline';
import { BacklogtablepopoverPage } from '../pages/backlogtablepopover/backlogtablepopover';
import { BackloglinepopoverPage } from '../pages/backloglinepopover/backloglinepopover';
import { BackloglinenintyPage } from '../pages/backloglineninty/backloglineninty';
import { AssignenginerPage } from '../pages/assignenginer/assignenginer';
import { EditprofilePage } from '../pages/editprofile/editprofile';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { CustomerviewPage } from '../pages/customerview/customerview';
import { CustomertablePage } from '../pages/customertable/customertable';
import { CustomerlinePage } from '../pages/customerline/customerline';
import { CustomerbarPage } from '../pages/customerbar/customerbar';
import { InspectionsPage } from '../pages/inspections/inspections';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RestProvider } from '../providers/rest/rest';
import { HttpClientModule } from '@angular/common/http';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Camera } from '@ionic-native/camera';
import { Network } from '@ionic-native/network';
import { SelectSearchableModule } from 'ionic-select-searchable';
import { QuestionPage } from '../pages/question/question';
import { ChartsModule } from 'ng2-charts';
import { NotificationPage } from '../pages/notification/notification';
import { EditeventlastPage } from '../pages/editeventlast/editeventlast';
import { MyprofilePage } from '../pages/myprofile/myprofile';
// import { EnquiryPage } from '../pages/enquiry/enquiry';
import { MajorcomponentlistdtlsPage } from '../pages/majorcomponentlistdtls/majorcomponentlistdtls';
import { EventofflinelistPage } from '../pages/eventofflinelist/eventofflinelist';

import { SettingsPage } from '../pages/settings/settings';
import { SQLite } from '@ionic-native/sqlite';
import { CustomerassetsPage } from '../pages/customerassets/customerassets';
import { CustomerviewassetsdetailsPage } from '../pages/customerviewassetsdetails/customerviewassetsdetails';
import { CustomercomponentPage } from '../pages/customercomponent/customercomponent';
import { CustomercomponenthistoryPage } from '../pages/customercomponenthistory/customercomponenthistory';
import { CustomercomponentmajorPage } from '../pages/customercomponentmajor/customercomponentmajor';
import { EditattacmentPage } from '../pages/editattacment/editattacment';
import { EditeventlastnewPage } from '../pages/editeventlastnew/editeventlastnew';
import { MajorcomponentPage } from '../pages/majorcomponent/majorcomponent';
import { MajorcomponentfilterPage } from '../pages/majorcomponentfilter/majorcomponentfilter';
import { OfflineaddeventPage } from '../pages/offlineaddevent/offlineaddevent';
import { OfflineworkflowPage } from '../pages/offlineworkflow/offlineworkflow';
import { OfflinetaskfilterPage } from '../pages/offlinetaskfilter/offlinetaskfilter';
import { OfflinetaskcreatePage } from '../pages/offlinetaskcreate/offlinetaskcreate';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { EventOfflineCreatePage } from '../pages/event-offline-create/event-offline-create';
import { EditeventofflinePage } from '../pages/editeventoffline/editeventoffline';
import { EditeventlastofflinePage } from '../pages/editeventlastoffline/editeventlastoffline';
import { OfflinetasklistPage } from '../pages/offlinetasklist/offlinetasklist';
import { OfflinetaskdetilsPage } from '../pages/offlinetaskdetils/offlinetaskdetils';
import { OfflineinspectionsPage } from '../pages/offlineinspections/offlineinspections';
import { OfflineinspectionsfilterPage } from '../pages/offlineinspectionsfilter/offlineinspectionsfilter';

import { IonicImageViewerModule } from 'ionic-img-viewer';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    OfflineinspectionsPage,
    OfflineinspectionsfilterPage,
    ListPage,
    EditeventlastnewPage,
    EditeventofflinePage,
    EditeventlastofflinePage,
    CustomerPage,
    AssignenginerPage,
    MyprofilePage,
    EventPage,
    EditprofilePage,
    TablefinincePage,
    SettingsPage,
    OfflineworkflowPage,
    CustomerPage,
    EditattacmentPage,
    CustomerviewPage,
    CustomertablePage,
    CustomerlinePage,
    NotificationPage,
    CustomerbarPage,
    ViewPage,
    OfflineaddeventPage,
    BarresultPage,
    MajorcomponentlistdtlsPage,
    MajorcomponentPage,
    LineFinPage,
    BackloglinepopoverPage,
    QuestionPage,
    InspectionsPage,
    AddPage,
    MajorcomponentfilterPage,
    BackloglinePage,
    EditeventlastPage,
    BackloglinenintyPage,
    BacklogtablepopoverPage,
    EventofflinelistPage,
    LinepopoverPage,
    TablefinincepopoverPage,
    FilterChartPage,
    JobPage,
    TableviewPage,
    PopoverPage,
    EventOfflineCreatePage,
    WorkorderPage,
    ProfilePage,
    DetailsPage,
    DashboardPage,
   TaskPage,
   EventdetailsPage,
   EditeventPage,
   TaskdetailsPage,
   FeedbacktabPage,
   BacklogtablePage,
   BasictabPage,
   ViewtaskPage,
   BarchatPage,
   BarchatsixPage,
   EdittaskPage,
    LoginPage,
    CustomerassetsPage,
    CustomerviewassetsdetailsPage,
    CustomercomponentPage,
    CustomercomponenthistoryPage,
    CustomercomponentmajorPage,
    LinePage,
    EventofflinelistPage,
    OfflinetaskcreatePage,
OfflinetaskfilterPage,
OfflinetasklistPage,
OfflinetaskdetilsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    SelectSearchableModule,
    HttpClientModule,
    ChartsModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    QuestionPage,
    ListPage,
    CustomerPage,
    BackloglinenintyPage,
    EventPage,
    EditeventofflinePage,
    EditeventlastofflinePage,
    NotificationPage,
    SettingsPage,
    OfflineinspectionsPage,
    OfflineinspectionsfilterPage,
    AssignenginerPage,
    EditprofilePage,
    EventofflinelistPage,
    OfflinetaskcreatePage,
    OfflinetaskfilterPage,
    OfflineworkflowPage,
    CustomerPage,
    EventOfflineCreatePage,
    MajorcomponentlistdtlsPage,
    MajorcomponentfilterPage,
    CustomerviewPage,
    MajorcomponentPage,
    CustomertablePage,
    CustomerlinePage,
    EventofflinelistPage,
    EditeventlastPage,
    MyprofilePage,
    CustomerbarPage,
    BacklogtablePage,
    BacklogtablepopoverPage,
    ViewPage,
    AddPage,
    InspectionsPage,
    LinePage,
    JobPage,
    LinepopoverPage,
    BackloglinepopoverPage,
    BackloglinePage,
    TablefinincepopoverPage,
    WorkorderPage,
    ProfilePage,
    DetailsPage,
    BarchatPage,
    BarresultPage,
    BarchatsixPage,
    TableviewPage,
    LineFinPage,
    TablefinincePage,
    PopoverPage,
    FilterChartPage,
    TaskPage ,
    DashboardPage,
    EventdetailsPage,
    EditeventPage,
    CustomerassetsPage,
    CustomerviewassetsdetailsPage,
    CustomercomponentPage,
    CustomercomponenthistoryPage,
    CustomercomponentmajorPage,
    TaskdetailsPage,
    FeedbacktabPage,
    BasictabPage,
    ViewtaskPage,
    EdittaskPage,
    EditattacmentPage,
    LoginPage,
    OfflineaddeventPage,
    EditeventlastnewPage,
    OfflinetasklistPage,
OfflinetaskdetilsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider,
    FileTransfer,
    FileTransferObject,
    File,
    Camera,
    Network,
    InAppBrowser,
    SQLite,
    PhotoViewer,
    IonicImageViewerModule
  ]
})
export class AppModule {}
