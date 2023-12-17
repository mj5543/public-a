/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./db.js":
/*!***************!*\
  !*** ./db.js ***!
  \***************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("(__webpack_require__(/*! dotenv */ \"dotenv\").config)();\nconst mysql = __webpack_require__(/*! mysql */ \"mysql\");\nlet db;\nif (false) {} else {\n  db = mysql.createPool({\n    // connectionLimit : 1000,\n    // connectTimeout  : 60 * 60 * 1000,\n    // acquireTimeout  : 60 * 60 * 1000,\n    // timeout         : 60 * 60 * 1000,\n    host: process.env.LOCAL_DATABASE_HOST,\n    user: process.env.LOCAL_DATABASE_USER,\n    password: process.env.LOCAL_DATABASE_PASSWORD,\n    database: process.env.LOCAL_DATABASE\n  });\n}\nmodule.exports = db;\n\n//# sourceURL=webpack://lalalol_build/./db.js?");

/***/ }),

/***/ "./routes/admin.js":
/*!*************************!*\
  !*** ./routes/admin.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const express = __webpack_require__(/*! express */ \"express\");\nconst router = express.Router();\n// const ejs = require('ejs')\nconst connection = __webpack_require__(/*! ../db */ \"./db.js\");\n// const path = require('path');\n// const fs = require('fs')\n\n// fs.readFile(path.join(__dirname, 'error.html'),'utf-8',function(err,data){\n//   // readFile 이므로 비 동기식이며, readFile()메소드를 실행하면서 세번쨰 파라미터로 전달된 함수는 파일을 읽어들이는 작업이 끝났을때 호출이 된다. 이때, err,data 를 전달받아 오류 발생여부 확인할 수 있다.\n//       console.log(data);             \n//     //에러 발생시 err은 오류 데이터가 들어가고 에러 발생하지 않았을 경우 null 값이 들어간다.\n//   });\nrouter.use(express.json());\nrouter.use(express.urlencoded({\n  extended: false\n}));\nrouter.get('/api/category-all', function (request, response) {\n  console.log('category-all call::');\n  response.header(\"Access-Control-Allow-Origin\", \"*\");\n  const query = \"SELECT * FROM node_info\";\n  connection.query(query, function (error, results, fields) {\n    if (error) {\n      console.log('category-all error::', error);\n      response.status(500);\n      response.render('error', {\n        error: error\n      });\n    } else {\n      response.send({\n        result: results\n      });\n    }\n  });\n});\nrouter.get('/api/category-group', function (request, response) {\n  const query = \"SELECT node_id\\n  , pnode_id\\n  , depth\\n  , sub_yn\\n  , node_path\\n  , node_nm\\n  , node_code\\n  , use_yn\\n  FROM node_info WHERE pnode_id = 0\";\n  connection.query(query, function (error, results, fields) {\n    if (error) {\n      response.status(500);\n      response.render('error', {\n        error: error\n      });\n    } else {\n      response.send({\n        result: results\n      });\n    }\n  });\n});\nrouter.get('/api/category-sub-group', function (request, response) {\n  console.log('request.query', request.query);\n  console.log('rresponse', response);\n  connection.query('SELECT * FROM node_info WHERE pnode_id = ?', [request.query.pNodeId], function (error, results, fields) {\n    if (error) {\n      response.status(500);\n      response.render('error', {\n        error: error\n      });\n    } else {\n      response.send({\n        result: results\n      });\n    }\n  });\n});\nrouter.get('/api/category-list', (req, res) => {\n  console.log('params', req.params);\n  console.log('query', req.query);\n  const sql = \"SELECT node_id\\n  , pnode_id\\n  , depth\\n  , sub_yn\\n  , node_path\\n  , node_nm\\n  , node_code\\n  , use_yn\\nFROM  (\\n     SELECT * \\n       FROM node_info\\n   ORDER BY pnode_id, node_id\\n     ) node_sorted,\\n    (SELECT @pv := ?) initial\\nWHERE   FIND_IN_SET(pnode_id, @pv)\\nAND   LENGTH(@pv := concat(@pv, ',', node_id))\";\n  connection.query(sql, [req.query.pNodeId], (err, data) => {\n    if (err) {\n      res.status(500);\n      res.render('error', {\n        error: err\n      });\n      res.send({\n        error: err\n      });\n    } else {\n      res.send({\n        result: data\n      });\n    }\n  });\n});\nrouter.post('/api/modify-category', function (request, response) {\n  // const {name, password, email, appId, provider} = request.body;\n  const nodeCode = request.body.nodeCode;\n  const nodeName = request.body.nodeName;\n  const nodeId = request.body.nodeId;\n  const useYN = request.body.useYN;\n  const params = [nodeCode, nodeName, useYN, nodeId];\n  connection.query('UPDATE node_info SET node_code = ?, node_nm = ?, use_yn = ? WHERE node_id = ?', params, (err, results) => {\n    if (err) {\n      console.error('Error code : ' + err.code);\n      console.error('Error Message : ' + err.message);\n      throw new Error(err);\n    } else {\n      response.send('success');\n      response.end();\n    }\n  });\n});\nrouter.post('/api/update-sub-yn', function (request, response) {\n  // const {name, password, email, appId, provider} = request.body;\n  const nodeId = request.body.pNodeId;\n  const subYN = request.body.subYN;\n  const params = [subYN, nodeId];\n  connection.query('UPDATE node_info SET sub_yn = ? WHERE node_id = ?', params, (err, results) => {\n    if (err) {\n      console.error('Error code : ' + err.code);\n      console.error('Error Message : ' + err.message);\n      throw new Error(err);\n    } else {\n      response.send('success');\n      response.end();\n    }\n  });\n});\nrouter.post('/api/regist-category', function (request, response) {\n  // const {name, password, email, appId, provider} = request.body;\n  const pNodeId = request.body.pNodeId;\n  const nodeCode = request.body.nodeCode;\n  const nodeName = request.body.nodeName;\n  // const nodeId = request.body.nodeId;\n  const nodePath = request.body.nodePath;\n  const depth = request.body.depth;\n  const useYN = request.body.useYN;\n  const params = [pNodeId, nodeCode, nodeName, nodePath, depth, useYN];\n  connection.query('INSERT INTO node_info (pnode_id, node_code, node_nm, node_path, depth, use_yn) VALUES (?,?,?,?,?,?)', params, (err, results) => {\n    if (err) {\n      console.error('Error code : ' + err.code);\n      console.error('Error Message : ' + err.message);\n      throw new Error(err);\n    } else {\n      response.send('success');\n      response.end();\n    }\n  });\n});\nmodule.exports = router;\n\n//# sourceURL=webpack://lalalol_build/./routes/admin.js?");

