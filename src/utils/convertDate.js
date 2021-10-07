const convertDate = (data, reverse = false) => {
  let dia = String(data.getDate()).padStart(2, "0");

  let mes = String(data.getMonth() + 1).padStart(2, "0");

  let ano = data.getFullYear();

  if (reverse) {
    return `${dia}/${mes}/${ano}`;
  }

  return `${ano}-${mes}-${dia}`;
};

export default convertDate;
