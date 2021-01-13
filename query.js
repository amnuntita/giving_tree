const { response, request } = require("express");
const { pool } = require("./config");

/*
SELECT DISTINCT ON (P.post_id) P.*
FROM (SELECT * FROM post_zone Z WHERE 
zone = ANY('{"Phaya Thai","Sam Yan","Siam"}'::varchar(20)[])) AS Z
INNER JOIN (SELECT post_id,post_cat,title,post_detail,
img[1],date_posted FROM post 
WHERE LOWER(title) LIKE '%food%' 
AND post_cat = 'tr' AND date_posted >= (CURRENT_DATE - integer '7') 
) AS P 
ON P.post_id = Z.post_id;

*/

const getPost = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(
    "SELECT P.*, post_id_zone.zone FROM post P, (SELECT post_id, ARRAY_AGG(Z.zone_name) AS zone FROM post_zone PZ, zone Z WHERE PZ.post_id = $1 AND PZ.zone_id = Z.zone_id GROUP BY PZ.post_id) as post_id_zone WHERE P.post_id = $1",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results.rows);
    }
  );
};

const getContact = (req, res) => {
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

const getFilteredResult = (req, res) => {
  const keyword = "%" + req.query.q.toLowerCase() + "%";
  const cat = req.query.c;
  const zone = req.query.z ? req.query.z.split(",").map(Number) : null;
  const date = parseInt(req.query.d);

  let z = []

  // convert selected zone into zone_id 
  if(zone){
    for(i = 0; i < zone.length;i++){
      if(zone[i] === 1){
        z.push(i)
      }
    }
  }

  let param = [keyword, cat];

  let table = ` FROM post P`;
  let where_clause = ` WHERE title LIKE $1 AND post_cat = $2`;

  if (date && date != 0) {
    where_clause += ` AND date_posted >= (CURRENT_DATE - (INTERVAL '1' day) * $3)`;
    param.push(date);
  }
  if (zone && z.length > 0) {
    table += ` RIGHT JOIN post_zone PZ ON P.post_id = PZ.post_id`;
    where_clause += date ? ` AND zone_id = ANY($4)` : ` AND zone_id = ANY($3)`;
    param.push(z);
  }

  const sql = `SELECT DISTINCT ON (P.post_id) *` + table + where_clause;

  pool.query(sql, param, (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

const getResult = (req, res) => {
  const q = req.query.q;
  const keyword = "%" + q.toLowerCase() + "%";
  const cat = req.query.c;
  pool.query(
    "SELECT post_id,post_cat,title,post_detail,img[1] FROM post WHERE LOWER(title) LIKE $1 AND post_cat = $2",
    [keyword, type],
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

module.exports = {
  getPost,
  getResult,
  getNewPost,
  getContact,
  getFilteredResult,
};