/***/ }),

/***/ "./routes/posts.js":
/*!*************************!*\
  !*** ./routes/posts.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const express = __webpack_require__(/*! express */ \"express\");\nconst router = express.Router();\nconst connection = __webpack_require__(/*! ../db */ \"./db.js\");\nconst api = __webpack_require__(/*! ../src/api/posts */ \"./src/api/posts.js\");\n// const fs = require('fs')\n// const path = require('path');\n// const bcrypt = require('bcrypt');\n// const saltRound = 10;\n// const multer = require('multer');\t//파일업로드를 위한 node 미들웨어\n// const upload = multer({ dest: './public/uploads' });\t//실제 사진은 서버 ./upload폴더에 저장\n// //db에는 실제 이미지를 올리는 것이 아닌 서버에서의 해당 파일 경로를 string(varchar)타입으로 저장할 것\n// // /image/${filename}꼴로 db에 저장하고, \n// // 서버에서 다시 SELECT 등으로 가져올 땐 image폴더 대신 upload폴더에서 가져오도록 함\n// router.use(express.static('./public/uploads'));\n// fs.readdir('./public/uploads', (error) => {\n//   // uploads 폴더 없으면 생성\n//   if (error) {\n//       fs.mkdirSync('./public/uploads');\n//   }\n// })\n\n// router.use(express.urlencoded({ extended: false }))\n// router.use(express.json()); \nrouter.use(express.json({\n  limit: \"50mb\"\n}));\nrouter.use(express.urlencoded({\n  limit: \"50mb\",\n  extended: false\n}));\nrouter.post(api.REGIST_POST, function (request, response) {\n  console.log('REGIST_POST params', request.params);\n  console.log('query', request.query);\n  const data = request.body;\n  // bcrypt.genSalt(saltRound, (err, salt) => {\n  //   if (err) throw new Error(err);\n  //   bcrypt.hash(data.password, salt, (err, hash) => {\n  //     if (err) throw new Error(err); // 입력 구문\n  //     let now = new Date();\n  //     let sql = 'INSERT INTO posts (name, email, password, subject, content, ip, created_at) VALUES (?, ?, ?, ?, ?, inet_aton(?), ?)';\n  //     let bindParam = [\n  //       data.name, \n  //       data.email,\n  //       hash, // 해싱된 비밀번호\n  //       data.subject,\n  //       data.content,\n  //       data.ip,\n  //       now\n  //     ];\n  //     connection.query(sql, bindParam, (err, results, fields) => {\n  //       if (err) {\n  //         console.error('Error code : ' + err.code);\n  //         console.error('Error Message : ' + err.message);\n  //         throw new Error(err); \n  //       } else { \n  //         response.send(JSON.parse(JSON.stringify(results))); \n  //       }\n  //     });\n  //     /** * 위 코드에서 result 의 값으로 넘어오는 것들 * * fieldCount: 0, * affectedRows: 1, // 성공한 개수 * insertId: 2, * serverStatus: 2, * warningCount: 0, * message: '', * protocol41: true, * changedRows: 0 */ \n  //   });\n  // });\n  let now = new Date();\n  // let sql = 'INSERT INTO posts (name, email, password, subject, content, ip, created_at) VALUES (?, ?, ?, ?, ?, inet_aton(?), ?)';\n  let sql = 'INSERT INTO posts (name, email, password, subject, content, created_at, group_type, image) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';\n  const content = \"\".concat(data.content);\n  const bindParam = [data.name, data.email, data.password, data.subject, content, now, data.groupType, data.image];\n  // const content = `<p style=\"text-align:start;\"><span style=\"color: rgb(81,81,81);background-color: rgb(255,255,255);font-size: 16px;font-family: Noto Sans KR\", \"PT Serif\", Georgia, \"Times New Roman\", serif;\">axios에서 \n  // 추가 데이터를 보내는 방법에는 data와 params가 있다. data는 post요청을 보낼 때 사용되는 객체이며, params는 위의 예시처럼 url에 포함되는 데이터를 넣어주는 것이다.</span> <span style=\"color: rgb(81,81,81);background-color: rgb(255,255,255);font-size: 16px;font-family: Noto Sans KR\", \"PT Serif\", Georgia, \"Times New Roman\", serif;\"><strong>주의해야 할 점은, 서버에서는 req.params를 사용하면 예상된 변수(?)값을 받아오는 의미이지만, axios에 \n  // 서는 params가 ?뒤에오는 쿼리문을 뜻한다. 헷갈리지 말자!</strong></span></p>\\n' +\n  // [0]       '<p style=\"text-align:start;\"><span style=\"color: rgb(81,81,81);background-color: rgb(255,255,255);font-size: 16px;font-family: Noto Sans KR\", \"PT Serif\", Georgia, \"Times New Roman\", serif;\">추가적으로 XML, JSON, Multi Form등을 사용해야 할 때는 post 요청을 보낼 때다. delete, get을 사용할 때는, data로 넘기지말고 params로 간단히 id를 넘겨야 한다.</span>&nbsp;</p>\\n`;\n  // const bindParam = ['운영자', 'test@mail', '1111', 'test insert', content, '2021-07-21T07:01:43']\n  connection.query(sql, bindParam, (err, results, fields) => {\n    if (err) {\n      response.status(500);\n      response.render('error', {\n        error: err\n      });\n      response.send({\n        error: err\n      });\n      throw new Error(err);\n    } else {\n      response.send(JSON.parse(JSON.stringify(results)));\n    }\n  });\n});\n// const upload = multer({\n//   storage: multer.diskStorage({\n//       destination(req, file, cb) {\n//           cb(null, 'uploads/');\n//       },\n//       filename(req, file, cb) {\n//           const ext = path.extname(file.originalname);\n//           cb(null, path.basename(file.originalname, ext) + Date.now() + ext);\n//       },\n//   }),\n//   limits: { fileSize: 5 * 1024 * 1024 },\n// })\nrouter.put(api.UPDATE_POST, function (request, response) {\n  console.log('params', request.params);\n  console.log('update request::', request.query);\n  const data = request.body;\n  // bcrypt.genSalt(saltRound, (err, salt) => {\n  //   if (err) throw new Error(err);\n  //   bcrypt.hash(data.password, salt, (err, hash) => {\n  //     if (err) throw new Error(err); // 입력 구문\n  //     let now = new Date();\n  //     let sql = 'INSERT INTO posts (name, email, password, subject, content, ip, created_at) VALUES (?, ?, ?, ?, ?, inet_aton(?), ?)';\n  //     let bindParam = [\n  //       data.name, \n  //       data.email,\n  //       hash, // 해싱된 비밀번호\n  //       data.subject,\n  //       data.content,\n  //       data.ip,\n  //       now\n  //     ];\n  //     connection.query(sql, bindParam, (err, results, fields) => {\n  //       if (err) {\n  //         console.error('Error code : ' + err.code);\n  //         console.error('Error Message : ' + err.message);\n  //         throw new Error(err); \n  //       } else { \n  //         response.send(JSON.parse(JSON.stringify(results))); \n  //       }\n  //     });\n  //     /** * 위 코드에서 result 의 값으로 넘어오는 것들 * * fieldCount: 0, * affectedRows: 1, // 성공한 개수 * insertId: 2, * serverStatus: 2, * warningCount: 0, * message: '', * protocol41: true, * changedRows: 0 */ \n  //   });\n  // });\n  let now = new Date();\n  // let sql = 'INSERT INTO posts (name, email, password, subject, content, ip, created_at) VALUES (?, ?, ?, ?, ?, inet_aton(?), ?)';\n  let sql = 'UPDATE posts SET email = ?, name = ?, group_type = ?, subject =?, content = ?, updated_at = ?, ip = ?, image = ? WHERE id = ?';\n  const content = \"\".concat(data.content);\n  // let image = null;\n  // console.log('request.file', request.file);\n  // if(request.file) {\n  //   image = `${request.file.filename}`;\n  // }\n  // if(data.file) {\n  //   image = `/image/${request.file.filename}`;\n  // }\n  const bindParam = [data.email, data.name, data.groupType, data.title, content, now, data.ip, data.image, data.id];\n  console.log('bindParam', bindParam);\n  // const content = `<p style=\"text-align:start;\"><span style=\"color: rgb(81,81,81);background-color: rgb(255,255,255);font-size: 16px;font-family: Noto Sans KR\", \"PT Serif\", Georgia, \"Times New Roman\", serif;\">axios에서 \n  // 추가 데이터를 보내는 방법에는 data와 params가 있다. data는 post요청을 보낼 때 사용되는 객체이며, params는 위의 예시처럼 url에 포함되는 데이터를 넣어주는 것이다.</span> <span style=\"color: rgb(81,81,81);background-color: rgb(255,255,255);font-size: 16px;font-family: Noto Sans KR\", \"PT Serif\", Georgia, \"Times New Roman\", serif;\"><strong>주의해야 할 점은, 서버에서는 req.params를 사용하면 예상된 변수(?)값을 받아오는 의미이지만, axios에 \n  // 서는 params가 ?뒤에오는 쿼리문을 뜻한다. 헷갈리지 말자!</strong></span></p>\\n' +\n  // [0]       '<p style=\"text-align:start;\"><span style=\"color: rgb(81,81,81);background-color: rgb(255,255,255);font-size: 16px;font-family: Noto Sans KR\", \"PT Serif\", Georgia, \"Times New Roman\", serif;\">추가적으로 XML, JSON, Multi Form등을 사용해야 할 때는 post 요청을 보낼 때다. delete, get을 사용할 때는, data로 넘기지말고 params로 간단히 id를 넘겨야 한다.</span>&nbsp;</p>\\n`;\n  // const bindParam = ['운영자', 'test@mail', '1111', 'test insert', content, '2021-07-21T07:01:43']\n  connection.query(sql, bindParam, (err, results, fields) => {\n    if (err) {\n      response.status(500);\n      response.render('error', {\n        error: err\n      });\n      response.send({\n        error: err\n      });\n      throw new Error(err);\n    } else {\n      console.log('results--', results);\n      response.send(JSON.parse(JSON.stringify(results)));\n    }\n  });\n});\nrouter.get(api.POST_LIST, function (request, response) {\n  // let sql = 'SELECT * FROM posts ORDER BY id DESC LIMIT 10';\n  let sql = 'SELECT * FROM posts ORDER BY id DESC';\n  connection.query(sql, (err, data, fields) => {\n    if (err) {\n      response.status(500);\n      response.render('error', {\n        error: err\n      });\n      response.send({\n        error: err\n      });\n      throw new Error(err);\n    } else {\n      response.send({\n        result: data\n      });\n      // response.send(JSON.parse(JSON.stringify(results))); \n    }\n  });\n});\nrouter.get(api.MEMBER_PREVIEW_LIST, function (request, response) {\n  // let sql = 'SELECT * FROM posts ORDER BY id DESC LIMIT 10';\n  let sql = 'SELECT * FROM posts WHERE group_type NOT IN (?,?) ORDER BY id DESC LIMIT 12';\n  connection.query(sql, ['GALLERY', 'MASTER'], (err, data, fields) => {\n    if (err) {\n      response.status(500);\n      response.render('error', {\n        error: err\n      });\n      response.send({\n        error: err\n      });\n      throw new Error(err);\n    } else {\n      response.send({\n        result: data\n      });\n      // response.send(JSON.parse(JSON.stringify(results))); \n    }\n  });\n});\nrouter.get(api.PREVIEW_LIST, function (request, response) {\n  // let sql = 'SELECT * FROM posts ORDER BY id DESC LIMIT 10';\n  let sql = 'SELECT * FROM posts WHERE group_type NOT IN (?, ?) ORDER BY id DESC LIMIT 12';\n  connection.query(sql, ['MASTER', 'GALLERY'], (err, data, fields) => {\n    if (err) {\n      response.status(500);\n      response.render('error', {\n        error: err\n      });\n      response.send({\n        error: err\n      });\n      throw new Error(err);\n    } else {\n      response.send({\n        result: data\n      });\n      // response.send(JSON.parse(JSON.stringify(results))); \n    }\n  });\n});\nrouter.get(api.ACTIVITIES_POST, function (request, response) {\n  // let sql = 'SELECT * FROM posts ORDER BY id DESC LIMIT 10';\n  let sql = 'SELECT name,pp.email,pp.subject,pp.created_at,(select app_image_url from users as u where u.email = pp.email COLLATE utf8mb4_0900_ai_ci) as user_image from posts as pp ORDER BY id DESC  LIMIT 12';\n  connection.query(sql, (err, data, fields) => {\n    if (err) {\n      response.status(500);\n      response.render('error', {\n        error: err\n      });\n      response.send({\n        error: err\n      });\n      throw new Error(err);\n    } else {\n      response.send({\n        result: data\n      });\n      // response.send(JSON.parse(JSON.stringify(results))); \n    }\n  });\n});\nrouter.post('/register', function (request, response) {\n  const username = request.body.username;\n  const password = request.body.password;\n  const password2 = request.body.password2;\n  const email = request.body.email;\n  console.log(username, password, email);\n  if (username && password && email) {\n    connection.query('SELECT * FROM user WHERE username = ? AND password = ? AND email = ?', [username, password, email], function (error, results, fields) {\n      if (error) throw error;\n      if (results.length <= 0 && password == password2) {\n        connection.query('INSERT INTO user (username, password, email) VALUES(?,?,?)', [username, password, email], function (error, data) {\n          if (error) console.log(error);else console.log(data);\n        });\n        response.send('<script type=\"text/javascript\">alert(\"회원가입을 환영합니다!\"); document.location.href=\"/\";</script>');\n      } else if (password != password2) {\n        response.send('<script type=\"text/javascript\">alert(\"입력된 비밀번호가 서로 다릅니다.\"); document.location.href=\"/register\";</script>');\n      } else {\n        response.send('<script type=\"text/javascript\">alert(\"이미 존재하는 아이디 입니다.\"); document.location.href=\"/register\";</script>');\n      }\n      response.end();\n    });\n  } else {\n    response.send('<script type=\"text/javascript\">alert(\"모든 정보를 입력하세요\"); document.location.href=\"/register\";</script>');\n    response.end();\n  }\n});\nrouter.get(api.POST_DETAIL, (req, res) => {\n  console.log('params', req.params);\n  console.log('query', req.query);\n  connection.query(\"SELECT * FROM posts WHERE id = ?\", [req.query.id], (err, data) => {\n    if (err) {\n      res.status(500);\n      res.render('error', {\n        error: err\n      });\n      res.send({\n        error: err\n      });\n    } else {\n      res.send({\n        result: data\n      });\n    }\n  });\n});\nrouter.get(api.COMMENT_LIST, (req, res) => {\n  const sql = 'select *, (select username from users where id = pp.writer_id) as userName, (select app_image_url from users where id = pp.writer_id) as userImage from post_comment pp where post_id = ?';\n  connection.query(sql, [req.query.id], (err, data) => {\n    if (err) {\n      res.status(500);\n      res.render('error', {\n        error: err\n      });\n      res.send({\n        error: err\n      });\n    } else {\n      res.send({\n        result: data\n      });\n    }\n  });\n});\nrouter.post(api.COMMENT_REGIST, function (request, response) {\n  console.log('params', request.params);\n  console.log('query', request.query);\n  const data = request.body;\n  let sql = 'INSERT INTO post_comment (post_id, writer_id, content, ip) VALUES (?, ?, ?, ?)';\n  const content = \"\".concat(data.content);\n  const bindParam = [data.postId, data.userId, content, data.ip];\n  console.log('bindParam---', bindParam);\n  const commentCntSql = 'UPDATE posts SET comment_cnt = comment_cnt+1 where id = ?';\n  connection.query(sql, bindParam, (err, results, fields) => {\n    if (err) {\n      response.status(500);\n      response.render('error', {\n        error: err\n      });\n      response.send({\n        error: err\n      });\n      throw new Error(err);\n    } else {\n      connection.query(commentCntSql, [data.postId], (err, results, fields) => {\n        if (err) {\n          response.status(500);\n          response.render('error', {\n            error: err\n          });\n          response.send({\n            error: err\n          });\n          throw new Error(err);\n        } else {\n          // response.send(JSON.parse(JSON.stringify(results))); \n        }\n      });\n      response.send(JSON.parse(JSON.stringify(results)));\n    }\n  });\n});\nrouter.put(api.COMMNET_UPDATE, function (request, response) {\n  const data = request.body;\n  let sql = 'UPDATE post_comment SET content = ?, ip = ?, updated_at = ? where id = ?';\n  const content = \"\".concat(data.content);\n  const bindParam = [content, data.ip, data.now, data.id];\n  connection.query(sql, bindParam, (err, results, fields) => {\n    if (err) {\n      response.status(500);\n      response.render('error', {\n        error: err\n      });\n      response.send({\n        error: err\n      });\n      throw new Error(err);\n    } else {\n      response.send(JSON.parse(JSON.stringify(results)));\n    }\n  });\n});\nrouter.delete(api.COMMENT_DELETE, (req, res) => {\n  const commentCntSql = 'UPDATE posts SET comment_cnt = comment_cnt-1 where id = ?';\n  connection.query(\"DELETE FROM post_comment WHERE id = ?\", [req.query.id], (err, data) => {\n    if (err) {\n      res.status(500);\n      res.render('error', {\n        error: err\n      });\n      res.send({\n        error: err\n      });\n    } else {\n      connection.query(commentCntSql, [req.query.postId], (err, results, fields) => {\n        if (err) {\n          res.status(500);\n          res.render('error', {\n            error: err\n          });\n          res.send({\n            error: err\n          });\n          throw new Error(err);\n        } else {\n          // response.send(JSON.parse(JSON.stringify(results))); \n        }\n      });\n      res.send({\n        result: data\n      });\n    }\n  });\n});\nrouter.delete(api.DELETE_POST, (req, res) => {\n  console.log('params', req.params);\n  console.log('query', req.query);\n  connection.query(\"DELETE FROM posts WHERE id = ?\", [req.query.id], (err, data) => {\n    if (err) {\n      res.status(500);\n      res.render('error', {\n        error: err\n      });\n      res.send({\n        error: err\n      });\n    } else {\n      res.send({\n        result: data\n      });\n    }\n  });\n});\nrouter.get(api.CATEGOTY_POST_LIST, (req, res) => {\n  console.log('params', req.params);\n  console.log('query', req.query);\n  connection.query(\"SELECT * FROM posts WHERE group_type = ? ORDER BY id DESC\", [req.query.groupType], (err, data) => {\n    if (err) {\n      res.status(500);\n      res.render('error', {\n        error: err\n      });\n      res.send({\n        error: err\n      });\n    } else {\n      res.send({\n        result: data\n      });\n    }\n  });\n});\nmodule.exports = router;\n\n//# sourceURL=webpack://lalalol_build/./routes/posts.js?");

