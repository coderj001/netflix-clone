import { useState, useContext, useEffect } from "react";
import { FirebaseContext } from "../contexts/firebase";

function useContent(target) {
  const [content, setContent] = useState([]);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    firebase
      .firestore()
      .collection(target)
      .get()
      .then((snapshot) => {
        const allContent = snapshot.docs.map((contentObj) => ({
          ...contentObj.data(),
          docId: contentObj.id,
        }));
        setContent(allContent);
      })
      .catch((err) => console.log(err.message));
  }, [firebase, target]);
  return {
    [target]: content,
  };
}

export default useContent;
