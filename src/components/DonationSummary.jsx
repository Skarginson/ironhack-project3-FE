import { useState } from "react";
import useDonationSummary from "../hooks/useDonationSummary";

function DonationSummary(user) {
  const {
    annualDonations,
    taxReduction,
    optimalTaxableIncome,
    monthlyDonationsByOrg,
    maxAnnualDonations,
    calculateMaxDonations,
  } = useDonationSummary(user);

  const [taxableIncome, setTaxableIncome] = useState("");

  function handleTaxableIncomeChange(e) {
    const income = parseFloat(e.target.value);
    setTaxableIncome(income);
    if (!isNaN(income)) {
      calculateMaxDonations(income);
    }
  }

  return (
    <div className="donation-summary">
      <h2>Donation Summary</h2>
      <h3>Monthly Donations by Organizations</h3>
      <ul>
        {monthlyDonationsByOrg.map(function (org, index) {
          return (
            <li key={index}>
              {org.name}: {org.monthlyAmount} € per month
            </li>
          );
        })}
      </ul>
      <p>Total Annual Donations: {annualDonations} €</p>
      <p>Tax Reduction: {taxReduction} €</p>
      <p>
        Optimal Taxable Income for Maximum Reduction: {optimalTaxableIncome} €{" "}
        <br />
        This is not your taxable income? Would you like to know how much you
        could donate to optimize your tax reduction? This data will not be
        stored.
      </p>
      <div>
        <label htmlFor="taxable-income">Enter your taxable income:</label>
        <input
          type="number"
          id="taxable-income"
          value={taxableIncome}
          onChange={handleTaxableIncomeChange}
        />
        {maxAnnualDonations > 0 && (
          <p>
            Maximum Annual Donations for Optimal Tax Reduction:{" "}
            {maxAnnualDonations} €
          </p>
        )}
      </div>
    </div>
  );
}

export default DonationSummary;
