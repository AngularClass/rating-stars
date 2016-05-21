import {
  beforeEachProviders,
  inject,
  describe,
  expect,
  beforeEach,
  async,
  it
} from '@angular/core/testing';
import { TestComponentBuilder, ComponentFixture } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { AcStar } from './star';

@Component({
  selector: 'test-container',
  template: '<ac-star></ac-star>',
  directives: [AcStar]
})
class TestComponent {}

describe('AcStar Component', () => {
  let builder: TestComponentBuilder;

  beforeEach(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    builder = tcb;
  }));

  it ('should display a star', async(() => (
    builder.createAsync(TestComponent)
    .then((fixture: ComponentFixture<TestComponent>) => {
      let span = fixture.nativeElement.querySelector('span');
      expect(span).toHaveText('★');
    })
  )))
});
