import App from "./firebase";
class Auth {
  signin = (email, password) =>
    App.auth().signInWithEmailAndPassword(email, password);

  register = (email, password) =>
    App.auth().createUserWithEmailAndPassword(email, password);

  createUser = (userType, uid, data) =>
    App.firestore().collection(userType).doc(uid).set(data);

  getUser = async (uid, userType) => {
    const docRef = await App.firestore().collection(userType).doc(uid).get().then((doc)=> doc?.data());
    return docRef;
  };

  createEmployee = (uid, data) =>
    App.firestore().collection("companies").doc(uid).set(data);

  createJobPost = (uid, data) =>
    App.firestore().collection("jobPosts").doc(uid).set(data);
    
  Logout = () => App.auth().signOut();


  createForm = (collectionType, data) =>
  App.firestore().collection(collectionType).doc().set(data);

 getList = (collectionType) => {
  App.firestore().collection(collectionType).get()
  .then(querySnapshot => {
    const arr = [];
    querySnapshot.forEach(documentSnapshot => {
       arr.push(documentSnapshot.data());
    });
    return arr;

  });
  return fstore;
};

}

export default new Auth();
