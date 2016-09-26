import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { CompanyAddComponent } from '../../company-add.component';

import {
    FormGroup,
    ReactiveFormsModule
} from '@angular/forms';

let comp:    CompanyAddComponent;
let fixture: ComponentFixture<CompanyAddComponent>;
let el:      DebugElement;

describe('CompanyAddComponent', () => {
  beforeEach( async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyAddComponent ],
      imports: [ReactiveFormsModule]
    })
    .compileComponents(); // compile template and css
  }));
 

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyAddComponent ], // declare the test component
    });
   
    fixture = TestBed.createComponent(CompanyAddComponent);
  
    comp = fixture.componentInstance; // BannerComponent test instance
    console.info('got here: ' + fixture)
    // get title DebugElement by element name
    el = fixture.debugElement.query(By.css('panel-heading'));
  });

  it('should display original title', () => {
     expect(el.nativeElement.textContent).toContain('Add Company:');
  });
  
  it('should display a different test title', () => {
   
    expect(el.nativeElement.textContent).toContain('Test Title');
  });

});

