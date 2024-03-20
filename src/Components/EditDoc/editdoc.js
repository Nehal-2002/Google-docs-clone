import "./editdoc.css";
import { BiArrowBack } from "react-icons/bi";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import { QuillToolbar, modules, formats } from "../CustomToolBar/customToolBar";
import { useEffect, useRef, useState } from "react";
import { editDoc, getCurrentDoc, createDoc } from "../../API/Firestore";

export default function EditDoc({ id, setId, setIsNewDoc }) {
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [currentDocId, setCurrentDocId] = useState(false);
  let quillRef = useRef(null);
  function editDocument() {
    let payload = { value, title };
    editDoc(payload, currentDocId);
  }

  useEffect(() => {
    quillRef.current.focus();
    if (id) {
      setCurrentDocId(id);
      getCurrentDoc(id, setValue, setTitle);
    } else {
        createDoc({
          title: "",
          value: "",
        }
      ).then((data) => {
        setCurrentDocId(data.id);
      }).catch((error) => {
        console.error(error);
      });
    }
  }, []);

  useEffect(()=>{
    if (currentDocId) {
      const debounced = setTimeout(() => {
        editDocument();
      }, 2000);
      return () => clearTimeout(debounced);
    }
  },[value,title])
  
  return (
    <div className="edit-container">
      <BiArrowBack
        size={30}
        className="react-icon"
        onClick={() => {
          setId("");
          setIsNewDoc(false);
        }}
      />
      <input
        onChange={(event)=>{
          setTitle(event.target.value)
        }}
        value={title}
        className="title-input"
        placeholder="Untitle"
      />
      <div className="quill-container">
        <QuillToolbar />
        <ReactQuill
          theme="snow"
          ref={quillRef}
          value={value}
          onChange={setValue}
          placeholder={"Write here"}
          modules={modules}
          formats={formats}
        />
      </div>
    </div>
  );
}
