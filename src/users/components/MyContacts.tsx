
import React from 'react';
import ContactListItem from './ContactListItem';
import { User } from '../types';
import { getUsers } from '../../api/methods';
import { List, ListItem, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';


import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';




interface ContactListState {
  users: User[];
}

class ContactList extends React.Component<{}, ContactListState>{
  constructor(props: {}){
    super(props)
    this.state = {
      users: []
    }
  }


  componentDidMount(){
    getUsers().then(fetchedUsers => { this.setState({users: fetchedUsers})})
  }


  render(){
    return <div>
      <h1>Liste de contact</h1>
      <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
            </Avatar>
          </ListItemAvatar>
          {this.state.users.map((user, index) => <ListItem key={index}><ContactListItem firstname={user.firstname} lastname={user.lastname}/></ListItem>)}
        </ListItem>
      </List>
      <Button variant="contained" color="primary" href="#contained-buttons">
        <Link to="/login" color="inherit">Log In</Link>
      </Button>
      </div>

  }
}

export default ContactList;