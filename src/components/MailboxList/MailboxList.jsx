import { NavLink } from "react-router";

 const MailboxList = (props) => {
    return (
        <>
        <h2></h2>
        <ul>
            {props.mailboxes.map((element) => (
                
                <li key= {element.id}>
                    <NavLink to={`/mailboxes/${element._id}`}>
                     {element.name} --- {`/mailboxes/${element._id}`}
   
                    </NavLink>

                </li>

            ))}

        </ul> 
        </>
    )

 }

export default MailboxList;