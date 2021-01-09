const { response, request } = require("express");
const { pool } = require("./config");

const getPost = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(
    "SELECT * FROM post WHERE post_id = $1",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results.rows);
    }
  );
};

const getContact = (req,res) => {
  const post_id = parseInt(req.params.id);
  pool.query(
    "SELECT A.username, A.contact FROM account A, post P WHERE P.post_id = $1 AND P.account_id = A.id",
    [post_id],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results.rows);
    }
  );
};


const getResult = (req, res) => {
  const q = req.query.q
  const keyword = "%" + q.toLowerCase() + "%";
  const type = req.query.c 
  pool.query(
    "SELECT post_id,post_cat,title,post_detail,img[1] FROM post WHERE LOWER(title) LIKE $1 AND post_cat = $2",
    [keyword,type],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results.rows);
    }
  );
};

const getNewPost = (req, res) => {
  const post_cat = req.params.type;
  pool.query(
    "SELECT * FROM post WHERE post_cat = $1 ORDER BY date_posted DESC LIMIT 4",
    [post_cat],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results.rows);
    }
  );
};

module.exports = { getPost, getResult, getNewPost, getContact };
