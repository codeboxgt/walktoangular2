import { AngularFormsDemoPage } from './app.po';

describe('angular-forms-demo App', () => {
  let page: AngularFormsDemoPage;

  beforeEach(() => {
    page = new AngularFormsDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
