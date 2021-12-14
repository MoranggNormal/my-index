export default (
  time: any,
  label: any,
  price: any,
  border: string,
  bg: string
) => {
  return {
    labels: time,
    datasets: [
      {
        label: label,
        data: price,
        fill: true,
        borderColor: border,
        backgroundColor: bg,
        borderJoinStyle: "round",
        borderCapStyle: "round",
        borderWidth: 3,
        pointRadius: 0,
        pointHitRadius: 10,
        lineTension: 0.2,
      },
    ],
  };
};
