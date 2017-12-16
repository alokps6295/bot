import { Component } from '@angular/core';

import { RedditPage } from '../reddits/reddit';
import { settingPage } from '../settings/setting';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = RedditPage;
  tab3Root = settingPage;

  constructor() {

  }
}
