import React,{useState,useEffect} from 'react';

import BaseUrl from "./../../../BaseUrl.js";

const AuthorInfo = (props) => {

    const postId = props.id;
    const [contact,setContact] = useState(false)
    const [username,setUser] = useState('')
    const [contactList,setList] = useState([])

    useEffect(() => {
      async function fetchPost() {
        
        const res = await fetch(BaseUrl + "/contact/" + postId);
        res.json()
        .then((res) => {
          setContact(res[0])
          return(contact)
        })
        .then((contact) => {
          setUser(contact.username)
          return(contact)
        })

      }
      fetchPost();
    },[postId]);


    return (
        <div>
          <h6>Contact:</h6>
          {username}
          <ul>
           
          </ul>
          <h6>Area:</h6>
          <ul>
            <li>Phaya Tai</li>
            <li>Sam Yan</li>
          </ul>
          <h6>Available period:</h6>
          <ul>
            <li>
              <b>Day:</b>Wed-Fri today-30 December
            </li>
            <li>
              <b>Hour:</b> 4PM - 6PM
            </li>
          </ul>
        </div>
      );

};

export default AuthorInfo;