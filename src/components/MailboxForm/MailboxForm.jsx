
import { useState } from 'react';

const initialState = {
      id: 0,
      size: "",
      owner: "",
};



function MailboxForm(addBox) {
  const [boxOwner, setBoxOwner] = useState('');
  const [boxSize, setBoxSize] = useState(''); 

  const handleSubmit = (event) => {
    event.preventDefault();
  };





  return (
    <main>
          <h2>New Mailbox</h2>
          <form onSubmit={handleSubmit}>

    
    
    
    </main>

  )

};


export default MailboxForm;