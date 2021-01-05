import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import Back from "../../shared/BackButton.js";
import AuthorInfo from "./AuthorInfo.js";
import MyCarousel from "./Carousel.js";

import BaseUrl from "./../../../BaseUrl.js";

const Post = (props) => {
  const items = ["book1.jpg", "book2.jpg", "book3.jpg"];
  const [post, setPost] = useState(false);
  const appId = props.postId;


  useEffect(() => {
    async function fetchPost() {
      const res = await fetch(BaseUrl + "/post/" + appId);
      res.json()
      .then((res) => setPost(res[0]))
    }
    fetchPost();
  },[appId]);



  if (post){
    const condition = () => {
      const trade = post.trade
      if(trade && trade.length > 0){
        return(<ul>
          {
            trade.map((t,index) => {
              return(<li key={index.toString()}>{t}</li>)
            })
          }
        </ul>)
      }
      else{
        return(<small class="text-muted">No condition - FREE</small>);
      }
    }
    return (
      <div>
        <Back />
        <Container>
          <h3>{post.title}</h3>
          Date Posted: {post.date_posted}
          <Row style={{ marginTop: 20, marginBottom: 20 }}>
            <Col md={6}>
              <MyCarousel items={items} />
            </Col>
            <Col md={1}></Col>
            <Col md={3}>
              <AuthorInfo id = {post.post_id} />
            </Col>
          </Row>
          <Col md={7} style={{ padding: 0 }}>
            <h5> Details:</h5>
            <blockquote>
              {post.post_detail}
            </blockquote>
          </Col>
          <h5>Additional condition:</h5>
          <blockquote>
            <h6>Willing to trade</h6>
            {condition()} 
          </blockquote>
        </Container>
      </div>
    );
  }

  return(<div></div>)
  
};

export default Post;
