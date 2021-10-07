const convertToReal = (entry) => {
  return (Number(entry) / 100).toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
};

export default convertToReal;
