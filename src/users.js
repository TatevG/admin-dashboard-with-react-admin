import React from 'react';
import {
    List,
    Datagrid,
    EmailField,
    TextField,
    Filter,
    TextInput,
    ReferenceInput,
    ReferenceField,
    SelectInput,
    Create,
    SimpleForm,
    LongTextInput,
    Edit,
} from 'react-admin';

export const UserList = (props) => (
    <List {...props} filters={<UserFilter />}>
        <Datagrid>
            <TextField source="name" />
            <ReferenceField label="Username" source="id" reference="users">
                <TextField source="username" />
            </ReferenceField>            
            <EmailField source="email" />
            <TextField source="address.city" />
        </Datagrid>
    </List>
);

const UserTitle = ({ record }) => {
    return <span>User {record ? `"${record.title}"` : ''}</span>;
};

export const UserCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="username" />
            <LongTextInput source="email" />
            <TextField source="address.city" />
        </SimpleForm>
    </Create>
);

export const UserEdit = (props) => (
    <Edit title={<UserTitle />} {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <ReferenceInput label="User" source="id" reference="users">
                <SelectInput optionText="username" />
            </ReferenceInput>
            <LongTextInput source="email" />
            <TextField source="address.city" />
        </SimpleForm>
    </Edit>
);

const UserFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="Username" source="id" reference="users" allowEmpty>
            <SelectInput optionText="username" />
        </ReferenceInput>
    </Filter>
);
