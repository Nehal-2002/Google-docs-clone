import "./docsList.css";
import { useEffect, useState } from "react";
import { BiSolidTrash } from "react-icons/bi";
import { getDocuments, delDoc } from "../../API/Firestore";

export default function DocsList({ setId }) {
  const [docs, setDocs] = useState([]);

  const getDocs = async() => {
    await getDocuments(setDocs);
  };

  useEffect(() => {
    getDocs();
  }, []);

  return (
    <div className="docs-container">
      {docs.map((doc) => {
        return (
          <div
            onClick={() => setId(doc.id)}
            className="doc"
            id={doc.id}
            key={doc.id}
          >
            <div className="delete-icon" onClick={(e)=> {
              e.stopPropagation();
              delDoc(doc.id);
              getDocs();
            }}><BiSolidTrash size={20}/></div>
            <p
              className="doc-content"
              dangerouslySetInnerHTML={{ __html: doc.value.substring(0, 150) }}
            ></p>
            <hr/>
            <b><p className="doc-title">{doc.title}</p></b>
          </div>
        );
      })}
    </div>
  );
}
