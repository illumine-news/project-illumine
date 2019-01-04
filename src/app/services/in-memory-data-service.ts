import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  editorialText: string = `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc congue porttitor quam eu dignissim. Morbi fermentum eget ex ut ullamcorper. Pellentesque sit amet erat a est auctor gravida. Nulla egestas commodo ullamcorper. Proin ornare tempus ante in ultrices. Proin feugiat, dolor a ultrices iaculis, mi risus semper orci, vitae lobortis est mi at libero. Donec imperdiet elit nec quam iaculis, eu vehicula diam lacinia. Nam lacinia ex et arcu tincidunt, et iaculis mi euismod.</p>

  <p>Praesent maximus odio lobortis euismod viverra. Aliquam hendrerit tempor purus eget interdum. Aliquam erat volutpat. Vestibulum efficitur sem ut dui faucibus, vitae ultrices justo viverra. Ut nunc erat, dignissim eget ipsum quis, laoreet vehicula urna. Quisque eu efficitur felis. Nulla auctor sapien et eleifend interdum. Praesent at dolor felis. Sed nec erat a mauris cursus eleifend et in orci. Nam ut erat sit amet ante ullamcorper ultricies. Aenean faucibus ac quam a tempus. Pellentesque ornare commodo massa et vestibulum. Ut ac massa ut risus bibendum laoreet fermentum quis ligula. In pretium pulvinar dui eget pulvinar.</p>
  
  <p>Praesent quis eros id leo ullamcorper vulputate. Etiam at tortor convallis, imperdiet tortor a, euismod velit. Aenean mattis leo sed purus pulvinar lobortis. Vestibulum mi tellus, luctus ac consequat et, mollis at est. Aliquam et orci tellus. Quisque pretium feugiat nibh at malesuada. Nulla id est non lorem cursus porttitor.</p>`

  articleSummaryText: string =  `A man must protect his family from James Bond, played by Timothy Dalton. Basically Braveheart set against the background of the American revolution, this film consectetur adipiscing elit. Nunc congue porttitor quam eu dignissim. Morbi fermentum eget ex ut ullamcorper. Pellentesque sit amet erat a est auctor gravida. Nulla egestas commodo ullamcorper. Proin ornare tempus ante in ultrices. Proin feugiat, dolor a ultrices iaculis, mi risus semper orci, vitae lobortis est mi at libero. Donec imperdiet elit nec quam iaculis, eu vehicula diam lacinia. Nam lacinia ex et arcu tincidunt, et iaculis mi euismod.`;

  reviewTextGood: string = `GOOD: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc congue porttitor quam eu dignissim. Morbi fermentum eget ex ut ullamcorper. Pellentesque sit amet erat a est auctor gravida. Nulla egestas commodo ullamcorper. Proin ornare tempus ante in ultrices. Proin feugiat, dolor a ultrices iaculis, mi risus semper orci, vitae lobortis est mi at libero. Donec imperdiet elit nec quam iaculis, eu vehicula diam lacinia. Nam lacinia ex et arcu tincidunt, et iaculis mi euismod.`

  reviewTextBad: string = `<p>BAD: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc congue porttitor quam eu dignissim. Morbi fermentum eget ex ut ullamcorper. Pellentesque sit amet erat a est auctor gravida. Nulla egestas commodo ullamcorper. Proin ornare tempus ante in ultrices. Proin feugiat, dolor a ultrices iaculis, mi risus semper orci, vitae lobortis est mi at libero. Donec imperdiet elit nec quam iaculis, eu vehicula diam lacinia. Nam lacinia ex et arcu tincidunt, et iaculis mi euismod.</p>`


  createDb() {
    const articles = [
      { id: 1, articleName: `Artificial Intelligence Was Supposed to Reduce Hiring Discrimination. It’s Already Backfiring.`, authorName: "Tonya Riley", organizationId: "22", organizationName: "Mother Jones", datePublished: new Date('January 3, 2019 06:00:00'), illumineScore: 82, articleLink: "https://www.motherjones.com/politics/2019/01/artificial-intelligence-was-supposed-to-reduce-hiring-discrimination-its-already-backfiring/", 
               articleSummary: `Tonya Riley shines a light on the growing practice of companies using Artificial Intelligence to assist with hiring decisions.`},
      { id: 2, articleName: `Powell Says a ‘Patient’ Fed Is Watching for Signs of Economic Weakness`, authorName: "Jim Tankersley and Binyamin Appelbaum", organizationId: "12", organizationName: "New York Times", datePublished: new Date('October 15, 2004 01:19:05'), illumineScore: 92, articleLink: "https://www.nytimes.com/2019/01/04/business/economy/jerome-powell-fed-reserve.html",
               articleSummary: `The authors discuss the Federal Reserve chairman Jerome Powell's current holding pattern strategy.` },
      { id: 3, articleName: 'Police: Homicides in Chicago down by nearly 100 in 2018', authorName: "Michael Tarm", organizationId: "17", organizationName: "Fox News", datePublished: new Date('January 2, 2019'), illumineScore: 70, articleLink: "https://www.foxnews.com/us/police-homicides-in-chicago-down-by-nearly-100-in-2018", 
               articleSummary: "The author reviews the facts surrounding the decline in Chicago's gun violence in 2018." },
      { id: 4, articleName: 'House Democrat reintroduces impeachment articles against Trump', authorName: "Jeremy Herb & Manu Raju", organizationId: "14", organizationName: "CNN", datePublished: 'January 3, 2019 13:15', illumineScore: 84, articleLink: "https://www.cnn.com/2019/01/03/politics/impeachment-house-democrats-brad-sherman-trump/index.html",
               articleSummary: `The authors discuss California Democrat Brad Sherman's reintroduction of impeachment proceedings against President Trump.` },
      { id: 5, articleName: 'Paul Whelan: Ex-US Marine held on suspicion of spying is UK citizen', authorName: "Winston Churchill", organizationId: "15", organizationName: "BBC", datePublished: 'March 16, 1920 21:14:35', illumineScore: 66, articleLink: "https://www.bbc.com/news/uk-46756996",
               articleSummary: `The correspondent recounts events from Paul Whelan's upbringing through his arrest by Russian authorities.`, },
      // { id: 6, articleName: 'Guide to Griefing', authorName: "Vizzini", organizationId: "19", organizationName: "The Atlantic", articleSummary: this.articleSummaryText,  datePublished: 'February 16, 2011 21:14:35', illumineScore: 67 },
      { id: 7, articleName: `Bernie Sanders' fans can't be allowed to poison another Democratic primary with personal attacks`, authorName: "David Brock", organizationId: "16", organizationName: "MSNBC", datePublished: 'January 3, 2019 11:22', illumineScore: 56 , articleLink: 'https://www.nbcnews.com/think/opinion/bernie-sanders-fans-can-t-be-allowed-poison-another-democratic-ncna953976', 
               articleSummary: `In this opinion piece, David Brock makes the case for why the Democratic Party should cut Bernie Sanders supporters less slack in the coming 2020 election cycle.`},
      { id: 8, articleName: 'Nancy Pelosi Elected Speaker of the House', authorName: "Matt Fuller", organizationId: "21", organizationName: "Huffington Post", datePublished: 'January 3, 2019 13:48', illumineScore: 65, articleLink: "https://www.huffingtonpost.com/entry/nancy-pelosi-speaker-house-vote-congress_us_5c2e4d43e4b0407e90897fe6", 
               articleSummary: `The author recounts journey from Speaker of the House to political wilderness and back again before describing what lies ahead.`,   },
      { id: 9, articleName: 'The Real Story of 2016', authorName: "Nate Silver", organizationId: "20", organizationName: "FiveThirtyEight", datePublished: 'January 19, 2017 11:01', illumineScore: 61, 
               articleLink: "https://fivethirtyeight.com/features/the-real-story-of-2016/",
               articleSummary: 'Nate Silver discusses what reporters and analysts got wrong in the days, weeks, and months leading up to the 2016 Presidential election.' },
      // { id: 10, articleName: 'Neon Demons', authorName: "Jane Austen", organizationId: "11", organizationName: "Reuters", articleSummary: this.articleSummaryText,  datePublished: 'June 18, 2015 21:14:35', illumineScore: 7 },
    ];
    const organizations = [
      { id: 11, name: 'Reuters', organizationScore: 70 },
      { id: 12, name: 'New York Times', organizationScore: 81 },
      { id: 13, name: 'Washington Post', organizationScore: 92 },
      { id: 14, name: 'CNN', organizationScore: 65 },
      { id: 15, name: 'BBC', organizationScore: 93 },
      { id: 16, name: 'MSNBC', organizationScore: 63 },
      { id: 17, name: 'Fox News', organizationScore: 51 },
      { id: 18, name: 'Wall Street Journal', organizationScore: 67 },
      { id: 19, name: 'The Atlantic', organizationScore: 85 },
      { id: 20, name: 'FiveThirtyEight', organizationScore: 80 },
      { id: 21, name: 'Huffington Post', organizationScore: 59 },
      { id: 22, name: 'Mother Jones', organizationScore: 85 }
    ];
    const editorials = [
      { id: 26, editorialName: 'Project Illumine', authorName: "World Citizen", organizationName: "Project Illumine", datePublished: new Date('January 4, 2019 12:50:35'),
                text: `<p>These days phrases like "fake news" and "phony media" are bandied about by President Trump and some of his allies like effortless rebukes. Call them a refrain if you will. It would be one thing if these attacks were merely schoolyard taunts&mdash;and their simplicity might lead one to believe they are&mdash;but in reality they are far more dangerous. As with anything the person holding the most powerful office in the world says, they are amplified many times before being transmitted by the same news media that he attacks.</p>
                <p>But what can we do? If many Americans already do not trust news organizations, why bother trying to convince them?</p>
                <p>My proposal is that we don't. If you are reading this, chances are you already harbor some skepticism for "news" items that are appear in your Facebook feed or (possibly worse) arrive in your email inbox. Our task here is to <i>feed</i> that skepticism and provide a place where critical thinking can flourish.</p>
                <p>To accomplish this, we will first provide <b>reviews</b> of news articles from a variety of organizations. We shall rate the articles based not just on how truthful they are, but also on how thoroughly they tackle their subjects (e.g. - how many sources are provided?). In this way we aim to encourage quality in journalism while still fighting fake news.</p>
                <p>Each review will be given a score, and as multiple reviews are collected for an article our algorithm will combine these ratings into a single <b>Illumine score</b> for said article.</p>
                <p>Similarly, we will track the performance of the <b>news organizations</b> whose articles we rate and provide a score to help provide a picture of how each one is doing.</p>
                <p>Lastly, we will provide additional editorials&mdash;like this one&mdash;to shed some light on the state of our efforts, along with other noteworthy news about news.</p>
                <p>Do remember that Project Illumine is merely a prototype at this stage&mdash;a possible vision of things to come&mdash;but we would love to hear your ideas.</p>
                <p>Sincerely,</p>
                <div><b>WC</b></div>
                <a href="mailto:illumine.news@gmail.com"><b>illumine.news@gmail.com</b></a>` },
      { id: 21, editorialName: 'Warp verfication', authorName: "Jean-Luc Picard", organizationName: "United Federation of Planets", datePublished: new Date('December 17, 2387 03:24:00'),
                text: `<p>During my time as an officer in the Federation, I have seen many things. Red shirts dying for what often seemed like nothing. Teleportation gone horribly awry. But what I haven't seen is good journalism.</p>
                <p>This is why I have spent countless hours holed up in the captain's quarters meticulously cataloguing reports from across the galaxy. Do you want to know what I've found? The only constant in the galactic press is this: the truth is never consistently there. How do I know? Because <i>I</i> was there at the Battle of Maxia. <i>I</i> saw an android laugh for the first time. And <i>I</i> had to endure that turncoat Riker firing on the Borg ship that had captured me.</p>
                You ask who is most qualified to adjudicate the veracity of all these claims? 'Tis none none other than I, Jean-Luc Picard!
                My crew and I will visit every star system and record every event, sometimes before it happens.</p>`},
      { id: 22, editorialName: 'How to spot fake news', authorName: "Zoe Barnes", organizationName: "New York Times", datePublished: new Date('October 15, 2004 01:19:05'), text: this.editorialText}, 
      { id: 23, editorialName: 'Signs an article was rushed', authorName: "Mary Shelley", organizationName: "Fox News", datePublished: new Date('June 27, 2016 21:14:35'), text: this.editorialText},
      { id: 24, editorialName: 'Dealing with trolls', authorName: "Jeanne d'Arc", organizationName: "CNN", datePublished: 'April 14, 1984 21:14:35', text: this.editorialText},
      { id: 25, editorialName: 'Help - my father reads InfoWars', authorName: "Alan Turing", organizationName: "BBC", datePublished: 'March 16, 1920 21:14:35', text: this.editorialText},
      { id: 27, editorialName: 'Access over truth', authorName: "Yekaterina Alekseyevna", organizationName: "MSNBC", datePublished: 'June 15, 2013 21:14:35', text: this.editorialText},
      { id: 28, editorialName: 'Echo chamber', authorName: "Jules Verne", organizationName: "CNN", datePublished: 'January 10, 2010 21:14:35', text: this.editorialText},
      { id: 29, editorialName: 'Beyond the news cycle', authorName: "Jean-Luc Picard", organizationName: "United Federation of Planets", datePublished: 'October 30, 2387 21:14:35', text: this.editorialText},
      { id: 30, editorialName: 'Peer review in journalism', authorName: "Isaac Newton", organizationName: "Reuters", datePublished: 'June 18, 2015 21:14:35', text: this.editorialText},
    ];
    const reviews = [
      { id: 31, articleId: 1, articleName: `Artificial Intelligence Was Supposed to Reduce Hiring Discrimination. It’s Already Backfiring.`, contributorId: 41, contributorName: 'Lee Adama', reviewScore: 82, 
                text: `<div>The author provides a sound analysis of the ways in Artificial Intelligence has already begun to impact hiring practices. Her interview of policy analyst Mirganda Bogen does a great deal to shed light on how the use of AI can be harmful or unfair.</div>
                <div>That being said, it would be nice to hear the side of those in the AI industry who are developing the software under discussion. I suspect that they would argue they are only solving HR problems that have been around for some time.</div>` },
      { id: 32, articleId: 2, articleName: `Powell Says a ‘Patient’ Fed Is Watching for Signs of Economic Weakness`, contributorId: 42, contributorName: 'Tyrion Lannister', reviewScore: 92, text: this.reviewTextGood },
      { id: 33, articleId: 3, articleName: 'Police: Homicides in Chicago down by nearly 100 in 2018', contributorId: 43, contributorName: 'Ellen Ripley', reviewScore: 68, 
                text: `<div>In this article, the author provides a straightforward review of the facts surrounding the decline in Chicago's gun violence in 2018.</div>
                <div>Although at times he does not always state, the source of the facts he is citing, Michael Tarm does appear to give a full accounting of what happened with gun violence in Chicago during the last year. It would have been nice to get a deeper dive analyzing the causal link (or lack thereof) between the hiring of more officers, use of technology, and the decrease in gun crimes; but for better or worse this article was not quite that ambitious</div>` },
      { id: 34, articleId: 4, articleName: 'House Democrat reintroduces impeachment articles against Trump', contributorId: 44, contributorName: 'Richard Kiel', reviewScore: 85, 
                text: `Jeremy Herb and Manu Raju do a solid job of presenting the facts in this article. In addition to quoting Representative Brad Sherman, the authors also included statements from incoming Representatives Adam Smith and Jerry Nadler, both of which add depth to the report.` },
      { id: 35, articleId: 5, articleName: `Paul Whelan: Ex-US Marine held on suspicion of spying is UK citizen`, contributorId: 45, contributorName: 'Vizzini', reviewScore: 45, text: this.reviewTextBad },
      { id: 36, articleId: 5, articleName: `Paul Whelan: Ex-US Marine held on suspicion of spying is UK citizen`, contributorId: 46, contributorName: 'Lisbeth Salander', reviewScore: 86, text: this.reviewTextGood },
      { id: 37, articleId: 7, articleName: `Bernie Sanders' fans can't be allowed to poison another Democratic primary with personal attacks`, contributorId: 47, contributorName: 'Walter Cronkite', reviewScore: 56, 
                text: `<div>As an opinion piece on avoiding the repeat of past mistakes by the Democratic Party, this article falls flat save for some valid points.</div>
                <div>First, the author starts with a "Guess Who Said It!" game that challenges readers to distinguish Bernie Sanders quotes from Donald Trump ones. Although the intent of the exercise seems pretty clearly aimed at showing how low Sanders was willing to go to win; it seems rather unlikely that any of these statements did serious damage to the Sanders campaign in 2016. What's more, the author does not even follow-up with the statements, instead transitioning to (for the rest of the article) discuss Beto Rourke as the rightful (?) candidate to be protected from Sanders supporters as we approach 2020.</div>
                <div>And it is with the aim of protecting the author's apparent chosen golden boy in O'Rourke that the rest of the article devolves into suggesting possible ways of controlling a large electronic mob of Bernie supporters.</div>
                <div>If that is your biggest problem as a political party, haven't you already lost?</div>` },
      { id: 38, articleId: 8, articleName: 'Nancy Pelosi Elected Speaker of the House', contributorId: 48, contributorName: 'Don Collier', reviewScore: 65, 
                text: `<div>Although the author provides a decent summary describing Nancy Pelosi's path reclaiming the Speaker of the House position, he leaves some desirable details out. For instance, who are the "freshman Democrats [that] made promises during the campaign to not support Pelosi [for Speaker]"?</div>
                <div>Shortly thereafter, the author mentions how [Pelosi] was "able to frame the opposition [to her] as misogynist". Unfortunately he provides no evidence to back up this claim.</div>
                <div>To his credit the author does describe some of the dealmaking in which Pelosi engaged during her campaign for Speakership, such as promising the return of an election-centric committee and its chairwomanship to Rep. Marcia Fudge in return for her vote.</div>` },
      { id: 39, articleId: 9, articleName: 'The Real Story of 2016', contributorId: 49, contributorName: 'Clare Underwood', reviewScore: 43, 
                text: "Of course Nate would defend the integrity of the October and November polls across America. For were he to cast doubt upon them, the entire enterprise of data analytics would be called into question, dooming his circus of numbers..." },
      { id: 41, articleId: 9, articleName: 'The Real Story of 2016', contributorId: 49, contributorName: 'Edward Meechum', reviewScore: 79, 
                text: "I uh *gulp* agree with Clare about Nate's fears. But the man was always kind to me in his reviews of my field work. So I am giving him a decent score on this..." }
    ]

    return { articles, organizations, editorials, reviews };
  }
}