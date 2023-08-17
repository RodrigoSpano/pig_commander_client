const columns = [
  {name: "NAME", uid: "name"},
  {name: "ROLE", uid: "totalBalance"},
  {name: "STATUS", uid: "status"},
  {name: "PLAN", uid: "plan"},
  {name: "ACTIONS", uid: "actions"},
];

const users = [
  {
    id: 1,
    name: "Tony Reichert",
    totalBalance: "Total Balance",
    balance: `$${20000}`,
    status: "banned",
    plan: "basic",
    age: "29",
    image: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    email: "tony.reichert@example.com",
  },
  {
    id: 2,
    name: "Zoey Lang",
    totalBalance: "Total Balance",
    balance: `$${33000}`,
    status: "active",
    plan: "pro",
    age: "25",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    email: "zoey.lang@example.com",
  },
  {
    id: 3,
    name: "Jane Fisher",
    totalBalance: "Total Balance",
    balance: `$${42000}`,
    status: "active",
    plan: "basic",
    age: "22",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    email: "jane.fisher@example.com",
  }
];

export {columns, users};
