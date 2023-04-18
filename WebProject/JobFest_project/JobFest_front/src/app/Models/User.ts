export interface User {
  id: Number;
  UserName: String;
  Password: String;

  UserDesc: String;
}

export const Users: User[] = [
  {
    id: 1,
    UserName: "User1",
    Password: "123456",
    UserDesc: "I have nothing to say"
  },
  {
    id: 2,
    UserName: "User2",
    Password: "123456",
    UserDesc: "I'm boss"
  },
  {
    id: 3,
    UserName: "User3",
    Password: "1236",
    UserDesc: "I'm not boss"
  },
]
