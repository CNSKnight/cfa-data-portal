import { DlSidebarNavModule } from './dl-sidebar-nav.module';

describe('DlSidebarNavModule', () => {
  let dlSidebarNavModule: DlSidebarNavModule;

  beforeEach(() => {
    dlSidebarNavModule = new DlSidebarNavModule();
  });

  it('should create an instance', () => {
    expect(dlSidebarNavModule).toBeTruthy();
  });
});
