import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomePageComponent} from './components/home-page/home-page.component';
import {MenuBarComponent} from './components/menu-bar/menu-bar.component';
import {LoginComponent} from './components/login/login.component';
import {SignupComponent} from './components/signup/signup.component';
import {Mechanics1Component} from './components/mechanics/mechanics1/mechanics1.component';
import {Mechanics2Component} from './components/mechanics/mechanics2/mechanics2.component';
import {Mechanics3Component} from './components/mechanics/mechanics3/mechanics3.component';
import {Mechanics4Component} from './components/mechanics/mechanics4/mechanics4.component';
import {Mechanics5Component} from './components/mechanics/mechanics5/mechanics5.component';
import {Mechanics6Component} from './components/mechanics/mechanics6/mechanics6.component';
import {Mechanics7Component} from './components/mechanics/mechanics7/mechanics7.component';
import {Mechanics8Component} from './components/mechanics/mechanics8/mechanics8.component';
import {Mechanics9Component} from './components/mechanics/mechanics9/mechanics9.component';
import {Mechanics10Component} from './components/mechanics/mechanics10/mechanics10.component';
import {Mechanics11Component} from './components/mechanics/mechanics11/mechanics11.component';
import {Mechanics12Component} from './components/mechanics/mechanics12/mechanics12.component';
import {Mechanics13Component} from './components/mechanics/mechanics13/mechanics13.component';
import {Mechanics14Component} from './components/mechanics/mechanics14/mechanics14.component';
import {Mechanics15Component} from './components/mechanics/mechanics15/mechanics15.component';
import {Mechanics16Component} from './components/mechanics/mechanics16/mechanics16.component';
import {Mechanics17Component} from './components/mechanics/mechanics17/mechanics17.component';
import {Mechanics18Component} from './components/mechanics/mechanics18/mechanics18.component';
import {Mechanics19Component} from './components/mechanics/mechanics19/mechanics19.component';
import {Mechanics20Component} from './components/mechanics/mechanics20/mechanics20.component';
import {Electrical1Component} from './components/electrical/electrical1/electrical1.component';
import {Electrical2Component} from './components/electrical/electrical2/electrical2.component';
import {Electrical3Component} from './components/electrical/electrical3/electrical3.component';
import {Electrical4Component} from './components/electrical/electrical4/electrical4.component';
import {Electrical5Component} from './components/electrical/electrical5/electrical5.component';
import {Electrical6Component} from './components/electrical/electrical6/electrical6.component';
import {Electrical7Component} from './components/electrical/electrical7/electrical7.component';
import {Electrical8Component} from './components/electrical/electrical8/electrical8.component';
import {Electrical9Component} from './components/electrical/electrical9/electrical9.component';
import {Electrical10Component} from './components/electrical/electrical10/electrical10.component';
import {Electronics1Component} from './components/electronics/electronics1/electronics1.component';
import {Electronics2Component} from './components/electronics/electronics2/electronics2.component';
import {Electronics3Component} from './components/electronics/electronics3/electronics3.component';
import {Electronics4Component} from './components/electronics/electronics4/electronics4.component';
import {Electronics5Component} from './components/electronics/electronics5/electronics5.component';
import {ElectroStaticFields1Component} from './components/electrostaticFields/electro-static-fields1/electro-static-fields1.component';
import {ElectroStaticFields2Component} from './components/electrostaticFields/electro-static-fields2/electro-static-fields2.component';
import {ElectroStaticFields3Component} from './components/electrostaticFields/electro-static-fields3/electro-static-fields3.component';
import {ElectroStaticFields4Component} from './components/electrostaticFields/electro-static-fields4/electro-static-fields4.component';
import {ElectroStaticFields5Component} from './components/electrostaticFields/electro-static-fields5/electro-static-fields5.component';
import {ElectroStaticFields6Component} from './components/electrostaticFields/electro-static-fields6/electro-static-fields6.component';
import {ElectroStaticFields7Component} from './components/electrostaticFields/electro-static-fields7/electro-static-fields7.component';
import {GravitationalFields1Component} from './components/gravitationalFields/gravitational-fields1/gravitational-fields1.component';
import {GravitationalFields2Component} from './components/gravitationalFields/gravitational-fields2/gravitational-fields2.component';
import {GravitationalFields3Component} from './components/gravitationalFields/gravitational-fields3/gravitational-fields3.component';
import {GravitationalFields4Component} from './components/gravitationalFields/gravitational-fields4/gravitational-fields4.component';
import {GravitationalFields5Component} from './components/gravitationalFields/gravitational-fields5/gravitational-fields5.component';
import {Light1Component} from './components/light/light1/light1.component';
import {Light2Component} from './components/light/light2/light2.component';
import {Light3Component} from './components/light/light3/light3.component';
import {Light4Component} from './components/light/light4/light4.component';
import {Light5Component} from './components/light/light5/light5.component';
import {Light6Component} from './components/light/light6/light6.component';
import {Light7Component} from './components/light/light7/light7.component';
import {Light8Component} from './components/light/light8/light8.component';
import {Light9Component} from './components/light/light9/light9.component';
import {Light10Component} from './components/light/light10/light10.component';
import {Light11Component} from './components/light/light11/light11.component';
import {Light12Component} from './components/light/light12/light12.component';
import {Light13Component} from './components/light/light13/light13.component';
import {Light14Component} from './components/light/light14/light14.component';
import {MagneticFields1Component} from './components/magneticFields/magnetic-fields1/magnetic-fields1.component';
import {MagneticFields2Component} from './components/magneticFields/magnetic-fields2/magnetic-fields2.component';
import {MagneticFields3Component} from './components/magneticFields/magnetic-fields3/magnetic-fields3.component';
import {MagneticFields4Component} from './components/magneticFields/magnetic-fields4/magnetic-fields4.component';
import {MagneticFields5Component} from './components/magneticFields/magnetic-fields5/magnetic-fields5.component';
import {MagneticFields6Component} from './components/magneticFields/magnetic-fields6/magnetic-fields6.component';
import {MagneticFields7Component} from './components/magneticFields/magnetic-fields7/magnetic-fields7.component';
import {MagneticFields8Component} from './components/magneticFields/magnetic-fields8/magnetic-fields8.component';
import {MagneticFields9Component} from './components/magneticFields/magnetic-fields9/magnetic-fields9.component';
import {MagneticFields10Component} from './components/magneticFields/magnetic-fields10/magnetic-fields10.component';
import {MagneticFields11Component} from './components/magneticFields/magnetic-fields11/magnetic-fields11.component';
import {MagneticFields12Component} from './components/magneticFields/magnetic-fields12/magnetic-fields12.component';
import {Measurement1Component} from './components/measurements/measurement1/measurement1.component';
import {MechanicalProperties1Component} from './components/mechanicalPropertiesOfMaterials/mechanical-properties1/mechanical-properties1.component';
import {MechanicalProperties2Component} from './components/mechanicalPropertiesOfMaterials/mechanical-properties2/mechanical-properties2.component';
import {MechanicalProperties3Component} from './components/mechanicalPropertiesOfMaterials/mechanical-properties3/mechanical-properties3.component';
import {Radiation1Component} from './components/radiation/radiation1/radiation1.component';
import {Radiation2Component} from './components/radiation/radiation2/radiation2.component';
import {Radiation3Component} from './components/radiation/radiation3/radiation3.component';
import {Radiation4Component} from './components/radiation/radiation4/radiation4.component';
import {ThermalPhysics1Component} from './components/thermalPhysics/thermal-physics1/thermal-physics1.component';
import {ThermalPhysics2Component} from './components/thermalPhysics/thermal-physics2/thermal-physics2.component';
import {ThermalPhysics3Component} from './components/thermalPhysics/thermal-physics3/thermal-physics3.component';
import {ThermalPhysics4Component} from './components/thermalPhysics/thermal-physics4/thermal-physics4.component';
import {ThermalPhysics5Component} from './components/thermalPhysics/thermal-physics5/thermal-physics5.component';
import {ThermalPhysics6Component} from './components/thermalPhysics/thermal-physics6/thermal-physics6.component';
import {ThermalPhysics7Component} from './components/thermalPhysics/thermal-physics7/thermal-physics7.component';
import {ThermalPhysics8Component} from './components/thermalPhysics/thermal-physics8/thermal-physics8.component';
import {ThermalPhysics9Component} from './components/thermalPhysics/thermal-physics9/thermal-physics9.component';
import {ElectronicsDiodeComponent} from './components/electronics/theory/electronics-diode/electronics-diode.component';
import {ElectronicsTransistorComponent} from './components/electronics/theory/electronics-transistor/electronics-transistor.component';
import {ElectronicsICComponent} from './components/electronics/theory/electronics-ic/electronics-ic.component';
import {ElectronicsGateComponent} from './components/electronics/theory/electronics-gate/electronics-gate.component';
import {Mcq2019Component} from './components/pastPapers/2019AL/mcq2019/mcq2019.component';
import {SEssay2019Component} from './components/pastPapers/2019AL/s-essay2019/s-essay2019.component';
import {Essay2019Component} from './components/pastPapers/2019AL/essay2019/essay2019.component';
import {MeasurementInstrumentsComponent} from './components/measurements/theory/measurement-instruments/measurement-instruments.component';
import {Grade12QuestionDiscussionComponent} from './components/home-page/home-page-expand/grade12-question-discussion/grade12-question-discussion.component';
import {Grade13QuestionDiscussionComponent} from './components/home-page/home-page-expand/grade13-question-discussion/grade13-question-discussion.component';
import {TheoryComponent} from './components/home-page/home-page-expand/theory/theory.component';
import {PaperDiscussionComponent} from './components/home-page/home-page-expand/paper-discussion/paper-discussion.component';
import {PastPapersDownloadComponent} from './components/home-page/home-page-expand/past-papers-download/past-papers-download.component';
import {SyllabusComponent} from './components/home-page/home-page-expand/syllabus/syllabus.component';
import {SpecialQustionComponent} from './components/home-page/home-page-expand/special-qustion/special-qustion.component';


