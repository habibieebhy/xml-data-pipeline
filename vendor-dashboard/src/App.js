import React, { useEffect, useState } from 'react';
import VendorTable from './VendorTable';

const App = () => {
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9000') // adjust this if needed
      .then(res => res.text())
      .then(xmlStr => {
        const parser = new DOMParser();
        const xml = parser.parseFromString(xmlStr, 'application/xml');
        const vendorNodes = xml.getElementsByTagName('vendor');

        const parsedData = Array.from(vendorNodes).map(v => ({
          name: v.getElementsByTagName('name')[0]?.textContent,
          amount: v.getElementsByTagName('amount')[0]?.textContent
        }));

        setVendors(parsedData);
      })
      .catch(err => console.error('XML Fetch Error:', err));
  }, []);

  return (
    <div>
      <h1>Vendor Details</h1>
      <VendorTable vendors={vendors} />
    </div>
  );
};

export default App;
