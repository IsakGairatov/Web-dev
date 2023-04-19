export interface User {
  id: Number;
  UserName: String;
  Password: String;
  isEmployer: Boolean;
  UserDesc: String;
}

export const Users: User[] = [
  {
    id: 1,
    UserName: "User1",
    Password: "123456",
    isEmployer: true,
    UserDesc: "I have nothing to say"
  },
  {
    id: 2,
    UserName: "User2",
    Password: "123456",
    isEmployer: false,
    UserDesc: "I'm boss"
  },
  {
    id: 3,
    UserName: "User3",
    Password: "1236",
    isEmployer: false,
    UserDesc: "I'm not boss"
  },
]