/***/ }),

/***/ "./routes/user.js":
/*!************************!*\
  !*** ./routes/user.js ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const express = __webpack_require__(/*! express */ \"express\");\nconst router = express.Router();\n// const fs = require('fs')\n// const ejs = require('ejs')\nconst connection = __webpack_require__(/*! ../db */ \"./db.js\");\nconst crypto = __webpack_require__(/*! crypto */ \"crypto\");\nrouter.use(express.json());\nrouter.use(express.urlencoded({\n  extended: false\n}));\nrouter.post('/api/userCheck', function (request, response) {\n  console.log('request.body', request.body);\n  console.log('rresponse', response);\n  response.header(\"Access-Control-Allow-Origin\", \"*\");\n  const username = request.body.name;\n  const email = request.body.email;\n  connection.query('SELECT * FROM users WHERE username = ? AND email = ?', [username, email], function (error, results, fields) {\n    if (error) {\n      console.log('error;;;', error);\n      // response.status(500);\n      response.render('error', {\n        error: error\n      });\n    } else {\n      response.send({\n        result: results\n      });\n    }\n  });\n});\nrouter.post('/api/userEmailPassCheck', function (request, response) {\n  console.log('request.body', request.body);\n  console.log('rresponse', response);\n  const userpassword = request.body.password;\n  const email = request.body.email;\n  connection.query('SELECT * FROM users WHERE password = ? AND email = ?', [userpassword, email], function (error, results, fields) {\n    if (error) {\n      response.status(500);\n      response.render('error', {\n        error: error\n      });\n    } else {\n      response.send({\n        result: results\n      });\n    }\n  });\n\n  // const salt = crypto.randomBytes(32).toString('base64');\n  // console.log('salt :: ', salt);\n  // crypto.randomBytes(64, (err, buf) => {\n  //   //salt는 생성하는 해시값 이외에 추가적인 암호화 값\n  //     const salt = buf.toString('base64');\n  //     console.log('salt :: ', salt);\n  //     //crypto.pbkdf2의 salt 뒤 숫자 파라미터는 임의의 값으로 주어준다.\n  //     crypto.pbkdf2(userpassword, salt, 1203947, 64, 'sha512', (err, key) => {\n  //         console.log('password :: ', key.toString('base64')); \n  //         connection.query('SELECT * FROM users WHERE password = ? AND email = ?', [userpassword, email], function(error, results, fields) {\n  //           if (error) {\n  //             response.status(500);\n  //             response.render('error', { error: err });\n  //           } else {\n  //             response.send({ result : results });\n  //           }\n  //         });\n  //     });\n  // });\n});\nrouter.post('/api/user-password-change', function (request, response) {\n  console.log('request.body', request.body);\n  console.log('rresponse', response);\n  const userpassword = request.body.password;\n  const email = request.body.email;\n  connection.query('UPDATE users SET password = ?, password_s = ? WHERE email = ?', [userpassword, userpassword, email], function (error, results, fields) {\n    if (error) {\n      response.status(500);\n      response.render('error', {\n        error: error\n      });\n    } else {\n      response.send({\n        result: results\n      });\n    }\n  });\n\n  // crypto.randomBytes(64, (err, buf) => {\n  //     const salt = buf.toString('base64');\n  //     console.log('salt :: ', salt);\n  //     crypto.pbkdf2(userpassword, salt, 1203947, 64, 'sha512', (err, key) => {\n  //         console.log('password :: ', key.toString('base64')); // 'dWhPkH6c4X1Y71A/DrAHhML3DyKQdEkUOIaSmYCI7xZkD5bLZhPF0dOSs2YZA/Y4B8XNfWd3DHIqR5234RtHzw=='\n  //         connection.query('UPDATE users SET password = ?, password_s = ? WHERE email = ?', [key.toString('base64'), salt, email],\n  //         function(error, results, fields) {\n  //           if (error) {\n  //             response.status(500);\n  //             response.render('error', { error: err });\n  //           } else {\n  //             response.send({ result : results });\n  //           }\n  //         });\n  //     });\n  //   });\n});\nrouter.post('/api/user-update', function (request, response) {\n  console.log('request.body', request.body);\n  console.log('rresponse', response);\n  const userpassword = request.body.password;\n  const email = request.body.email;\n  const grade = request.body.grade;\n  const params = [userpassword, userpassword, grade, email];\n  connection.query('UPDATE users SET password = ?, password_s = ?, grade = ? WHERE email = ?', params, function (error, results, fields) {\n    if (error) {\n      response.status(500);\n      response.render('error', {\n        error: error\n      });\n    } else {\n      response.send({\n        result: results\n      });\n    }\n  });\n\n  // crypto.randomBytes(64, (err, buf) => {\n  //     const salt = buf.toString('base64');\n  //     console.log('salt :: ', salt);\n  //     crypto.pbkdf2(userpassword, salt, 1203947, 64, 'sha512', (err, key) => {\n  //         console.log('password :: ', key.toString('base64')); // 'dWhPkH6c4X1Y71A/DrAHhML3DyKQdEkUOIaSmYCI7xZkD5bLZhPF0dOSs2YZA/Y4B8XNfWd3DHIqR5234RtHzw=='\n  //         connection.query('UPDATE users SET password = ?, password_s = ? WHERE email = ?', [key.toString('base64'), salt, email],\n  //         function(error, results, fields) {\n  //           if (error) {\n  //             response.status(500);\n  //             response.render('error', { error: err });\n  //           } else {\n  //             response.send({ result : results });\n  //           }\n  //         });\n  //     });\n  //   });\n});\nrouter.post('/api/updateLoggedinUser', function (request, response) {\n  // const {name, password, email, appId, provider} = request.body;\n  const email = request.body.email;\n  const imageUrl = request.body.imageUrl;\n  const ip = request.body.ip;\n  const params = [imageUrl, ip, email];\n  connection.query('UPDATE users SET app_image_url = ?, update_ip = ? WHERE email = ?', params, (err, results) => {\n    if (err) {\n      console.error('Error code : ' + err.code);\n      console.error('Error Message : ' + err.message);\n      throw new Error(err);\n    } else {\n      response.send('success');\n      response.end();\n    }\n  });\n});\nrouter.post('/api/userEmailCheck', function (request, response) {\n  console.log('request.body', request.body);\n  const email = request.body.email;\n  connection.query('SELECT * FROM users WHERE email = ?', [email], function (error, results, fields) {\n    console.log('error, results', error, results);\n    if (error) {\n      response.status(500);\n      response.render('error', {\n        error: error\n      });\n      response.send({\n        error: error\n      });\n    } else {\n      response.send({\n        result: results\n      });\n    }\n  });\n});\nrouter.post('/api/login', function (request, response) {\n  console.log('request.body', request.body);\n  const username = request.body.username;\n  const password = request.body.password;\n  if (username && password) {\n    connection.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], function (error, results, fields) {\n      if (error) throw error;\n      if (results.length > 0) {\n        request.session.loggedin = true;\n        request.session.username = username;\n        response.redirect('/');\n        response.end();\n      } else {\n        response.send('<script type=\"text/javascript\">alert(\"로그인 정보가 일치하지 않습니다.\"); document.location.href=\"/login\";</script>');\n      }\n    });\n  } else {\n    response.send('<script type=\"text/javascript\">alert(\"username과 password를 입력하세요!\"); document.location.href=\"/login\";</script>');\n    response.end();\n  }\n});\nrouter.get('/api/logout', function (request, response) {\n  request.session.loggedin = false;\n  response.send('<script type=\"text/javascript\">alert(\"성공적으로 로그아웃 되었습니다.\"); document.location.href=\"/\";</script>');\n  response.end();\n});\nrouter.post('/api/signup', function (request, response) {\n  // const {name, password, email, appId, provider} = request.body;\n  const name = request.body.name;\n  const password = request.body.password;\n  const appId = request.body.appId;\n  const email = request.body.email;\n  const provider = request.body.provider;\n  const ip = request.body.ip;\n  const params = [name, password, email, appId, provider, ip, ip];\n  console.log('/api/signup--', name, password, email, appId, provider);\n  connection.query('INSERT INTO users (username, password, email, app_id, provided_app, create_ip) VALUES (?,?,?,?,?,?)', params, (err, results) => {\n    if (err) {\n      console.error('Error code : ' + err.code);\n      console.error('Error Message : ' + err.message);\n      throw new Error(err);\n    } else {\n      response.send('success');\n      response.end();\n    }\n  });\n});\nrouter.post('/register', function (request, response) {\n  const username = request.body.username;\n  const password = request.body.password;\n  const password2 = request.body.password2;\n  const email = request.body.email;\n  console.log(username, password, email);\n  if (username && password && email) {\n    connection.query('SELECT * FROM users WHERE username = ? AND password = ? AND email = ?', [username, password, email], function (error, results, fields) {\n      if (error) throw error;\n      if (results.length <= 0 && password == password2) {\n        connection.query('INSERT INTO user (username, password, email) VALUES(?,?,?)', [username, password, email], function (error, data) {\n          if (error) console.log(error);else console.log(data);\n        });\n        response.send('<script type=\"text/javascript\">alert(\"회원가입을 환영합니다!\"); document.location.href=\"/\";</script>');\n      } else if (password != password2) {\n        response.send('<script type=\"text/javascript\">alert(\"입력된 비밀번호가 서로 다릅니다.\"); document.location.href=\"/register\";</script>');\n      } else {\n        response.send('<script type=\"text/javascript\">alert(\"이미 존재하는 아이디 입니다.\"); document.location.href=\"/register\";</script>');\n      }\n      response.end();\n    });\n  } else {\n    response.send('<script type=\"text/javascript\">alert(\"모든 정보를 입력하세요\"); document.location.href=\"/register\";</script>');\n    response.end();\n  }\n});\nrouter.get('/api/users', (req, res) => {\n  connection.query(\"SELECT * FROM users\", (err, data) => {\n    if (err) {\n      res.send({\n        error: err\n      });\n    } else {\n      res.send({\n        result: data\n      });\n    }\n  });\n});\nmodule.exports = router;\n\n//# sourceURL=webpack://lalalol_build/./routes/user.js?");

