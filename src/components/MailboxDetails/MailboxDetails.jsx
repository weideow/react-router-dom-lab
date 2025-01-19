import { useParams } from 'react-router';

const MailboxDetails = (props) => {
    const params = useParams;
    const newBox =props.newBox.find((m) => m._id === Number(params.newBoxId));

return (
<>
  <div>
  <h2>Mailbox Details</h2>
  <p>Mailbox Id: {newBox.id}</p>
  <p>Mailbox Size: {newBox.size}</p>
  <p>Mailbox Owner: {newBox.owner}</p>

  </div>

</>

);
}

export default MailboxDetails;