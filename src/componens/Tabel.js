import TabelBody from "./TabelBody";

const Tabel = (props) => {
  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <TabelBody data={props.data} />
    </table>
  );
};

export default Tabel;