/***/ }),

/***/ "./server.dev.js":
/*!***********************!*\
  !*** ./server.dev.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const express = __webpack_require__(/*! express */ \"express\");\n(__webpack_require__(/*! dotenv */ \"dotenv\").config)({\n  path: './.env.development'\n});\nconst app = express();\nconst path = __webpack_require__(/*! path */ \"path\");\nconst cors = __webpack_require__(/*! cors */ \"cors\");\nconst root = path.resolve(__dirname, 'dist');\nconst port = process.env.PORT || 5000;\napp.use(cors());\n\n// app.use(express.json()); // json 페이로드 구문을 분석한다 (body-parser 기반)\napp.use(express.json({\n  limit: \"50mb\"\n}));\napp.use(express.urlencoded({\n  limit: \"50mb\",\n  extended: false\n}));\n\n// webpack-dev-server express 용 설정\nconst webpack = __webpack_require__(/*! webpack */ \"webpack\"); // 웹팩\nconst userRouter = __webpack_require__(/*! ./routes/user.js */ \"./routes/user.js\");\nconst postsRouter = __webpack_require__(/*! ./routes/posts.js */ \"./routes/posts.js\");\nconst adminRouter = __webpack_require__(/*! ./routes/admin.js */ \"./routes/admin.js\");\napp.use(userRouter);\napp.use(postsRouter);\napp.use(adminRouter);\n// const webpackConfig = require(path.resolve(__dirname, 'webpack.dev.js')); // 웹팩설정\n// const webpackCompiler = webpack(webpackConfig); // 웹팩컴파일러\n// const webpackDevMiddleware = require('webpack-dev-middleware')(webpackCompiler, webpackConfig.devServer)\n// app.use(webpackDevMiddleware);\n\n// // add hot loading middleware\n// const webpackHotMiddleware = require('webpack-hot-middleware')(webpackCompiler);\n// app.use(webpackHotMiddleware);\nconsole.log('process.cwd() dev:: ', process.cwd());\napp.use(express.static(path.join(__dirname, \"dist\"))); // 정적파일을 제공한다.\n\n//const staticMiddleWare = express.static(\"dist\");\nconst config = __webpack_require__(/*! ./webpack.dev.js */ \"./webpack.dev.js\");\nconst compiler = webpack(config);\nconsole.log('config.devServer--', config.devServer);\nconsole.log('config--', config);\nconst webpackDevMiddleware = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\")(compiler, {\n  publicPath: config.output.publicPath,\n  stats: {\n    colors: true\n  }\n});\n\n// 핫 로딩 미들웨어를 추가하자!\nconst webpackHotMiddleware = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\")(compiler);\napp.use(webpackDevMiddleware);\n// 웹팩dev 미들웨어 다음, static 미들웨어 이전\napp.use(webpackHotMiddleware);\n// server.use(staticMiddleWare);\napp.get('*', (req, res) => {\n  res.sendFile(path.join(__dirname, \"dist\", \"index.html\"));\n});\napp.listen(port, () => {\n  console.log(\"App listening at port: \".concat(port, \".\"));\n});\n\n//# sourceURL=webpack://lalalol_build/./server.dev.js?");

