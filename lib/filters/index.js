module.exports = {
  filter_by: filter_by
}

function filter_by(data, property_name, property_value) {
  let data_filtered = data.filter((data_elem) => {
    if (Object.keys(data_elem).indexOf(property_name) === -1) {
      return false;
    }
    return data_elem[property_name] === property_value;
  });
  return data_filtered;
  // console.log(data_filtered);
}
