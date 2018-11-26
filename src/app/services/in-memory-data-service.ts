import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const articles = [
      { id: 1, articleName: 'On Geralt and Toe Stubbing', authorName: "Andrzej Sapkowski", organizationId: 20, datePublished: new Date('December 17, 1995 03:24:00'), illumineScore: 99},
      { id: 2, articleName: 'Wines of Toussant', authorName: "Andrzej Sapkowski", organizationId: 12, datePublished: new Date('October 15, 2004 01:19:05'), illumineScore: 92 },
      { id: 3, articleName: 'Mechanical Man', authorName: "Chris Roberts", organizationId: 17, datePublished: new Date('June 27, 2016 21:14:35'), illumineScore: 73 },
      { id: 4, articleName: 'Moonlighters', authorName: "Eric Roberts", organizationId: 14, datePublished: 'April 14, 1984 21:14:35', illumineScore: 84},
      { id: 5, articleName: 'How to build poison tolerance', organizationId: 15, authorName: "John Roberts", datePublished: 'March 16, 1920 21:14:35', illumineScore: 12 },
      { id: 6, articleName: 'Guide to Griefing', authorName: "Otzdarva", organizationId: 19, datePublished: 'February 16, 2011 21:14:35', illumineScore: 67},
      { id: 7, articleName: 'Presidents and Pancakes', authorName: "George Stephanopolous", organizationId: 16, datePublished: 'June 15, 2013 21:14:35', illumineScore: 25 },
      { id: 8, articleName: 'Righteous Fury', authorName: "Brad Pitt", organizationId: 14, datePublished: 'January 10, 2010 21:14:35', illumineScore: 58 },
      { id: 9, articleName: 'What is a polling error?', authorName: "Nate Silver", organizationId: 20, datePublished: 'October 30, 2001 21:14:35', illumineScore: 82 },
      { id: 10, articleName: 'Neon Demons', authorName: "Elle Fanning", organizationId: 11, datePublished: 'June 18, 2015 21:14:35', illumineScore: 7 },
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