/***/ }),

/***/ "./src/api/posts.js":
/*!**************************!*\
  !*** ./src/api/posts.js ***!
  \**************************/
/***/ ((module) => {

eval("const CATEGOTY_POST_LIST = '/api/posts/category-list';\nconst POST_DETAIL = '/api/posts/detail';\nconst POST_LIST = '/api/posts/list';\nconst DELETE_POST = '/api/posts/delete';\nconst REGIST_POST = '/api/posts/regist';\nconst UPDATE_POST = '/api/posts/update';\nconst MEMBER_PREVIEW_LIST = '/api/posts/list-members-preview';\nconst PREVIEW_LIST = '/api/posts/list-preview';\nconst ACTIVITIES_POST = '/api/posts/activities';\nconst COMMENT_LIST = '/api/posts/comment-list';\nconst COMMENT_REGIST = '/api/posts/comment-regist';\nconst COMMNET_UPDATE = '/api/posts/comment-update';\nconst COMMENT_DELETE = '/api/comment/delete';\nconst api = {\n  POST_LIST,\n  POST_DETAIL,\n  DELETE_POST,\n  REGIST_POST,\n  UPDATE_POST,\n  MEMBER_PREVIEW_LIST,\n  PREVIEW_LIST,\n  ACTIVITIES_POST,\n  COMMENT_LIST,\n  COMMENT_REGIST,\n  COMMNET_UPDATE,\n  COMMENT_DELETE,\n  CATEGOTY_POST_LIST\n};\nmodule.exports = api;\n\n//# sourceURL=webpack://lalalol_build/./src/api/posts.js?");

/***/ }),

