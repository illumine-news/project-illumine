import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const articles = [
      { id: 1, articleName: 'On Geralt and Toe Stubbing', authorName: "Andrzej Sapkowski", orgId: 20, datePublished: new Date('December 17, 1995 03:24:00') },
      { id: 2, articleName: 'Wines of Toussant', authorName: "Andrzej Sapkowski", orgId: 12, datePublished: new Date('October 15, 2004 01:19:05') },
      { id: 3, articleName: 'Mechanical Man', authorName: "Chris Roberts", orgId: 17, datePublished: new Date('June 27, 2016 21:14:35') },
      { id: 4, articleName: 'Moonlighters', authorName: "Eric Roberts", orgId: 14, datePublished: null },
      { id: 5, articleName: 'How to build poison tolerance', orgId: 15, authorName: "John Roberts", datePublished: null },
      { id: 6, articleName: 'Guide to Griefing', authorName: "Otzdarva", orgId: 19, datePublished: null },
      { id: 7, articleName: 'Presidents and Pancakes', authorName: "George Stephanopolous", orgId: 16, datePublished: null },
      { id: 8, articleName: 'Righteous Fury', authorName: "Brad Pitt", orgId: 14, datePublished: null },
      { id: 9, articleName: 'What is a polling error?', authorName: "Nate Silver", orgId: 20, datePublished: null },
      { id: 10, articleName: 'Neon Demons', authorName: "Elle Fanning", orgId: 11, datePublished: null },
    ];
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
    return { articles, organizations };
  }
}