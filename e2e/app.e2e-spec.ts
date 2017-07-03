import { EjemploToDoAngular2Page } from './app.po';

describe('ejemplo-to-do-angular2 App', function() {
  let page: EjemploToDoAngular2Page;

  beforeEach(() => {
    page = new EjemploToDoAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