/***/ "./webpack.common.js":
/*!***************************!*\
  !*** ./webpack.common.js ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const path = __webpack_require__(/*! path */ \"path\");\nconst webpack = __webpack_require__(/*! webpack */ \"webpack\");\nconst HtmlWebPackPlugin = __webpack_require__(/*! html-webpack-plugin */ \"html-webpack-plugin\");\nconst MiniCssExtractPlugin = __webpack_require__(/*! mini-css-extract-plugin */ \"mini-css-extract-plugin\");\nconst {\n  CleanWebpackPlugin\n} = __webpack_require__(/*! clean-webpack-plugin */ \"clean-webpack-plugin\");\nconst NodePolyfillPlugin = __webpack_require__(/*! node-polyfill-webpack-plugin */ \"node-polyfill-webpack-plugin\");\n// const TerserPlugin =  require('terser-webpack-plugin');\n// const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');\nconst {\n  WebpackManifestPlugin\n} = __webpack_require__(/*! webpack-manifest-plugin */ \"webpack-manifest-plugin\");\n// const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');\n// const os = require('os');\nmodule.exports = {\n  entry: {\n    main: './src/index.js'\n    // posts: './src/pages/Posts.js',\n    // vendor: [\"moment\", \"lodash\", \"react-bootstrap\"]\n  },\n  output: {\n    publicPath: '/',\n    filename: '[name].[hash].js',\n    chunkFilename: '[name].[chunkhash].js',\n    path: path.resolve(__dirname + \"/dist\")\n  },\n  resolve: {\n    extensions: ['.js', '.jsx'],\n    fallback: {\n      \"fs\": false\n    }\n  },\n  stats: {\n    children: true,\n    errorDetails: true\n  },\n  module: {\n    rules: [{\n      test: /\\.(js|jsx)$/,\n      exclude: \"/node_modules/\",\n      use: ['babel-loader']\n      // use: {\n      //   loader: 'babel-loader',\n      //   options: {\n      //     presets: [\n      //       '@babel/preset-env',\n      //       \"@babel/preset-react\"\n      //     ],\n      //     plugins: [\n      //       \"@babel/plugin-transform-runtime\",\n      //       \"@babel/plugin-syntax-dynamic-import\",\n      //       [\"transform-remove-console\", { \"exclude\": [ \"error\"] }]\n      //     ],\n      //   }\n      // }\n    }, {\n      test: /\\.html$/,\n      use: [{\n        loader: \"html-loader\",\n        options: {\n          minimize: true\n        }\n      }]\n    },\n    // {\n    //   test: /\\.(sa|sc|c)ss$/,\n    //   use: [\n    //     devMode ? \"style-loader\" : MiniCssExtractPlugin.loader,\n    //     \"css-loader\",\n    //     \"postcss-loader\",\n    //     \"sass-loader\",\n    //   ],\n    // },\n    // {\n    //   test: /\\.css$/,\n    //   use: [MiniCssExtractPlugin.loader, { loader: 'css-loader', options: { sourceMap: true }}]\n    // },\n    // {\n    //   test: /\\.css$/,\n    //   use: [MiniCssExtractPlugin.loader, 'css-loader']\n    // },\n    // {\n    //   test: /\\.scss$/,\n    //   use: [MiniCssExtractPlugin.loader, \"css-loader\", \"sass-loader\"]\n    // },\n\n    {\n      test: /.s?css$/,\n      use: [MiniCssExtractPlugin.loader, \"css-loader\", {\n        loader: \"sass-loader\",\n        options: {\n          // Prefer `dart-sass`\n          implementation: __webpack_require__(/*! sass */ \"sass\")\n        }\n      }]\n    }, {\n      test: /\\.(png|svg|jpg|jpeg|gif|ico)$/,\n      exclude: /node_modules/,\n      use: ['file-loader?name=[name].[ext]']\n    }, {\n      test: /\\.(ico|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\\?v=[0-9]\\.[0-9]\\.[0-9])?$/,\n      loader: 'url-loader',\n      options: {\n        name: '[hash].[ext]',\n        limit: 10000\n      }\n    },\n    // SVG 로더\n    {\n      test: /\\.svg$/i,\n      use: ['@svgr/webpack']\n    }, {\n      test: /\\.xml$/,\n      use: {\n        loader: 'xml-loader',\n        options: {\n          explicitArray: false\n        }\n      }\n    }]\n  },\n  // externals: {\n  //   express: 'express',\n  // },\n  // externals: {\n  //   // Don't bundle the 'react' npm package with the component.\n  //   'react': 'React' \n  // },\n  performance: {\n    hints: false\n  },\n  plugins: [new webpack.ProgressPlugin(),\n  // new CleanWebpackPlugin(),\n  new webpack.EnvironmentPlugin(), new HtmlWebPackPlugin({\n    template: './public/index.html',\n    // public/index.html 파일을 읽는다.\n    filename: 'index.html',\n    // output으로 출력할 파일은 index.html 이다.\n    favicon: './public/favicon.ico'\n  }),\n  // new HtmlWebPackPlugin({\n  //   filename: \"posts.html\",\n  //   excludeChunks: [\"main\"],\n  //   template: path.resolve(\"public/posts.html\"),\n  // }),\n  // new HtmlWebPackPlugin({\n  //   excludeChunks: [\"posts\"],\n  //   template: path.resolve(\"public/index.html\"),\n  // }),\n  new MiniCssExtractPlugin({\n    filename: '[name].css',\n    chunkFilename: '[name].chunk.css',\n    ignoreOrder: true\n  }),\n  // new webpack.IgnorePlugin(/^\\.\\/locale$/, [/moment$/]),\n  new webpack.ContextReplacementPlugin(/moment[/\\\\]locale$/, /^\\.\\/ko$/), new NodePolyfillPlugin({\n    excludeAliases: [\"console\"]\n  }), new WebpackManifestPlugin({\n    fileName: 'asset-manifest.json',\n    publicPath: '/'\n  })]\n};\n\n//# sourceURL=webpack://lalalol_build/./webpack.common.js?");

