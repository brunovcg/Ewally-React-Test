const convertToReal = (entry) => {

    return  (Number(entry)/100).toString().replace(".",",");
}

export default convertToReal