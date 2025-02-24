// data.js

export const chartData = [
    {name: "1", value1: 10, value2: 5, value3: 2},
    {name: "5", value1: 20, value2: 10, value3: 5},
    {name: "10", value1: 30, value2: 20, value3: 10},
    {name: "15", value1: 40, value2: 25, value3: 15},
    {name: "20", value1: 45, value2: 30, value3: 18},
    {name: "25", value1: 50, value2: 35, value3: 25},
];

export const financialData = {
    tabs: ["Euribor1w", "Euribor2w", "Euribor3w", "Average Sector Spread"],
    table: [
        {
            tenor: "7 DAYS",
            marketPlace: "0.0000",
            marketRiskFreeDate: "0",
            marketRiskFreePremium: "0.0000",
            change: "0.0000",
            variation: "1"
        },
        {
            tenor: "30 DAYS",
            marketPlace: "0.0000",
            marketRiskFreeDate: "0",
            marketRiskFreePremium: "0.0000",
            change: "0.0000",
            variation: "9"
        },
        {
            tenor: "90 DAYS",
            marketPlace: "0.0300",
            marketRiskFreeDate: "0.02345",
            marketRiskFreePremium: "0.0300",
            change: "0.0300",
            variation: "0.02345"
        },
        {
            tenor: "180 DAYS",
            marketPlace: "0.0350",
            marketRiskFreeDate: "0.03500",
            marketRiskFreePremium: "0.0350",
            change: "0.0350",
            variation: "0.03500"
        },
        {
            tenor: "360 DAYS",
            marketPlace: "0.004400",
            marketRiskFreeDate: "0.004400",
            marketRiskFreePremium: "0.004400",
            change: "0.004400",
            variation: "0.004400"
        },
    ],
};