/***/ }),

/***/ "./webpack.dev.js":
/*!************************!*\
  !*** ./webpack.dev.js ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const {\n  merge\n} = __webpack_require__(/*! webpack-merge */ \"webpack-merge\");\nconst webpack = __webpack_require__(/*! webpack */ \"webpack\");\nconst common = __webpack_require__(/*! ./webpack.common */ \"./webpack.common.js\");\nconst BundleAnalyzerPlugin = (__webpack_require__(/*! webpack-bundle-analyzer */ \"webpack-bundle-analyzer\").BundleAnalyzerPlugin);\n//const Dotenv = require(\"dotenv-webpack\");\n(__webpack_require__(/*! dotenv */ \"dotenv\").config)({\n  path: './.env.development'\n});\nconsole.log('process.env dev::::::: ', process.env);\nmodule.exports = merge(common, {\n  mode: 'development',\n  devtool: 'source-map',\n  devServer: {\n    compress: true,\n    hot: true,\n    historyApiFallback: true,\n    port: 3000,\n    open: true,\n    proxy: {\n      \"/api/*\": {\n        target: \"http://localhost:5000\",\n        changeOrigin: true\n      }\n    }\n  },\n  plugins: [new webpack.DefinePlugin({\n    \"process.env\": {\n      NODE_ENV: JSON.stringify(\"development\"),\n      REACT_APP_IMAGE_PATH: JSON.stringify(process.env.REACT_APP_IMAGE_PATH),\n      REACT_APP_AWS_REGION: JSON.stringify(process.env.REACT_APP_AWS_REGION),\n      REACT_APP_S3_BUCKET_NAME: JSON.stringify(process.env.REACT_APP_S3_BUCKET_NAME),\n      REACT_APP_CONTENTS_PASSWORD: JSON.stringify(process.env.REACT_APP_CONTENTS_PASSWORD),\n      REACT_APP_FACEBOOK_APP_ID: JSON.stringify(process.env.REACT_APP_FACEBOOK_APP_ID),\n      REACT_APP_FACEBOOK_TEST_APP_ID: JSON.stringify(process.env.REACT_APP_FACEBOOK_TEST_APP_ID),\n      REACT_APP_GOOGLE_AUTH_CLIENT_ID: JSON.stringify(process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID),\n      REACT_APP_HIDDEN_KEY: JSON.stringify(process.env.REACT_APP_HIDDEN_KEY),\n      REACT_APP_AWS_ACCESS_KEY_ID: JSON.stringify(process.env.REACT_APP_AWS_ACCESS_KEY_ID),\n      REACT_APP_AWS_SECRET_ACCESS_KEY: JSON.stringify(process.env.REACT_APP_AWS_SECRET_ACCESS_KEY)\n    }\n  }), new webpack.EnvironmentPlugin(), new BundleAnalyzerPlugin({\n    // analyzerPort: 8000,\n    // analyzerHost: 'localhost',\n    analyzerMode: \"static\",\n    openAnalyzer: false\n  }), new webpack.HotModuleReplacementPlugin()]\n});\n\n//# sourceURL=webpack://lalalol_build/./webpack.dev.js?");

