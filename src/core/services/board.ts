import { FirebaseCollection } from '../constants/collections';
import { auth, firestore } from '../firebase';
import { IBoard } from '../interfaces/IBoard';

export const fetchBoards = () =>
  firestore
    .collection(FirebaseCollection.Boards)
    .get()
    .then(async (querySnapshot) => {
      const boards: IBoard[] = [];
      await querySnapshot.forEach((doc) => boards.push(doc.data() as IBoard));
      return boards.filter((board) =>
        board.users.find((user) => user.uid === auth.currentUser.uid)
      );
    });

export const addBoardService = (board: IBoard): Promise<void> =>
  firestore
    .collection(FirebaseCollection.Boards)
    .doc(board.id)
    .set({ ...board });

export const removeBoard = (boardId: string) =>
  firestore.collection(FirebaseCollection.Boards).doc(boardId).delete();

export const changeBoard = (board: IBoard) =>
  firestore
    .collection(FirebaseCollection.Boards)
    .doc(board.id)
    .update({ ...board });
