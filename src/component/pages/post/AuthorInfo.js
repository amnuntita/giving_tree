import React,{useState,useEffect} from 'react';

import BaseUrl from "./../../../BaseUrl.js";

const AuthorInfo = (props) => {

    const postId = props.id;
    const zone = props.zone;
    const [contact,setContact] = useState(false)

    useEffect(() => {
      async function fetchPost() {
        
        const res = await fetch(BaseUrl + "/contact/" + postId);
        res.json()
        .then((res) => {
          setContact(res[0])
          return(contact)
        })

      }
      fetchPost();
    },[postId,contact]);

    const contactList = () => {
      if (contact){
        return(Object.keys(contact.contact).map((k) => {
          return(<li>{k + ": " + contact.contact[k]}</li>)
        }))
      }
      else{
        return(<div></div>)
      }
    }

    const zoneList = () => {
      if (zone){
        return(zone.map((z) => {
          return(<li>{z}</li>)
        }))

      }
    }


    return (
        <div>
          <h6>Contact:</h6>
          <p>Username: {contact.username}</p>
          <p>Contact List:</p>
          <ul>
            {contactList()}
          </ul>
          <h6>Area:</h6>
          <ul>
            {zoneList()}
          </ul>
        </div>
      );

};

export default AuthorInfo;