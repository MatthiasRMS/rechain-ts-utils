export interface ReviewComment {
    id?: number;
    reviewPinId: number;
    userId: number;
    createdAt: string;
    updatedAt: string;
    content: string;
}
