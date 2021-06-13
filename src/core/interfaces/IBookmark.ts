export interface IBookmark {
  id: string;
  name: string;
  type: 'project' | 'team' | 'board';
  creator: string;
}
