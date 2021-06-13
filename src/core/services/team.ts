import { FirebaseCollection } from 'core/constants/collections';
import { ITeam } from 'core/interfaces/ITeam';
import { auth, firestore } from '../firebase';

export const fetchTeams = () =>
  firestore
    .collection(FirebaseCollection.Teams)
    .get()
    .then(async (querySnapshot) => {
      const teams: ITeam[] = [];
      await querySnapshot.forEach((doc) => teams.push(doc.data() as ITeam));
      return teams.filter((team) =>
        team.users.find((user) => {
          return user.uid === auth.currentUser.uid;
        })
      );
    });

export const addTeam = (team: ITeam): Promise<void> =>
  firestore
    .collection(FirebaseCollection.Teams)
    .doc(team.id)
    .set({ ...team });

export const removeTeam = (teamId: string) =>
  firestore.collection(FirebaseCollection.Teams).doc(teamId).delete();

export const changeTeam = (team: ITeam) =>
  firestore
    .collection(FirebaseCollection.Teams)
    .doc(team.id)
    .update({
      ...team,
    });
