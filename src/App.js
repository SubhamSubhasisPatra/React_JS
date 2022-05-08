import Expenses from "./components/Expenses/Expenses";


function App() {
  const expences = [
    {
      id: 1,
      title: "Car Rent",
      amount: 100.12,
      date: new Date(2020, 2, 20),
    },
    {
      id: 2,
      title: "Coffee",
      amount: 2.5,
      date: new Date(2020, 2, 21),
    },
    {
      id: 3,
      title: "Gas",
      amount: 10.0,
      date: new Date(2020, 2, 22),
    },
    {
      id: 4,
      title: "Video Games",
      amount: 50.0,
      date: new Date(2020, 2, 23),
    },
  ];

  return (
    <div>
      <Expenses expenses={expences} />
    </div>
  );
}

export default App;