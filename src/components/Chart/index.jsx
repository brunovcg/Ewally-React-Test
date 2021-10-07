/* eslint-disable jsx-a11y/anchor-has-content */
import { Bar } from "react-chartjs-2";
import { Container } from "./styles";
import convertDate from "../../utils/convertDate";
import stringToDate from "../../utils/stringToDate";

const BarChart = ({ statements }) => {
  const days = [];

  // statements.map(transaction=>  days.push(convertDate(stringToDate(transaction.createdAt), true)))

  statements.map((transaction) =>
    days.push(convertDate(stringToDate(transaction.createdAt), true))
  );

  const uniqueDays = [];
  const positiveArray = [];
  const negativeArray = [];

  for (let i = 0; i < days.length; i++) {
    if (days[i - 1] !== days[i]) {
      uniqueDays.push(days[i]);
      positiveArray.push(0);
      negativeArray.push(0);
    }
  }

  for (let i = 0; i < statements.length; i++) {
    let index = uniqueDays.indexOf(
      convertDate(stringToDate(statements[i]["createdAt"]), true)
    );

    if (statements[i]["amount"] > 0) {
      positiveArray[index] += statements[i]["amount"] / 100;
    } else {
      negativeArray[index] += statements[i]["amount"] / 100;
    }
  }

  const data = {
    labels: uniqueDays,
    datasets: [
      {
        label: "Despesas",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,

        hoverBackgroundColor: "rgba(255,99,132,1)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: negativeArray,
      },
      {
        label: "Receitas",
        backgroundColor: "#5bafe733",
        borderColor: "#5b83e7",
        borderWidth: 1,

        hoverBackgroundColor: "#5b83e7",
        hoverBorderColor: "#5b83e7",
        data: positiveArray,
      },
    ],
  };

  const options = {
    responsive: true,
    legend: {
      display: false,
    },
    type: "bar",
    scales: {
      xAxes: [
        {
          stacked: false,
        },
      ],
      yAxes: [
        {
          stacked: false,
        },
      ],
    },
  };

  return (
    <Container>
      <div className="header">
        <button onClick={() => console.log(positiveArray, negativeArray)}>
          teste
        </button>
        <h1 className="title">Movimentações</h1>
        <div className="links">
          <a
            className="btn btn-gh"
            href="https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/charts/VerticalBar.js"
          ></a>
        </div>
      </div>
      <Bar data={data} options={options} />
    </Container>
  );
};

export default BarChart;
