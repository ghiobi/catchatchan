import { TestBed, inject } from '@angular/core/testing';

import { ChannelResolver } from './channel.resolver';

describe('ChannelResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChannelResolver]
    });
  });

  it('should ...', inject([ChannelResolver], (service: ChannelResolver) => {
    expect(service).toBeTruthy();
  }));
});
