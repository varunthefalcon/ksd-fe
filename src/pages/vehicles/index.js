import PageHeader from "../../components/pageHeader"
import { RiPoliceCarFill } from 'react-icons/ri'
import { Button, Table } from 'antd'
const data = [
    {
        key: '1',
        name: 'name',
        vehicleNo: '3578965',
        ownerName: 'John Doe',
        ownerNo: 9876543210,
        invoiceCount: 5,
        makeModel: 'Maruthi/Wagon R',
        year: 2014,
        color: 'Silver'
    },
    {
        key: '2',
        name: 'name',
        vehicleNo: '3578965',
        ownerName: 'John Doe',
        ownerNo: 9876543210,
        invoiceCount: 5,
        makeModel: 'Maruthi/Wagon R',
        year: 2014,
        color: 'Silver'
    },
    {
        key: '3',
        name: 'name',
        vehicleNo: '3578965',
        ownerName: 'John Doe',
        ownerNo: 9876543210,
        invoiceCount: 5,
        makeModel: 'Maruthi/Wagon R',
        year: 2014,
        color: 'Silver'
    },
    {
        key: '4',
        name: 'name',
        vehicleNo: '3578965',
        ownerName: 'John Doe',
        ownerNo: 9876543210,
        invoiceCount: 5,
        makeModel: 'Maruthi/Wagon R',
        year: 2014,
        color: 'Silver'
    },
];

const columns = [
    {
        title: 'S.no',
        dataIndex: 'key',
        width: '20px',
    },
    {
        title: 'Vehicle ID',
        dataIndex: 'name',
    },
    {
        title: 'Vehicle No',
        dataIndex: 'vehicleNo',
    },
    {
        title: 'Owner Name',
        dataIndex: 'ownerName'
    },
    {
        title: 'Owner No',
        dataIndex: 'ownerNo'
    },
    {
        title: 'No of Invoices',
        dataIndex: 'invoiceCount',
    },
    {
        title: 'Make/model',
        dataIndex: 'makeModel',
    },
    {
        title: 'Year',
        dataIndex: 'year'
    },
    {
        title: 'Color',
        dataIndex: 'color',
    },
];
const Vehicles = () => {
    return <div>
        <div className="row-space-btw">
            <PageHeader title='Vehicles' />
            <Button type="primary">New</Button>
        </div>

        <Table columns={columns} dataSource={data} />
    </div>
}

export default Vehicles