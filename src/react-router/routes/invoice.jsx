import { useParams, useNavigate } from "react-router-dom";
import { Button } from 'antd'

import {
  getInvoice,
  deleteInvoice
} from "../data";

export default function Invoice() {
  let params = useParams();
  let navigate = useNavigate();
  let invoice = getInvoice(parseInt(params.invoiceId, 10));
  return (
    <main style={{ padding: '1rem' }}>
      <h2>Total Due:{invoice.amount}</h2>
      <p>
        {invoice.name}: {invoice.amount}
      </p>
      <p>
        Due Date: {invoice.due}
      </p>
      <p>
        <Button
          onClick={() => {
            deleteInvoice(invoice.number);
            navigate("/invoices");
          }}
        >
          Delete
        </Button>
      </p>
    </main>
  );
}
