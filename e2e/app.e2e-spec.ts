import { YtsapiparserPage } from './app.po';

describe('ytsapiparser App', () => {
  let page: YtsapiparserPage;

  beforeEach(() => {
    page = new YtsapiparserPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
