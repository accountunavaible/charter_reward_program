const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// fake datas
const fakeUserOneData = [
  { id: 1, price: 100, date: '2021-10-01', title: 'random transcation 1', month: 'Oct' },
  { id: 2, price: 51, date: '2021-10-02', title: 'random transcation 2', month: 'Oct' },
  { id: 3, price: 200, date: '2021-10-03', title: 'random transcation 3', month: 'Oct' },
  { id: 4, price: 99, date: '2021-10-04', title: 'random transcation 4', month: 'Oct' },
  { id: 5, price: 49, date: '2021-10-05', title: 'random transcation 5', month: 'Oct' },
  { id: 6, price: 100, date: '2021-11-01', title: 'random transcation 6', month: 'Nov' },
  { id: 7, price: 92, date: '2021-11-02', title: 'random transcation 7', month: 'Nov' },
  { id: 8, price: 53, date: '2021-12-01', title: 'random transcation 8', month: 'Dec' },
  { id: 9, price: 190, date: '2021-12-02', title: 'random transcation 9', month: 'Dec' }
];

const fakeUserTwoData = [
  { id: 1, price: 140, date: '2021-10-01', title: 'random transcation 1', month: 'Oct' },
  { id: 2, price: 55, date: '2021-10-02', title: 'random transcation 2', month: 'Oct' },
  { id: 3, price: 230, date: '2021-10-03', title: 'random transcation 3', month: 'Oct' },
  { id: 4, price: 199, date: '2021-10-04', title: 'random transcation 4', month: 'Oct' },
  { id: 5, price: 49, date: '2021-10-05', title: 'random transcation 5', month: 'Oct' },
  { id: 6, price: 100, date: '2021-11-01', title: 'random transcation 6', month: 'Nov' },
  { id: 7, price: 92, date: '2021-11-02', title: 'random transcation 7', month: 'Nov' },
  { id: 8, price: 53, date: '2021-12-01', title: 'random transcation 8', month: 'Dec' },
  { id: 9, price: 190, date: '2021-12-02', title: 'random transcation 9', month: 'Dec' }
];

const fakeAdmin = {
  username: 'admin',
  id: 0,
  role: 'admin'
};
const fakeUserOne = {
  username: 'User 1',
  id: 1,
  role: 'user'
};
const fakeUserTwo = {
  username: 'User 2',
  id: 2,
  role: 'user'
};

// calculate the monthly
function calculateMonthly(list) {
  const monthlyReport = [
    { id: 1, point: 0, month: 'Oct' },
    { id: 2, point: 0, month: 'Nov' },
    { id: 3, point: 0, month: 'Dec' }
  ];
  const firstMonthArr = [],
    secondMonthArr = [],
    thirdMonthArr = [];
  list.forEach(item => {
    switch (item.month) {
      case 'Oct':
        firstMonthArr.push({ price: item.price });
        break;
      case 'Nov':
        secondMonthArr.push({ price: item.price });
        break;
      case 'Dec':
        thirdMonthArr.push({ price: item.price });
        break;
      default:
        break;
    }
  });

  monthlyReport[0] = { ...monthlyReport[0], point: calculateThePoint(firstMonthArr) };
  monthlyReport[1] = { ...monthlyReport[1], point: calculateThePoint(secondMonthArr) };
  monthlyReport[2] = { ...monthlyReport[2], point: calculateThePoint(thirdMonthArr) };

  return monthlyReport;
}

// caluclate the total points user can get
function calculateThePoint(list) {
  let points = 0;
  let fiftyList = [];
  let oneHundredList = [];
  list.forEach(item => {
    if (item.price > 50 && item.price <= 100) {
      fiftyList.push(item.price);
    } else if (item.price > 100) {
      oneHundredList.push(item.price);
    }
  });

  fiftyList.forEach(item => {
    while (item > 50) {
      item -= 50;
      points += 1 * item;
    }
  });

  oneHundredList.forEach(item => {
    let max = item;
    while (item >= max) {
      item -= 100;
      points += 2 * item;
    }
  });
  points += oneHundredList.length * 50; //150
  return points;
}

// get user transcations
app.get('/user/:id', (req, res) => {
  if (req.params.id === '1') {
    res.json({
      message: 'ok',
      code: 0,
      transcation: fakeUserOneData,
      totalPoints: calculateThePoint(fakeUserOneData),
      monthlyReport: calculateMonthly(fakeUserOneData)
    });
  } else if (req.params.id === '2') {
    res.json({
      message: 'ok',
      code: 0,
      transcation: fakeUserTwoData,
      totalPoints: calculateThePoint(fakeUserTwoData),
      monthlyReport: calculateMonthly(fakeUserTwoData)
    });
  } else if (req.params.id === '0') {
    res.json({
      message: 'ok',
      code: 0,
      users: [
        { ...fakeUserOne, points: calculateThePoint(fakeUserOneData) },
        { ...fakeUserTwo, points: calculateThePoint(fakeUserTwoData) }
      ]
    });
  }
});

// fake login authentication
app.post('/user', (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === '123456') {
    return res.json({
      user: fakeAdmin,
      code: 0
    });
  } else if (username === 'user1' && password === '123456') {
    return res.json({
      user: fakeUserOne,
      code: 0
    });
  } else if (username === 'user2' && password === '123456') {
    return res.json({
      user: fakeUserTwo,
      code: 0
    });
  } else {
    return res.json({
      code: 1,
      message: 'username or password wrong'
    });
  }
});

// listen port
app.listen(3001, () => {
  console.log('listening at port 3001');
});
