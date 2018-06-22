import { SimonaPage } from './app.po';

describe('simona App', () => {
  let page: SimonaPage;

  beforeEach(() => {
    page = new SimonaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
