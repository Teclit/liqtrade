import ContractDetailsTable from "./ContractDetailsTable";
import LoanConditionsTable from "./LoanConditionsTable";
import {contractDetails, loanConditions} from "../../transactionData";

export default function TransactionTables() {
    return (
        <div className="p-6">
            <ContractDetailsTable data={contractDetails} />
            <LoanConditionsTable data={loanConditions} />
        </div>
    );
}
