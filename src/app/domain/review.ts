export class Review {
    id: number;
    articleName: string;
    articleId: number;
    contributorId: number;
    contributorName: string;
    reviewScore: number;
    text: string; //TODO: just encapsulate as HTML
}