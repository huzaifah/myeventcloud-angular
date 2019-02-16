import { MyEventCloudTemplatePage } from './app.po';

describe('MyEventCloud App', function() {
  let page: MyEventCloudTemplatePage;

  beforeEach(() => {
    page = new MyEventCloudTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
