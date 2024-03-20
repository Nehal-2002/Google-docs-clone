import { firestore, auth } from "../firebaseConfig";
import {
  addDoc,
  collection,
  doc,
  updateDoc,
  getDocs,
  getDoc,
  deleteDoc
} from "firebase/firestore";

let docs = collection(firestore, "docs");

export const createDoc = (payload) => {
  return addDoc(docs, { ...payload, userName: auth.currentUser.displayName })
};

export const getDocuments = (setDocs) => {
  getDocs(docs)
    .then((response) => {
      setDocs(
        response.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    })
    .catch((error) => {
      console.log(error);
    });
};

export const editDoc = (payload, id) => {
  if (payload.title !== undefined && payload.value !== undefined && id!==undefined) {
    let docToEdit = doc(docs, id);
    updateDoc(docToEdit, { ...payload }, id).catch((error) => {
      console.log(error);
    });
  }
};

export const getCurrentDoc = (currentDocId, setValue, setTitle) => {
  if(currentDocId!==""){
    let docToGet = doc(docs, currentDocId);
    getDoc(docToGet)
      .then((response) => {
        setValue(response.data().value);
        setTitle(response.data().title);
      })
      .catch((error) => {
        console.log(error);
      });
  }
};

export const delDoc = (id) => {
    let docRef = doc(docs,id);
    deleteDoc(docRef);
}