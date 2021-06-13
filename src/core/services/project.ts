import { FirebaseCollection } from '../constants/collections';
import { auth, firestore } from '../firebase';
import { IProject } from '../interfaces/IProject';

export const fetchProjects = () =>
  firestore
    .collection(FirebaseCollection.Projects)
    .get()
    .then(async (querySnapshot) => {
      const projects: IProject[] = [];
      await querySnapshot.forEach((doc) => projects.push(doc.data() as IProject));

      return projects.filter((project) => {
        console.log(project);
        project.users.find((user) => {
          console.log(user.uid, auth.currentUser.uid);
          return user.uid === auth.currentUser.uid;
        });

        return project.users.find((user) => user.uid === auth.currentUser.uid);
      });
    });

export const addProjectService = (project: IProject): Promise<void> =>
  firestore
    .collection(FirebaseCollection.Projects)
    .doc(project.id)
    .set({ ...project });

export const removeProject = (projectId: string) =>
  firestore.collection(FirebaseCollection.Projects).doc(projectId).delete();

export const changeProject = (project: IProject) =>
  firestore
    .collection(FirebaseCollection.Projects)
    .doc(project.id)
    .update({ ...project });