/***/ }),

/***/ "clean-webpack-plugin":
/*!***************************************!*\
  !*** external "clean-webpack-plugin" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("clean-webpack-plugin");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("cors");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "html-webpack-plugin":
/*!**************************************!*\
  !*** external "html-webpack-plugin" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("html-webpack-plugin");

/***/ }),

/***/ "mini-css-extract-plugin":
/*!******************************************!*\
  !*** external "mini-css-extract-plugin" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("mini-css-extract-plugin");

/***/ }),

/***/ "mysql":
/*!************************!*\
  !*** external "mysql" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("mysql");

/***/ }),

/***/ "node-polyfill-webpack-plugin":
/*!***********************************************!*\
  !*** external "node-polyfill-webpack-plugin" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("node-polyfill-webpack-plugin");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "sass":
/*!***********************!*\
  !*** external "sass" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("sass");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack");

/***/ }),

/***/ "webpack-bundle-analyzer":
/*!******************************************!*\
  !*** external "webpack-bundle-analyzer" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack-bundle-analyzer");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack-dev-middleware");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack-hot-middleware");

/***/ }),

/***/ "webpack-manifest-plugin":
/*!******************************************!*\
  !*** external "webpack-manifest-plugin" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack-manifest-plugin");

/***/ }),

/***/ "webpack-merge":
/*!********************************!*\
  !*** external "webpack-merge" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack-merge");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./server.dev.js");
/******/ 	
/******/ })()
;