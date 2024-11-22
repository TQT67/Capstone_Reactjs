export interface ApiResponse<T> {
  statusCode: number;
  message: string;
  content: T; // T is a generic type
  dateTime: Date;
  messageConstants: null;
}
