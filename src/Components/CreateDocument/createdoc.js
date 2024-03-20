import "./createdoc.css";
import addDoc from "../../assets/add-doc.png";

export default function CreateDoc({setIsNewDoc}) {
  return (
    <div className="create-doc-container">
      <div className="create-doc-inner">
        <p>Start a New Document</p>
        <img
          className="add-doc"
          src={addDoc}
          alt="Add doc"
          onClick={() => {
            setIsNewDoc(true);
          }}
        />
        <p className="add-doc-title">Blank Document</p>
      </div>
    </div>
  );
}
