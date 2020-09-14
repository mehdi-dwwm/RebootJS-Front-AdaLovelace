
import React from 'react';
import { ListItemText } from '@material-ui/core';

interface ContactListItemProps {
  firstname: string;
  lastname: string;
}

class ContactListItem extends React.Component<ContactListItemProps>{
  render(){
    return <ListItemText>FirstName: {this.props.firstname} LastName: {this.props.lastname}</ListItemText>
  }
}

export default ContactListItem;