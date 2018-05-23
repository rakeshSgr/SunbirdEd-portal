import { TelemetryLogDirective } from './telemetry-log.directive';
import { TelemetryService, TELEMETRY_PROVIDER } from '../../services';
import {TestBed, ComponentFixture} from '@angular/core/testing';
import {eventData} from './telemetry-log.directive.spec.data';
describe('TelemetryLogDirective', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TelemetryLogDirective],
      providers: [TelemetryService, { provide: TELEMETRY_PROVIDER, useValue: EkTelemetry}]
    });
  });
  it('should create an instance', () => {
    const telemetryService = TestBed.get(TelemetryService);
    const directive = new TelemetryLogDirective(telemetryService);
    expect(directive).toBeTruthy();
  });
  fit('should take input', () => {
    const telemetryService = TestBed.get(TelemetryService);
    const directive = new TelemetryLogDirective(telemetryService);
    directive.appTelemetryLog = eventData.inputData;
    expect(directive.appTelemetryLog).toBeDefined();
    expect(directive.appTelemetryLog).toBe(eventData.inputData);
  });
});
