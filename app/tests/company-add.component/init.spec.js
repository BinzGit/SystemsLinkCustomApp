System.register(['@angular/core/testing', '@angular/platform-browser', '../../company-add.component', '@angular/forms'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, platform_browser_1, company_add_component_1, forms_1;
    var comp, fixture, el;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (company_add_component_1_1) {
                company_add_component_1 = company_add_component_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            }],
        execute: function() {
            describe('CompanyAddComponent', function () {
                beforeEach(testing_1.async(function () {
                    testing_1.TestBed.configureTestingModule({
                        declarations: [company_add_component_1.CompanyAddComponent],
                        imports: [forms_1.ReactiveFormsModule]
                    })
                        .compileComponents(); // compile template and css
                }));
                beforeEach(function () {
                    testing_1.TestBed.configureTestingModule({
                        declarations: [company_add_component_1.CompanyAddComponent],
                    });
                    fixture = testing_1.TestBed.createComponent(company_add_component_1.CompanyAddComponent);
                    comp = fixture.componentInstance; // BannerComponent test instance
                    console.info('got here: ' + fixture);
                    // get title DebugElement by element name
                    el = fixture.debugElement.query(platform_browser_1.By.css('panel-heading'));
                });
                it('should display original title', function () {
                    expect(el.nativeElement.textContent).toContain('Add Company:');
                });
                it('should display a different test title', function () {
                    expect(el.nativeElement.textContent).toContain('Test Title');
                });
            });
        }
    }
});
//# sourceMappingURL=init.spec.js.map