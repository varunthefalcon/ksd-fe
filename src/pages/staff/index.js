import PageHeader from "../../components/pageHeader"
import { Button, Table } from 'antd'
const data = [
    {
        key: '1',
        name: 'Varun',
        dob: '23 - 07 - 1995',
        phone: 9876543210,
        address: 'New York No. 1 Lake Park',
        designation: 'mechanic',
        bloodGrp: 'O+'
    },
    {
        key: '2',
        name: 'Jim Green',
        dob: '23 - 07 - 1995',
        phone: 9876543210,
        address: 'London No. 1 Lake Park',
        designation: 'mechanic',
        bloodGrp: 'O+'
    },
    {
        key: '3',
        name: 'Joe Black',
        dob: '23 - 07 - 1995',
        phone: 9876543210,
        address: 'Sidney No. 1 Lake Park',
        designation: 'mechanic',
        bloodGrp: 'O+'
    },
    {
        key: '4',
        name: 'Jim Red',
        dob: '23 - 07 - 1995',
        phone: 9876543210,
        address: 'London No. 2 Lake Park',
        designation: 'mechanic',
        bloodGrp: 'O+'
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
        // width: '30%',
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
        title: 'DOB',
        dataIndex: 'dob'
    },
    {
        title: 'Designation',
        dataIndex: 'designation'
    },
    {
        title: 'Address',
        dataIndex: 'address',
        width: '40%',
    },
    {
        title: 'Blood Grp',
        dataIndex: 'bloodGrp'
    }
];
const Staffs = () => {
    return <div>
        <div className="row-space-btw">
            <PageHeader title='Staffs' />
            <Button type="primary">New</Button>
        </div>

        <Table columns={columns} dataSource={data} />
    </div>
}

export default Staffs