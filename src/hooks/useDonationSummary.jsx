import { useState, useEffect } from "react";

function useDonationSummary(user) {
  const [annualDonations, setAnnualDonations] = useState(0);
  const [taxReduction, setTaxReduction] = useState(0);
  const [optimalTaxableIncome, setOptimalTaxableIncome] = useState(0);
  const [monthlyDonationsByOrg, setMonthlyDonationsByOrg] = useState([]);
  const [maxAnnualDonations, setMaxAnnualDonations] = useState(0);

  useEffect(() => {
    if (user) {
      calculateDonations();
    }
  }, [user]);

  function calculateDonations() {
    const monthlyDonations = user.organizations.reduce(function (total, org) {
      return total + (org.monthlyDonation?.amount || 0);
    }, 0);

    const annualDonations = monthlyDonations * 12;
    const taxReduction = annualDonations * 0.66;
    const optimalTaxableIncome = taxReduction / 0.2;

    setAnnualDonations(annualDonations);
    setTaxReduction(taxReduction);
    setOptimalTaxableIncome(optimalTaxableIncome);
    console.log("user : ", user, "user.organizations", user.organizations);
    const donationsByOrg = user.organizations.map(function (org) {
      return {
        name: org.organization.name,
        monthlyAmount: org.monthlyDonation?.amount || 0,
      };
    });

    setMonthlyDonationsByOrg(donationsByOrg);
  }

  function calculateMaxDonations(taxableIncome) {
    const maxDonations = taxableIncome * 0.2;
    setMaxAnnualDonations(maxDonations);
  }

  return {
    annualDonations,
    taxReduction,
    optimalTaxableIncome,
    monthlyDonationsByOrg,
    maxAnnualDonations,
    calculateMaxDonations,
  };
}

export default useDonationSummary;
