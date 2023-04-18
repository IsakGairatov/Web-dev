export interface Company {
  id: Number;
  owner_id: Number;
  name: String;
  CompanyDesc: String;
  CompanyFiels: Number;
  city: String;
  address: String;
  phoneNumber: Number;
  email: String;

}

export const COMPS : Company[] = [
  {
    id: 1,
    owner_id: 3,
    name: "Comp1",
    CompanyDesc: "Company #1",
    CompanyFiels: 1,
    city: "Modestp",
    address: "some",
    phoneNumber: 7777777777,
    email: "ihih@gmail.com",

  },
  {
    id: 2,
    owner_id: 3,
    name: "Comp2",
    CompanyDesc: "Company 2",
    CompanyFiels: 2,
    city: "AZa",
    address: "some",
    phoneNumber: 77777777777,
    email: "oioid@dialy.ru",

  },
  {
    id: 3,
    owner_id: 3,
    name: "Comp3",
    CompanyDesc: "Company 3",
    CompanyFiels: 3,
    city: "Ally",
    address: "Somy",
    phoneNumber: 7777777777,
    email: "That@aaa.com",

  },

]
