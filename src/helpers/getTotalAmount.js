export const getTotalAmount = ({ bill, people, percent, customPercent }) => {
  percent = customPercent === "" ? Number(percent) : Number(customPercent);
  const totalForPerson =
    (Number(bill) + Number(bill) * (percent / 100)) / people;
  const tipForPerson = (Number(bill) * (percent / 100)) / people;

  if (!isFinite(totalForPerson) || !isFinite(tipForPerson)) {
    return {
      totalForPerson: 0,
      tipForPerson: 0,
    };
  } else {
    return {
      totalForPerson,
      tipForPerson,
    };
  }
};