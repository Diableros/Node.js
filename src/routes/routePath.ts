export enum RoutePath {
  Readers = '/readers',
  ReaderById = '/readers/:reader_id',

  ReaderAction = '/readers/:reader_id/books/:book_id',

  Books = '/books',
  BookById = '/books/:book_id',

  NotFound = '*',
}
