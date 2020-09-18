import React from 'react';
import './post-list.css'
import PostListItem from '../post-list-item';

const PostList = ({posts, onDelete, onToggleLiked, onToggleImportant}) => {
const element = posts.map((item) => {
    const {id, ...listItem} = item;
    return (
        <li key ={id} className ='list-group-item'> 
            <PostListItem 
            {...listItem}
             onDelete={() => onDelete(id)}
             onToggleLiked={() => onToggleLiked(id)}
             onToggleImportant ={() => onToggleImportant(id)}
            />
        </li>
    );
})

    return(
        <ul className="app-list list-group">
        {element}
        </ul>
    )
}

export default PostList;