const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'homePage', component: HomePageComponent},
  {path: 'menuBar', component: MenuBarComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signUp', component: SignupComponent},
  {
    path: 'mechanics',
    children: [
      {path: 'page1', component: Mechanics1Component},
      {path: 'page2', component: Mechanics2Component},
      {path: 'page3', component: Mechanics3Component},
      {path: 'page4', component: Mechanics4Component},
      {path: 'page5', component: Mechanics5Component},
      {path: 'page6', component: Mechanics6Component},
      {path: 'page7', component: Mechanics7Component},
      {path: 'page8', component: Mechanics8Component},
      {path: 'page9', component: Mechanics9Component},
      {path: 'page10', component: Mechanics10Component},
      {path: 'page11', component: Mechanics11Component},
      {path: 'page12', component: Mechanics12Component},
      {path: 'page13', component: Mechanics13Component},
      {path: 'page14', component: Mechanics14Component},
      {path: 'page15', component: Mechanics15Component},
      {path: 'page16', component: Mechanics16Component},
      {path: 'page17', component: Mechanics17Component},
      {path: 'page18', component: Mechanics18Component},
      {path: 'page19', component: Mechanics19Component},
      {path: 'page20', component: Mechanics20Component},
    ]
  },
  {
    path: 'electrical',
    children: [
      {path: 'page1', component: Electrical1Component},
      {path: 'page2', component: Electrical2Component},
      {path: 'page3', component: Electrical3Component},
      {path: 'page4', component: Electrical4Component},
      {path: 'page5', component: Electrical5Component},
      {path: 'page6', component: Electrical6Component},
      {path: 'page7', component: Electrical7Component},
      {path: 'page8', component: Electrical8Component},
      {path: 'page9', component: Electrical9Component},
      {path: 'page10', component: Electrical10Component}
    ]
  },
  {
    path: 'electronics',
    children: [
      {path: 'page1', component: Electronics1Component},
      {path: 'page2', component: Electronics2Component},
      {path: 'page3', component: Electronics3Component},
      {path: 'page4', component: Electronics4Component},
      {path: 'page5', component: Electronics5Component}
    ]
  },
  {
    path: 'electronicsTheory',
    children: [
      {path: 'diode', component: ElectronicsDiodeComponent},
      {path: 'transistor', component: ElectronicsTransistorComponent},
      {path: 'ic', component: ElectronicsICComponent},
      {path: 'gate', component: ElectronicsGateComponent},
    ]
  },
  {
    path: 'electrostaticFields',
    children: [
      {path: 'page1', component: ElectroStaticFields1Component},
      {path: 'page2', component: ElectroStaticFields2Component},
      {path: 'page3', component: ElectroStaticFields3Component},
      {path: 'page4', component: ElectroStaticFields4Component},
      {path: 'page5', component: ElectroStaticFields5Component},
      {path: 'page6', component: ElectroStaticFields6Component},
      {path: 'page7', component: ElectroStaticFields7Component}
    ]
  },
  {
    path: 'gravitationalFields',
    children: [
      {path: 'page1', component: GravitationalFields1Component},
      {path: 'page2', component: GravitationalFields2Component},
      {path: 'page3', component: GravitationalFields3Component},
      {path: 'page4', component: GravitationalFields4Component},
      {path: 'page5', component: GravitationalFields5Component}
    ]
  },
  {
    path: 'light',
    children: [
      {path: 'page1', component: Light1Component},
      {path: 'page2', component: Light2Component},
      {path: 'page3', component: Light3Component},
      {path: 'page4', component: Light4Component},
      {path: 'page5', component: Light5Component},
      {path: 'page6', component: Light6Component},
      {path: 'page7', component: Light7Component},
      {path: 'page8', component: Light8Component},
      {path: 'page9', component: Light9Component},
      {path: 'page10', component: Light10Component},
      {path: 'page11', component: Light11Component},
      {path: 'page12', component: Light12Component},
      {path: 'page13', component: Light13Component},
      {path: 'page14', component: Light14Component}
    ]
  },
  {
    path: 'magneticFields',
    children: [
      {path: 'page1', component: MagneticFields1Component},
      {path: 'page2', component: MagneticFields2Component},
      {path: 'page3', component: MagneticFields3Component},
      {path: 'page4', component: MagneticFields4Component},
      {path: 'page5', component: MagneticFields5Component},
      {path: 'page6', component: MagneticFields6Component},
      {path: 'page7', component: MagneticFields7Component},
      {path: 'page8', component: MagneticFields8Component},
      {path: 'page9', component: MagneticFields9Component},
      {path: 'page10', component: MagneticFields10Component},
      {path: 'page11', component: MagneticFields11Component},
      {path: 'page12', component: MagneticFields12Component}
    ]
  },
  {
    path: 'measurement',
    children: [
      {path: 'page1', component: Measurement1Component}
    ]
  }
  ,
  {
    path: 'measurementTheory',
    children: [
      {path: 'instruments', component: MeasurementInstrumentsComponent},
    ]
  },
  {
    path: 'mechanicalProperties',
    children: [
      {path: 'page1', component: MechanicalProperties1Component},
      {path: 'page2', component: MechanicalProperties2Component},
      {path: 'page3', component: MechanicalProperties3Component}
    ]
  },
  {
    path: 'radiation',
    children: [
      {path: 'page1', component: Radiation1Component},
      {path: 'page2', component: Radiation2Component},
      {path: 'page3', component: Radiation3Component},
      {path: 'page4', component: Radiation4Component}
    ]
  },
  {
    path: 'thermalPhysics',
    children: [
      {path: 'page1', component: ThermalPhysics1Component},
      {path: 'page2', component: ThermalPhysics2Component},
      {path: 'page3', component: ThermalPhysics3Component},
      {path: 'page4', component: ThermalPhysics4Component},
      {path: 'page5', component: ThermalPhysics5Component},
      {path: 'page6', component: ThermalPhysics6Component},
      {path: 'page7', component: ThermalPhysics7Component},
      {path: 'page8', component: ThermalPhysics8Component},
      {path: 'page9', component: ThermalPhysics9Component}
    ]
  },
  {
    path: 'pastPapers',
    children: [
      {path: 'mcq2019', component: Mcq2019Component},
      {path: 'sEssay2019', component: SEssay2019Component},
      {path: 'essay2019', component: Essay2019Component},
    ]
  },
  {
    path: 'homePageExpand',
    children: [
      {path: 'theoryPage', component: TheoryComponent},
      {path: 'grade12QuestionPage', component: Grade12QuestionDiscussionComponent},
      {path: 'grade13QuestionPage', component: Grade13QuestionDiscussionComponent},
      {path: 'paperDiscussionPage', component: PaperDiscussionComponent},
      {path: 'paperDownloadPage', component: PastPapersDownloadComponent},
      {path: 'syllabusPage', component: SyllabusComponent},
      {path: 'specialQuestionPage', component: SpecialQustionComponent},
    ]
  },
  {path: '**', component: HomePageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
