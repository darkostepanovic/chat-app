export interface IMessage {
    id: string;
    userId: string;
    name: string;
    text: string;
    photoURL: string;
    createdAt: { nanoseconds: number; seconds: number };
    replies?: IMessage[]
}