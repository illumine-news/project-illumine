export class Review {
    id: number;
    articleName: string;
    articleId: number;
    contributorId: number;
    score: number;
    text: string; //TODO: just encapsulate as HTML
}