import PageHeader from "../../components/pageHeader"
import { FaDownload } from 'react-icons/fa'
import { Button, Table, Input } from 'antd'
import { Link } from "react-router-dom";
const data = [
    {
        key: '1',
        vehicleNo: '3578965',
        ownerName: 'John Doe',
        invoiceNo: 9876543210,
        invoiceAmount: 5,
        invoiceDate: '23/07/2022',
    },
    {
        key: '2',
        vehicleNo: '3578965',
        ownerName: 'John Doe',
        invoiceNo: 9876543210,
        invoiceAmount: 5,
        invoiceDate: '23/07/2022',
    },
    {
        key: '3',
        vehicleNo: '3578965',
        ownerName: 'John Doe',
        invoiceNo: 9876543210,
        invoiceAmount: 5,
        invoiceDate: '23/07/2022',
    },
    {
        key: '4',
        vehicleNo: '3578965',
        ownerName: 'John Doe',
        invoiceNo: 9876543210,
        invoiceAmount: 5,
        invoiceDate: '23/07/2022',
    },
];

const columns = [
    {
        title: 'S.no',
        dataIndex: 'key',
        width: '20px',
    },
    {
        title: 'Invoice No',
        dataIndex: 'invoiceNo',
        render: (text) => <p>#{text}</p>
    },
    {
        title: 'Vehicle No',
        dataIndex: 'vehicleNo',
    },
    {
        title: 'Owner',
        dataIndex: 'ownerName'
    },
    {
        title: 'Amount',
        dataIndex: 'invoiceAmount',
    },
    {
        title: 'Invoice Date',
        dataIndex: 'invoiceDate',
    },
    {
        title: 'Bill',
        render: () => <p><FaDownload /></p>
    }
];
const Invoices = () => {
    return <div>
        <div className="row-space-btw">
            <PageHeader title='Invoices' />
            <Link to="/dashboard/invoices/new">
                <Button type="primary">New</Button>
            </Link>
        </div>

        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
            <div style={{ width: '50%' }}>
                <Input.Group compact>
                    <Input style={{ width: '23%' }} placeholder="Invoice No" />
                    <Input style={{ width: '22%' }} placeholder="Vehicle No" />
                    <Input style={{ width: '20%' }} placeholder="Owner No" />
                    <Input style={{ width: '20%' }} placeholder="Invoice Date" />
                    <Button style={{ width: '15%' }} type="primary">Search</Button>
                </Input.Group>
            </div>
        </div>

        <Table columns={columns} dataSource={data} />
    </div>
}

export default Invoices