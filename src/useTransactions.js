// import { useContext } from 'react';
// import { Expensetrackercontext } from './context/context';

// import { incomeCategories, expenseCategories, resetCategories,incomeColors, expenseColors } from './constants/categories';

// // const useTransactions = (title) => {
// //   resetCategories();
// //   const { transactions } = useContext(Expensetrackercontext);
// //   const rightTransactions = transactions.filter((t) => t.type === title);
// //   const total = rightTransactions.reduce((acc, currVal) => acc += Number(currVal.amount), 0);
// //   const categories = title === 'Income' ? incomeCategories : expenseCategories;

// //   rightTransactions.forEach((t) => {
// //     const category = categories.find((c) => c.type === t.category);

// //     if (category){ (category.amount) += Number(t.amount);}
// //   });

// //   const filteredCategories = categories.filter((sc) => Number(sc.amount) > 0);

// //   const chartData = {
// //     datasets: [{
// //       data: filteredCategories.map((c) => Number(c.amount)),
// //       backgroundColor: filteredCategories.map((c) => c.color),
// //     }],
// //     labels: filteredCategories.map((c) => c.type),
// //   };
// //   console.log(chartData)
// //   return { filteredCategories, total, chartData };
// // };
// const useTransactions = (title) => {
//   resetCategories();
//   const { transactions } = useContext(Expensetrackercontext);
//   const rightTransactions = transactions.filter((t) => t.type === title);
//   const total = rightTransactions.reduce((acc, currVal) => acc + Number(currVal.amount), 0);
//   const categories = title === 'Income' ? incomeCategories : expenseCategories;

//   rightTransactions.forEach((t) => {
//     const category = categories.find((c) => c.type === t.category);
//     if (category) category.amount += Number(t.amount);
//   });

//   const filteredCategories = categories.filter((c) => Number(c.amount) > 0);

//   const chartData = {
//     datasets: [{
//       data: filteredCategories.map((c) => Number(c.amount)),
//       backgroundColor: filteredCategories.map((c) => c.color),
//     }],
//     labels: filteredCategories.map((c) => c.type),
//   };

//   console.log(chartData); // Log chartData to verify structure and contents

//   return { filteredCategories, total, chartData };
// };

// export default useTransactions;


import { useContext } from 'react';
import { Expensetrackercontext } from './context/context';
import { incomeCategories, expenseCategories, resetCategories } from './constants/categories';

const useTransactions = (title) => {
  resetCategories();
  const { transactions } = useContext(Expensetrackercontext);
  
  console.log('Transactions:', transactions); // Log transactions to check data

  const rightTransactions = transactions.filter((t) => t.type === title);
  console.log('Right Transactions:', rightTransactions); // Log filtered transactions

  const total = rightTransactions.reduce((acc, currVal) => acc + Number(currVal.amount), 0);
  console.log('Total:', total); // Log total amount

  const categories = title === 'Income' ? incomeCategories : expenseCategories;
  console.log('Categories before update:', categories); // Log categories before update

  rightTransactions.forEach((t) => {
    const category = categories.find((c) => c.type === t.category);
    if (category) {
      category.amount += Number(t.amount);
    }
  });

  console.log('Categories after update:', categories); // Log updated categories

  const filteredCategories = categories.filter((c) => Number(c.amount) > 0);
  console.log('Filtered Categories:', filteredCategories); // Log filtered categories

  const chartData = {
    datasets: [{
      data: filteredCategories.map((c) => Number(c.amount)),
      backgroundColor: filteredCategories.map((c) => c.color),
    }],
    labels: filteredCategories.map((c) => c.type),
  };

  console.log('Chart Data:', chartData); // Log chart data

  return { filteredCategories, total, chartData };
};

export default useTransactions;
