import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  editorialText: string = `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc congue porttitor quam eu dignissim. Morbi fermentum eget ex ut ullamcorper. Pellentesque sit amet erat a est auctor gravida. Nulla egestas commodo ullamcorper. Proin ornare tempus ante in ultrices. Proin feugiat, dolor a ultrices iaculis, mi risus semper orci, vitae lobortis est mi at libero. Donec imperdiet elit nec quam iaculis, eu vehicula diam lacinia. Nam lacinia ex et arcu tincidunt, et iaculis mi euismod.</p>

  <p>Praesent maximus odio lobortis euismod viverra. Aliquam hendrerit tempor purus eget interdum. Aliquam erat volutpat. Vestibulum efficitur sem ut dui faucibus, vitae ultrices justo viverra. Ut nunc erat, dignissim eget ipsum quis, laoreet vehicula urna. Quisque eu efficitur felis. Nulla auctor sapien et eleifend interdum. Praesent at dolor felis. Sed nec erat a mauris cursus eleifend et in orci. Nam ut erat sit amet ante ullamcorper ultricies. Aenean faucibus ac quam a tempus. Pellentesque ornare commodo massa et vestibulum. Ut ac massa ut risus bibendum laoreet fermentum quis ligula. In pretium pulvinar dui eget pulvinar.</p>
  
  <p>Praesent quis eros id leo ullamcorper vulputate. Etiam at tortor convallis, imperdiet tortor a, euismod velit. Aenean mattis leo sed purus pulvinar lobortis. Vestibulum mi tellus, luctus ac consequat et, mollis at est. Aliquam et orci tellus. Quisque pretium feugiat nibh at malesuada. Nulla id est non lorem cursus porttitor.</p>`

  reviewTextGood: string = `<p>GOOD: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc congue porttitor quam eu dignissim. Morbi fermentum eget ex ut ullamcorper. Pellentesque sit amet erat a est auctor gravida. Nulla egestas commodo ullamcorper. Proin ornare tempus ante in ultrices. Proin feugiat, dolor a ultrices iaculis, mi risus semper orci, vitae lobortis est mi at libero. Donec imperdiet elit nec quam iaculis, eu vehicula diam lacinia. Nam lacinia ex et arcu tincidunt, et iaculis mi euismod.</p>`

  reviewTextBad: string = `<p>BAD: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc congue porttitor quam eu dignissim. Morbi fermentum eget ex ut ullamcorper. Pellentesque sit amet erat a est auctor gravida. Nulla egestas commodo ullamcorper. Proin ornare tempus ante in ultrices. Proin feugiat, dolor a ultrices iaculis, mi risus semper orci, vitae lobortis est mi at libero. Donec imperdiet elit nec quam iaculis, eu vehicula diam lacinia. Nam lacinia ex et arcu tincidunt, et iaculis mi euismod.</p>`


  createDb() {
    const articles = [
      { id: 1, articleName: 'On Geralt and Toe Stubbing', authorName: "Andrzej Sapkowski", organizationName: "FiveThirtyEight", datePublished: new Date('December 17, 1995 03:24:00'), illumineScore: 99 },
      { id: 2, articleName: 'Wines of Toussant', authorName: "Andrzej Sapkowski", organizationName: "New York Times", datePublished: new Date('October 15, 2004 01:19:05'), illumineScore: 92 },
      { id: 3, articleName: 'Mechanical Man', authorName: "Chris Roberts", organizationName: "Fox News", datePublished: new Date('June 27, 2016 21:14:35'), illumineScore: 73 },
      { id: 4, articleName: 'Moonlighters', authorName: "Eric Roberts", organizationName: "CNN", datePublished: 'April 14, 1984 21:14:35', illumineScore: 84 },
      { id: 5, articleName: 'How to build poison tolerance', organizationName: "BBC", authorName: "John Roberts", datePublished: 'March 16, 1920 21:14:35', illumineScore: 12 },
      { id: 6, articleName: 'Guide to Griefing', authorName: "Otzdarva", organizationName: "The Atlantic", datePublished: 'February 16, 2011 21:14:35', illumineScore: 67 },
      { id: 7, articleName: 'Presidents and Pancakes', authorName: "George Stephanopolous", organizationName: "MSNBC", datePublished: 'June 15, 2013 21:14:35', illumineScore: 25 },
      { id: 8, articleName: 'Righteous Fury', authorName: "Brad Pitt", organizationName: "CNN", datePublished: 'January 10, 2010 21:14:35', illumineScore: 58 },
      { id: 9, articleName: 'What went wrong in 2016', authorName: "Nate Silver", organizationName: "FiveThirtyEight", datePublished: 'October 30, 2001 21:14:35', illumineScore: 82 },
      { id: 10, articleName: 'Neon Demons', authorName: "Elle Fanning", organizationName: "Reuters", datePublished: 'June 18, 2015 21:14:35', illumineScore: 7 },
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
    const editorials = [
      { id: 21, editorialName: 'Journalism in numbers', authorName: "Nate Silver", organizationName: "FiveThirtyEight", text: this.editorialText, datePublished: new Date('December 17, 1995 03:24:00'), illumineScore: 99 },
      { id: 22, editorialName: 'How to spot fake news', authorName: "Maarten Shenck", organizationName: "New York Times", datePublished: new Date('October 15, 2004 01:19:05'), illumineScore: 92 },
      { id: 23, editorialName: 'Signs an article was rushed', authorName: "Juiliette Lewis", organizationName: "Fox News", datePublished: new Date('June 27, 2016 21:14:35'), illumineScore: 73 },
      { id: 24, editorialName: 'Dealing with trolls', authorName: "Elizabeth Warren", organizationName: "CNN", datePublished: 'April 14, 1984 21:14:35', illumineScore: 84 },
      { id: 25, editorialName: 'Help - my father reads InfoWars', organizationName: "BBC", authorName: "John Roberts", datePublished: 'March 16, 1920 21:14:35', illumineScore: 12 },
      { id: 26, editorialName: 'Effects of money on news', authorName: "Ann Coulter", organizationName: "The Atlantic", datePublished: 'February 16, 2011 21:14:35', illumineScore: 67 },
      { id: 27, editorialName: 'Access over truth', authorName: "George Stephanopolous", organizationName: "MSNBC", datePublished: 'June 15, 2013 21:14:35', illumineScore: 25 },
      { id: 28, editorialName: 'Echo chamber', authorName: "Brad Pitt", organizationName: "CNN", datePublished: 'January 10, 2010 21:14:35', illumineScore: 58 },
      { id: 29, editorialName: 'Beyond the news cycle', authorName: "Nate Silver", organizationName: "FiveThirtyEight", datePublished: 'October 30, 2001 21:14:35', illumineScore: 82 },
      { id: 30, editorialName: 'Peer review in journalism', authorName: "Jason Statham", organizationName: "Reuters", datePublished: 'June 18, 2015 21:14:35', illumineScore: 7 },
    ];
    const reviews = [
      { id: 31, articleName: 'What went wrong in 2016', contributorId: 41, score: 75, text: this.reviewTextGood },
      { id: 32, articleName: 'What went wrong in 2016', contributorId: 42, score: 92, text: this.reviewTextGood },
      { id: 33, articleName: 'What went wrong in 2016', contributorId: 43, score: 38, text: this.reviewTextBad },
      { id: 34, articleName: 'What went wrong in 2016', contributorId: 44, score: 14, text: this.reviewTextBad },
      { id: 35, articleName: 'What went wrong in 2016', contributorId: 45, score: 45, text: this.reviewTextBad },
      { id: 36, articleName: 'What went wrong in 2016', contributorId: 46, score: 86, text: this.reviewTextGood },
      { id: 37, articleName: 'What went wrong in 2016', contributorId: 47, score: 56, text: this.reviewTextBad },
      { id: 38, articleName: 'What went wrong in 2016', contributorId: 48, score: 73, text: this.reviewTextGood },
      { id: 39, articleName: 'What went wrong in 2016', contributorId: 49, score: 79, text: this.reviewTextGood },
      { id: 40, articleName: 'What went wrong in 2016', contributorId: 50, score: 89, text: this.reviewTextGood }
    ]

    return { articles, organizations, editorials, reviews };
  }
}