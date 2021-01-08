import React, { useState, useEffect } from "react";
import {Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import ResultCard from "../result/ResultCard.js";
import BaseUrl from "./../../../BaseUrl.js";

const NewPost = (props) => {
  const cat = props.cat;
  let title = null;
  const [newPost, setNewPost] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(BaseUrl + "/new_post/" + cat);
      res.json().then((res) => setNewPost(res));
    }
    
    console.log(newPost)
    fetchData();
  }, [cat]);

  const posts = () => {
    if (newPost) {
      return newPost.map((p) => {
        return (
          <ResultCard
            id={p.post_id}
            title={p.title}
            content={p.post_detail}
            img={p.img[0]}
          />
        );
      });
    }
    return <div></div>;
  };

  if(cat === 'g'){
      title = 'Give'
  }
  else if(cat === 't'){
      title = 'Take'
  }
  else{
      title = 'Trade'
  }

  return (
    <div style={{ marginBottom: 10,marginTop:4 }}>
      <h4>New Posts - {title}</h4>
      <Link to="/result" style={{ marginBottom: 10 }}>
        View All
      </Link>
      <Row>{posts()}</Row>
    </div>
  );
};

export default NewPost;
