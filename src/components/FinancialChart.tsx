import { Line } from "react-chartjs-2";
import { Chart, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";

Chart.register(LineElement, CategoryScale, LinearScale, PointElement);

export default function FinancialChart() {
    const data = {
        labels: ["1", "5", "10", "15", "20", "25"],
        datasets: [
            {
                label: "Performance",
                data: [10, 20, 15, 30, 25, 40],
                borderColor: "green",
                fill: true,
                backgroundColor: "rgba(0, 128, 0, 0.2)",
            },
        ],
    };

    return (
        <div className="mt-6 bg-white p-6 shadow rounded-md">
            <h3 className="font-semibold">Informations financières</h3>
            <Line data={data} />
        </div>
    );
}
