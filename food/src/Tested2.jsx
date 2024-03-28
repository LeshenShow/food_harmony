export const Test2 = () => {
  let array = [];
  let obj = { name: "qwerty", id: 125 };

  let testSet = (1, 2, 3);
  let test = testSet.map((elem) => <div>elem</div>);
  return <div>{test}</div>;
};
