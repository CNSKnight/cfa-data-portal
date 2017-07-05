import { DlMyAccountModule } from './dl-my-account.module';

describe('DlMyAccountModule', () => {
  let dlMyAccountModule: DlMyAccountModule;

  beforeEach(() => {
    dlMyAccountModule = new DlMyAccountModule();
  });

  it('should create an instance', () => {
    expect(dlMyAccountModule).toBeTruthy();
  });
});
