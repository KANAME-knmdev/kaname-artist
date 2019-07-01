export interface User {
  uid: string;
  possessionM: number | null;
}

export interface Post {
  id: number | null;
  content: string;
  limit: string;
  currentBidM: number | null;
  isTrendingUp: boolean;
}

export interface PostParams {
  text: string;
}
