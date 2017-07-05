import { UnitTestAgularPage } from './app.po';

describe('unit-test-agular App', () => {
  let page: UnitTestAgularPage;

  beforeEach(() => {
    page = new UnitTestAgularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
