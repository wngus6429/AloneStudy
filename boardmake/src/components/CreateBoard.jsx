import { useCallback, useState } from "react";
import { Form } from "react-router-dom";
function CreateBoard() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const onSubmitForm = useCallback(() => {
      alert(title + ", " + content);
    }, [title, content])
    return (
      <Form method="post" onSubmit={onSubmitForm}>
        <input
          type="text"
          placeholder="제목"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <textarea
          placeholder="내용"
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />
        <button type="submit">작성</button>
      </Form>
    );
  }
  
  export default CreateBoard;