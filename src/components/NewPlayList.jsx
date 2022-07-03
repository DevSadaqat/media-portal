import { useRef } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';


function NewMeetupForm(props) {
  const nameInputRef = useRef();
  const descInputRef = useRef();
  const idInputRef = useRef();
  const videoIdInputRef = useRef();

  console.log(props);

  function submitHandler(event) {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredDescription = descInputRef.current.value;
    const enteredId = idInputRef.current.value;
    const enteredVideoId = videoIdInputRef.current.value;

    const playListData = {
      name: enteredName,
      description: enteredDescription,
      id: enteredId,
      videoId: enteredVideoId,
    };
    props.onAddPlayList(playListData);
  }

  return (
      <>
     <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" ref={nameInputRef}/>
       </Form.Group>

       <Form.Group className="mb-3" controlId="description">
            <Form.Label>description</Form.Label>
            <Form.Control type="text" placeholder="Enter decsription" ref={descInputRef}/>
       </Form.Group> 

       <Form.Group className="mb-3" controlId="id">
            <Form.Label>Id</Form.Label>
            <Form.Control type="text" placeholder="Enter Id" ref={idInputRef}/>
       </Form.Group> 

       <Form.Group className="mb-3" controlId="id">
            <Form.Label>Video Id</Form.Label>
            <Form.Control type="text" placeholder="Enter Video Id" ref={videoIdInputRef}/>
       </Form.Group> 
       <Button variant="primary" type="submit">
         Submit
       </Button>
    </Form>
   </>
  );
}

export default NewMeetupForm;