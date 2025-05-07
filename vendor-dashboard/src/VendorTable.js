import React from 'react';

const VendorTable = ({ vendors }) => {
  if (!vendors.length) return <p>Loading vendor data...</p>;

  return (
    <table border="1" style={{ borderCollapse: 'collapse', width: '50%' }}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {vendors.map((vendor, i) => (
          <tr key={i}>
            <td>{vendor.name}</td>
            <td>{vendor.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default VendorTable;