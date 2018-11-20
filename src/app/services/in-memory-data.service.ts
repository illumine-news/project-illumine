import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const articles = [
      { id: 11, name: 'A Defense of Abortion' },
      { id: 12, name: 'On Geralt and Toe Stubbing' },
      { id: 13, name: 'Wines of Toussant' },
      { id: 14, name: 'Mechanical Men' },
      { id: 15, name: 'Moonlighters' },
      { id: 16, name: 'How to build poison tolerance' },
      { id: 17, name: 'Guide to Griefing' },
      { id: 18, name: 'Presidents and Pancakes' },
      { id: 19, name: 'Righteous Fury' },
      { id: 20, name: 'Do you know what a polling error is?' }
    ];
    return {articles};


    //TODO: find a way to return both mock data sets (or implement for real)
    const organizations = [
      { id: 11, name: 'Reuters' },
      { id: 12, name: 'New York Times' },
      { id: 13, name: 'Washington Post' },
      { id: 14, name: 'CNN' },
      { id: 15, name: 'BBC' },
      { id: 16, name: 'MSNBC' },
      { id: 17, name: 'Fox News' },
      { id: 18, name: 'Wall Street Journal' },
      { id: 19, name: 'The Atlantic' },
      { id: 20, name: 'FiveThirtyEight' }
    ];
    return {organizations};
  }
}