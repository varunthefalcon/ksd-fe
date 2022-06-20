import PageHeader from "../../components/pageHeader"
import { RiPoliceCarFill } from 'react-icons/ri'
import { Button, Table } from 'antd'
const data = [
    {
        key: '1',
        name: 'Varun',
        customerID: '121212',
        phone: 9876543210,
        address: 'New York No. 1 Lake Park',
        vehicles: [1, 2, 3]
    },
    {
        key: '2',
        name: 'Jim Green',
        customerID: '121212',
        phone: 9876543210,
        address: 'London No. 1 Lake Park',
        vehicles: [1, 2, 3]
    },
    {
        key: '3',
        name: 'Joe Black',
        customerID: '121212',
        phone: 9876543210,
        address: 'Sidney No. 1 Lake Park',
        vehicles: [1, 2, 3]
    },
    {
        key: '4',
        name: 'Jim Red',
        customerID: '121212',
        phone: 9876543210,
        address: 'London No. 2 Lake Park',
        vehicles: [1, 2, 3]
    },
];

const columns = [
    {
        title: 'S.no',
        dataIndex: 'key',
        width: '20px',
    },
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: 'Customer ID',
        dataIndex: 'customerID'
    },
    {
        title: 'Phone',
        dataIndex: 'phone',
    },
    {
        title: 'Alt Phone',
        dataIndex: 'phone',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        width: '40%',
    },
    {
        title: 'Vehicles',
        render: (_, rec) => <div className="row-align-center"><RiPoliceCarFill size={18} />&nbsp;{rec.vehicles.length}</div>
    }
];
const Customers = () => {
    return <div>
        <div className="row-space-btw">
            <PageHeader title='Customers' />
            <Button type="primary">New</Button>
        </div>

        <Table columns={columns} dataSource={data} />
    </div>
}

export default Customers