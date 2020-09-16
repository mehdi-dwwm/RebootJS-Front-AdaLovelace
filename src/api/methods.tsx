import { User } from "../users/types";
import axios from 'axios';
import { IProfile } from "../profile/types";
import { IConversation } from "../conversations/types";

// fetch users via the server
export function getUsers(): Promise<User[]> {
  return axios.get(`${process.env.REACT_APP_BACKEND}/profile`)
    .then(resp => {
      return resp.data
    })
}

export function login(email: string, password: string): Promise<IProfile>{
  return axios
    .post(
      `${process.env.REACT_APP_BACKEND}/login`,
      {
        username: email,
        password: password
      },
      {
        withCredentials: true
      })
    .then(resp => resp.data)
}

export function register(email: string, password: string, firstname: string, lastname: string) : Promise<IProfile>{
  return axios.post(`${process.env.REACT_APP_BACKEND}/profile`, { email, password, firstname, lastname })
    .then(resp => resp.data);
}

export function getConnectedProfile(): Promise<User> {
  return axios
    .get(
      `${process.env.REACT_APP_BACKEND}/profile/me`,
    {
      withCredentials: true,
    }
    )
    .then((resp) => resp.data);
}

export function getConversations(): Promise<IConversation[]>{
  return Promise.resolve([
    {
      _id: '1',
    targets: [
      '5f521dd7ffda0b1222d8b318',
      '5f5a35543ec3b9b5160f5f3a'
    ],
    updatedAt: new Date(),
    unseenMessages: 0,
    messages: [
      {
        _id: '1',
        conversationId: '1',
        createdAt: new Date(),
        emitter: '5f521dd7ffda0b1222d8b318',
        targets: [
          '5f5a35543ec3b9b5160f5f3a'
        ],
        content: 'Bonjour',
      },
      {
        _id: '2',
        conversationId: '2',
        createdAt: new Date(),
        emitter: '5f5a35543ec3b9b5160f5f3a',
        targets: [
          '5f521dd7ffda0b1222d8b318'
        ],
        content: 'Salut tu vas bien ?',
      }
    ]
  },
  {
    _id: '2',
  targets: [
    '5f5e8bd6a4ba39010ce08cdd',
    '5f5e9882a4ba39010ce08cde'
  ],
  updatedAt: new Date(),
  unseenMessages: 0,
  messages: [
    {
      _id: '2',
      conversationId: '2',
      createdAt: new Date(),
      emitter: '5f5e9882a4ba39010ce08cde',
      targets: [
        '5f5e8bd6a4ba39010ce08cdd'
      ],
      content: 'Hello My Buddy',
    },
    {
      _id: '2',
      conversationId: '2',
      createdAt: new Date(),
      emitter: '5f5e8bd6a4ba39010ce08cdd',
      targets: [
        '5f5e9882a4ba39010ce08cde'
      ],
      content: 'Hey my friend !',
    }
  ]
}
])
}