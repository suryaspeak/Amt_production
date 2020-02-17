import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Network } from '@ionic-native/network';

import { AlertController, Events } from 'ionic-angular';
/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
export enum ConnectionStatusEnum {
  Online,
  Offline
}
@Injectable()
export class RestProvider {
  // url='http://mamt.gainwellindia.com/gainwell-amt/api/';
  url='https://nexgenams.gainwellindia.com/gainwell-amt/api/';
 
  // url='http://192.168.0.105/gainwell-amt/api/'
  // urlForChecklist=""
  previousStatus :any;
  constructor(public http: HttpClient,
    public alertCtrl: AlertController, 
    public network: Network,
    public eventCtrl: Events) {
      this.previousStatus = ConnectionStatusEnum.Online;
    console.log('Hello RestProvider Provider');
  }
  public initializeNetworkEvents(): void {
    this.network.onDisconnect().subscribe(() => {
        if (this.previousStatus === ConnectionStatusEnum.Online) {
            this.eventCtrl.publish('network:offline');
        }
        this.previousStatus = ConnectionStatusEnum.Offline;
    });
    this.network.onConnect().subscribe(() => {
        if (this.previousStatus === ConnectionStatusEnum.Offline) {
            this.eventCtrl.publish('network:online');
        }
        this.previousStatus = ConnectionStatusEnum.Online;
    });
}
  logindata(data)  
  {
    return new Promise((resolve, reject) => {
      this.http.post(this.url+'login',data)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  useraccess(data){
    return new Promise((resolve, reject) => {
      this.http.post(this.url+'user',data)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  slider(data){
    return new Promise((resolve, reject) => {
      this.http.post(this.url+'slider',data)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  kpiDashboardBar6View(data){
    return new Promise((resolve, reject) => {
      this.http.post(this.url+'kpiDashboardBar6Measurement',data)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  barChartThreeMonths(data){
    return new Promise((resolve, reject) => {
      this.http.post(this.url+'kpiDashboardBar3Measurement',data)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  table(data){
    return new Promise((resolve, reject) => {
      this.http.post(this.url+'kpiDashboardTabularMeasurement',data)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  kpiDashboardLineCurrentMonthMeasurement(data){
    return new Promise((resolve, reject) => {
      this.http.post(this.url+'kpiDashboardLineCurrentMonthMeasurement',data)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  kpiDashboardLineLastMonthMeasurement(data){
    return new Promise((resolve, reject) => {
      this.http.post(this.url+'kpiDashboardLineLastMonthMeasurement',data)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  kpiDashboardLineLastMonthView(data){
    return new Promise((resolve, reject) => {
      this.http.post(this.url+'kpiDashboardLineLastMonthView',data)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  kpiDashboardLineCurrentMonthView(data){
    return new Promise((resolve, reject) => {
      this.http.post(this.url+'kpiDashboardLineCurrentMonthView',data)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  siteGet(data){
    return new Promise((resolve, reject) => {
      this.http.post(this.url+'site',data)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  equipmentBySite(data){
    return new Promise((resolve, reject) => {
      this.http.post(this.url+'equipment-by-site',data)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  componentCodes(data){
    return new Promise((resolve, reject) => {
      this.http.post(this.url+'component-codes',data)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  taskType(data){
    return new Promise((resolve, reject) => {
      this.http.post(this.url+'task-type',data)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  eventStatus(data){
    return new Promise((resolve, reject) => {
      this.http.post(this.url+'event-status',data)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  modifierCodes(data){
    return new Promise((resolve, reject) => {
      this.http.post(this.url+'modifier-codes',data)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  priorityGet(data){
    return new Promise((resolve, reject) => {
      this.http.post(this.url+'priority',data)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  sourceGet(data){
    return new Promise((resolve, reject) => {
      this.http.post(this.url+'source',data)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  symptomGet(data){
    return new Promise((resolve, reject) => {
      this.http.post(this.url+'symptom',data)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }


  jobCodesGet(data){
    return new Promise((resolve, reject) => {
      this.http.post(this.url+'job-codes',data)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  causeGet(data){
    return new Promise((resolve, reject) => {
      this.http.post(this.url+'cause',data)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  submitWorkorder(data){
    return new Promise((resolve, reject) => {

       this.http.post(this.url+'event-create-admin',data)
      // this.http.post(this.url+'event-create-admin-test',data)
      .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  kpiDashboardTabularFinancial(data){
    return new Promise((resolve, reject) => {
      this.http.post(this.url+'kpiDashboardTabularFinancial',data)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  kpiDashboardTabularQuarterFinancial(data){
    return new Promise((resolve, reject) => {
      this.http.post(this.url+'kpiDashboardTabularQuarterFinancial',data)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  kpiDashboardLineFinancial(data){
    return new Promise((resolve, reject) => {
      this.http.post(this.url+'kpiDashboardLineFinancial',data)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  kpiDashboardLineQuarterFinancial(data){
    return new Promise((resolve, reject) => {
      this.http.post(this.url+'kpiDashboardLineQuarterFinancial',data)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  kpiDashboardTabularBacklog(data){
    return new Promise((resolve, reject) => {
      this.http.post(this.url+'kpiDashboardTabularBacklog',data)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

Checklist(data){
  return new Promise((resolve, reject) => {
    this.http.post(this.url+'checklist',data)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
}

model(data){
  return new Promise((resolve, reject) => {
    this.http.post(this.url+'modellistByEquipment',data)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
  
}
question(data){
  return new Promise((resolve, reject) => {
    this.http.post(this.url+'question',data)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
}
 modelbysite(data){
  return new Promise((resolve, reject) => {
    this.http.post(this.url+'equipment-by-model',data)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
 }
 Prevention(data){
  return new Promise((resolve, reject) => {
    this.http.post(this.url+'event_prevention',data)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  }); 
 }
  
 ComponentCodesAll(data){
  return new Promise((resolve, reject) => {
    this.http.post(this.url+'ComponentCodesAll',data)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
 }
 activity(data){
  return new Promise((resolve, reject) => {
    this.http.post(this.url+'activity',data)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
 }
 employee(data){
  return new Promise((resolve, reject) => {
    this.http.post(this.url+'employee',data)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
 }

 parts(data){
  return new Promise((resolve, reject) => {
    this.http.post(this.url+'parts',data)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
 }
 answer(data){
  return new Promise((resolve, reject) => {
    this.http.post(this.url+'answer',data)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
 }
 kpiDashboardLineBacklog(data){
  return new Promise((resolve, reject) => {
    this.http.post(this.url+'kpiDashboardLineBacklog',data)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
 }
 applicationCode(data){
  return new Promise((resolve, reject) => {
    this.http.post(this.url+'applicationCode',data)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
 }
 responsibility(data){
  return new Promise((resolve, reject) => {
    this.http.post(this.url+'responsibility',data)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
 }
 viewEventsInProgressOrCompleted(data){
  return new Promise((resolve, reject) => {
    this.http.post(this.url+'viewEvent',data)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
 }
 createBackLog(data){
  return new Promise((resolve, reject) => {
    this.http.post(this.url+'createBackLog',data)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
 }

 viewEventDetails(data){
  return new Promise((resolve, reject) => {
    this.http.post(this.url+'viewEventDetails',data)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
 }
 AdminEventEditView(data){
  return new Promise((resolve, reject) => {
    this.http.post(this.url+'AdminEventEditView',data)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
 }

 //  customer list
 customerlist(data){
  return new Promise((resolve, reject) => {
    this.http.post(this.url+'customer',data)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
 }
//  customer view section start
// table view
customertable(data){
  return new Promise((resolve, reject) => {
    this.http.post(this.url+'kpiDashboard',data)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
}
// line
customerLineCurrentMonthView(data){
  return new Promise((resolve, reject) => {
    this.http.post(this.url+'kpiDashboardLineCurrentMonthView',data)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
}
customerLineLastMonthView(data){
  return new Promise((resolve, reject) => {
    this.http.post(this.url+'kpiDashboardLineLastMonthView',data)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
}
// bar
customerBar6View(data){
  return new Promise((resolve, reject) => {
    this.http.post(this.url+'kpiDashboardBar6View',data)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
}
customerbarChartThreeMonths(data){
  return new Promise((resolve, reject) => {
    this.http.post(this.url+'kpiDashboardBar3View',data)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
}

viewBacklogTask(data){
  return new Promise((resolve, reject) => {
    this.http.post(this.url+'viewBacklogTask',data)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
}

// customer view assets
site(data){
  return new Promise((resolve, reject) => {
    this.http.post(this.url+'site',data)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
}
ewtbs(data){
  return new Promise((resolve, reject) => {
    this.http.post(this.url+'view-asset-status',data)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
}
fleetbysite(data){
  return new Promise((resolve, reject) => {
    this.http.post(this.url+'fleet-by-site',data)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
}
viewasset(data){  
  return new Promise((resolve, reject) => {
    this.http.post(this.url+'view-asset-details',data)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
 }
//  componenet
componentCode(data){
  return new Promise((resolve, reject) => {
    this.http.post(this.url+'component-codes',data)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
}
equtment(data){
  return new Promise((resolve, reject) => {
    this.http.post(this.url+'equipment-by-site',data)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
}
dashbordData(data){
  return new Promise((resolve, reject) => {
    this.http.post(this.url+'component-dashboard',data)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
}
// history
dashbordHistory(data){
  return new Promise((resolve, reject) => {
    this.http.post(this.url+'component-history',data)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
}
majorComponenet(data){
  return new Promise((resolve, reject) => {
    this.http.post(this.url+'view-events-for-Major-Components',data)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
}
AdminBacklogEditView(data){
  return new Promise((resolve, reject) => {
    this.http.post(this.url+'AdminBacklogEditView',data)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
}
TaskStatus(data){
  return new Promise((resolve, reject) => {
    this.http.post(this.url+'taskStatus',data)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
}


NotificationCount(data){
  return new Promise((resolve, reject) => {
    this.http.post(this.url+'notificationCount',data)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
}
Notiflist(data){
  return new Promise((resolve, reject) => {
    this.http.post(this.url+'notification',data)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
}
notificationSeen(data){
  return new Promise((resolve, reject) => {
    this.http.post(this.url+'notificationSeen',data)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
}
notificationdel(data){
  return new Promise((resolve, reject) => {
    this.http.post(this.url+'notificationDelete',data)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
}


eventEditAdmin(data){
  return new Promise((resolve, reject) => {
    this.http.post(this.url+'eventEditAdmin',data)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
}
// AdminBacklogEditView(data){

// }
editBackLog(data){
  return new Promise((resolve, reject) => {
    this.http.post(this.url+'editBackLog',data)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
}

ComponentByUser(data){

  return new Promise((resolve, reject) => {
    this.http.post(this.url+'component-codes',data)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
  
}
checklistBySite(data){
  return new Promise((resolve, reject) => {
    this.http.post(this.url+'checklistBySite',data)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
}
AttachWorkOrderView(data){
  return new Promise((resolve, reject) => {
    this.http.post(this.url+'AttachWorkOrderView',data)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
}

AttachWorkorderToEvent(data){
  return new Promise((resolve, reject) => {
    this.http.post(this.url+'AttachWorkorderToEvent',data)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  })
}

equipmentoffline(data){
  return new Promise((resolve, reject) => {
    this.http.post(this.url+'equipment-offline-by-site',data)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  })
}

kpipermission(data){
  return new Promise((resolve, reject) => {
    this.http.post(this.url+'kpi-permission',data)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  })
}
shiftinchargeget(data){
  return new Promise((resolve, reject) => {
    this.http.post(this.url+'shiftincharge',data)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  })
}
AssignEngineerHistory(data){
  return new Promise((resolve, reject) => {
    this.http.post(this.url+'AssignEngineerHistory',data)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  })

}
AssignEngineerToEvent(data){
  return new Promise((resolve, reject) => {
    this.http.post(this.url+'AssignEngineerToEvent',data)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  })
}

userprofile(data){
  return new Promise((resolve, reject) => {
    this.http.post(this.url+'userprofile',data)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  })
}
userProfileEdit(data){
  return new Promise((resolve, reject) => {
    this.http.post(this.url+'userProfileEdit',data)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  })
}
getallComponentCodes(data){
  return new Promise((resolve, reject) => {
    this.http.post(this.url+'getallComponentCodes',data)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  })
}
listLCCWorkflow(data){
  return new Promise((resolve, reject) => {
    this.http.post(this.url+'listLCCWorkflow',data)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  })
}
viewLCCWorkflowDetails(data){
  return new Promise((resolve, reject) => {
    this.http.post(this.url+'viewLCCWorkflowDetails',data)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  })
}
updateLCCWorkflowStatus(data){
  return new Promise((resolve, reject) => {
    this.http.post(this.url+'updateLCCWorkflowStatus',data)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  })
}
requestLCCWorkflowStatusCustomer(data){
  return new Promise((resolve, reject) => {
    this.http.post(this.url+'requestLCCWorkflowStatusCustomer',data)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  })
}

userlog (data){
  return new Promise((resolve, reject) => {
    this.http.post(this.url+'user-log ',data)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  })
}
getIPLocalSavedChecklists(data){
  return new Promise((resolve, reject) => {
    this.http.post(this.url+'getIPLocalSavedChecklists',data)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  })
}

getSESubmittedChecklists(data){
  return new Promise((resolve, reject) => {
    this.http.post(this.url+'getSESubmittedChecklists',data)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  })
}
editAnswerAgainstQuestionSubmitMM(data){
  return new Promise((resolve, reject) => {
    this.http.post(this.url+'editAnswerAgainstQuestionSubmitMM',data)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  })
}
editAnswerAgainstQuestionSave(data){
  return new Promise((resolve, reject) => {
    this.http.post(this.url+'editAnswerAgainstQuestionSave',data)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  })
}
deleteIPLocalSavedChecklists(data){
  return new Promise((resolve, reject) => {
    this.http.post(this.url+'deleteIPLocalSavedChecklists',data)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  })
}


answersave(data){
  return new Promise((resolve, reject) => {
    this.http.post(this.url+'answer-save',data)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  })
}
requestLCCWorkflowStatusAll(data){
  return new Promise((resolve, reject) => {
    this.http.post(this.url+'requestLCCWorkflowStatusAll',data)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  })
}
offlineDownload(data){
  return new Promise((resolve, reject) => {
    this.http.post(this.url+'downloadOfflinedata',data)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  })
}
getOfflineTask(data){
  return new Promise((resolve, reject) => {
    this.http.post(this.url+'getOfflineTask',data)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  })
}

offlineSyn(data){
  return new Promise((resolve, reject) => {
    this.http.post(this.url+'syncOfflineEventTaskdata',data)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  })
}


// offline sync
// syncOfflineEventdata  parameter: token,arrOfflineEventCreate
getOfflineInspection(data){
  return new Promise((resolve, reject) => {
    this.http.post(this.url+'getOfflineInspection',data)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  })
}
syncOfflineEventdata(data){
  return new Promise((resolve, reject) => {
    this.http.post(this.url+'syncOfflineEventdata',data)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  })
}
syncOfflineInspection(data){
  return new Promise((resolve, reject) => {
    this.http.post(this.url+'syncOfflineInspection',data)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  })
}
syncOfflineEventEditdata(data){
  return new Promise((resolve, reject) => {
    this.http.post(this.url+'syncOfflineEventEditdata',data)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  })
}
deleteSESubmittedChecklists(data){
  return new Promise((resolve, reject) => {
    this.http.post(this.url+'deleteSESubmittedChecklists',data)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  })
}
syncOfflineTaskEditdata(data){
  return new Promise((resolve, reject) => {
    this.http.post(this.url+'syncOfflineTaskEditdata',data)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  })

 
}
syncOfflineTaskdata(data){
  return new Promise((resolve, reject) => {
    this.http.post(this.url+'syncOfflineTaskdata',data)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  })

 
}
}