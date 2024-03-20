import "./document";
import Topbar from "../Topbar/topbar";
import CreateDoc from "../CreateDocument/createdoc";
import EditDoc from "../EditDoc/editdoc";
import DocsList from "../DocsList/docsList";
import { useState } from "react";

export default function Document({ photoURL }) {
  const [id, setId] = useState("");
  const [isNewDoc, setIsNewDoc] = useState(false);
  return (
    <>
      <Topbar photoURL={photoURL} />
      {isNewDoc || id ? (
        <EditDoc id={id} setId = {setId} setIsNewDoc = {setIsNewDoc} />
      ) : (
        <>
          <CreateDoc setIsNewDoc={setIsNewDoc} />
          <DocsList setId={setId} />
        </>
      )}
    </>
  );
}
