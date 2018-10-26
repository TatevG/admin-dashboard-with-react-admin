import React from 'react';
import { List, Datagrid, TextField } from 'react-admin';

export const AlbumList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
        </Datagrid>
    </List>
);