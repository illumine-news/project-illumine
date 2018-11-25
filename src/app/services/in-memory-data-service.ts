import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const articles = [
    {id: 1, articleName: 'On Geralt and Toe Stubbing', authorName: "Andrzej Sapkowski", datePublished: new Date('December 17, 1995 03:24:00')},
    {id: 2, articleName: 'Wines of Toussant', authorName: "Andrzej Sapkowski", datePublished: new Date('October 15, 2004 01:19:05')},
    {id: 3, articleName: 'Mechanical Man', authorName: "Chris Roberts", datePublished: new Date('June 27, 2016 21:14:35')},
    {id: 4, articleName: 'Moonlighters', authorName: "Eric Roberts", datePublished: null},
    {id: 5, articleName: 'How to build poison tolerance', authorName: "John Roberts", datePublished: null},
    {id: 6, articleName: 'Guide to Griefing', authorName: "Otzdarva", datePublished: null},
    {id: 7, articleName: 'Presidents and Pancakes', authorName: "George Stephanopolous", datePublished: null},
    {id: 8, articleName: 'Righteous Fury', authorName: "Brad Pitt", datePublished: null},
    {id: 9, articleName: 'What is a polling error?', authorName: "Nate Silver", datePublished: null},
    {id: 10, articleName: 'Neon Demons', authorName: "Elle Fanning", datePublished: null},
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
    return {articles, organizations};
  }
}