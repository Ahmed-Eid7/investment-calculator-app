const TabelBody = (props) => {
  console.log(props.data);
  return (
    <tbody>
      {props.data.map((item) => (
        <tr>
          <td>{item.year}</td>
          <td>{item.savingsEndOfYear}</td>
          <td>{item.yearlyInterest}</td>
          <td>{item.yearlyInterest * item.year}</td>
          <td>{item.savingsEndOfYear - item.yearlyInterest * item.year}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default TabelBody;
