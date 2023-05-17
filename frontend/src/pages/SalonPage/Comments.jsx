// import React, { useState, useEffect } from 'react';
// import { List, ListItem, ListItemAvatar, Avatar, ListItemText, Divider, Typography } from '@mui/material';
// import axios from 'axios';

// const CommentBox = () => {
//   const [commentValue, setCommentValue] = useState("");
//   const [comments, setComments] = useState([]);
//   const [visibleComments, setVisibleComments] = useState([]);

//   const onChange = (e) => {
//     setCommentValue(e.target.value);
//   }

//   const onSubmit = (e) => {
//     e.preventDefault();
//     setComments([...comments, commentValue]);
//     setCommentValue("");
//   }

//   const onLoadMoreClick = () => {
//     setVisibleComments(comments);
//   }

//   useEffect(() => {
//     axios.get('/api/comments')
//       .then(response => {
//         setComments(response.data);
//         setVisibleComments(response.data.slice(0, 3));
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }, []);

//   return (
//     <List sx={{ width: '100%', maxWidth: 360 }}>
//       {visibleComments.map((comment, index) => (
//         <React.Fragment key={index}>
//           <ListItem alignItems="flex-start">
//             <ListItemAvatar>
//               <Avatar alt="User" src="/static/images/avatar/1.jpg" />
//             </ListItemAvatar>
//             <ListItemText
//               primary={comment}
//               secondary={
//                 <Typography
//                   sx={{ display: 'inline' }}
//                   component="span"
//                   variant="body2"
//                   color="text.primary"
//                 >
//                   User
//                 </Typography>
//               }
//             />
//           </ListItem>
//           <Divider variant="inset" component="li" />
//         </React.Fragment>
//       ))}
//       {visibleComments.length < comments.length && (
//         <button onClick={onLoadMoreClick}>Load more</button>
//       )}
//       <form onSubmit={onSubmit}>
//         <label htmlFor="comment">What are your thoughts?</label>
//         <textarea onChange={onChange} value={commentValue} name="comment" id="comment" />
//         <button type="submit">Respond</button>
//       </form>
//     </List>
//   );
// }