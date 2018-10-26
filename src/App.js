import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import AlbumIcon from '@material-ui/icons/Folder';

import { PostList, PostEdit, PostCreate } from './posts';
import { UserList, UserEdit, UserCreate } from './users';
import { AlbumList } from "./albums";
import Dashboard from './Dashboard';
import authProvider from './authProvider';

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
const App = () =>(
  <Admin authProvider={authProvider} dataProvider={dataProvider} dashboard={Dashboard}>
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
    <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} icon={UserIcon} />
    <Resource name="albums" list={AlbumList} icon={AlbumIcon}/>
  </Admin>
)

export default App;