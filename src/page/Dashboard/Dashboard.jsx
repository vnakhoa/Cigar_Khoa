
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FormAddDashboard from './FormAddDashboard';
import FormEditDashboard from './FormEditDashboard';

import { Button, Layout, theme } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDataProducts } from '../../redux/slice/data_Products';
import { deleteProduct, getProduct } from '../../service/api/product';
import Loadding from '../../component/Loadding';

import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/firebase';

const { Header, Sider, Content } = Layout;

const manage = [
    {
        id: 1,
        name: 'List',
    },
    {
        id: 2,
        name: 'Update',
    },
    {
        id: 3,
        name: 'Add',
    },
]

const Dashboard = () => {
    const [user] = useAuthState(auth);
    console.log(user)

    const [collapsed, setCollapsed] = useState(false);
    const [active, setActive] = useState('List');
    const [edit, setEdit] = useState('Add');
    const [loadding, setLoadding] = useState(false)

    const notifyDelete = () => toast("Delete Successful!");
    const dispatch = useDispatch();
    const data = useSelector(state => state.data_Products);
    console.log(data)

    const handleGetData = async () => {
        setLoadding(false)
        const { data } = await getProduct();
        console.log(data, 'data');
        dispatch(getDataProducts(data));

        setLoadding(true)
    };

    const handleDeleteProduct = async (id) => {
        console.log(id)
        await deleteProduct(id);
        await handleGetData();

        notifyDelete();
    }


    useEffect(() => {
        handleGetData();
        console.log('render')
    }, [])


    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout style={{ height: 'auto' }}>
            <Sider trigger={null} collapsible collapsed={collapsed} style={{ height: 'auto' }}>
                <div className="demo-logo-vertical" />
                <NavLink to={'/'} className="ml-2 text-back">Back Home</NavLink>

                <div className='d-flex flex-column pl-1 pr-1 pt-3 gap-2' >
                    {manage.map((item) => {
                        return (
                            <span onClick={() => setActive(item.name)} className={active == item.name ?
                                'p-2 rounded cursor-pointer-menu activeDashboard' : 'p-2 rounded cursor-pointer-menu'} key={item.id}>{item.name}</span>
                        )
                    })}
                </div>
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                        position: 'relative'
                    }}
                >
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />

                    <span style={{ fontSize: '16px', width: 64, height: 64, fontWeight: 'bold', color: '#0b0b0b6', paddingLeft: '5px' }}>Managment (Dashboard)</span>
                    <NavLink
                        to={'/login'}
                        style={{ fontSize: '16px', display: 'flex', gap: '3px', alignItems: 'center', position: 'absolute', left: '85%', top: '0' }}
                        onClick={() => signOut(auth)}
                    >
                        <div style={{ maxHeight: '25x', width: '25px', borderRadius: '50%' }}>
                            <img src={user?.photoURL != null
                                ? user.photoURL
                                : 'https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg'} alt="" style={{ width: '100%', borderRadius: '50%' }} />
                        </div>
                        {user ? 'Logout' : 'Login'}
                    </NavLink>
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >
                    {active == 'Add' ? <FormAddDashboard /> : <></>}
                    {active == 'Update' ? <FormEditDashboard edit={edit} setEdit={setEdit} /> : <></>}
                    {
                        active == 'List'
                            ? (
                                loadding
                                    ? <table>
                                        <thead >
                                            <tr>
                                                <th>STT</th>
                                                <th>ID</th>
                                                <th>Name</th>
                                                <th>Price</th>
                                                <th>Control</th>
                                            </tr>
                                        </thead>

                                        <tbody style={{ textAlign: 'center' }}>
                                            {data && data.map((item, i) => {
                                                return (
                                                    <tr key={item._id}>
                                                        <td><span>{i + 1}</span></td>
                                                        <td> <span>{item._id}</span></td>
                                                        <td><span style={{ width: '40%' }}>{item.name}</span></td>
                                                        <td><span>${item.price}</span></td>
                                                        <td>
                                                            <span className='d-flex gap-2 justify-content-center'>
                                                                <span className='edit_List' onClick={() => {
                                                                    setEdit(item);
                                                                    setActive('Update');
                                                                    window.scrollTo({
                                                                        top: 0, // Vị trí đầu trang
                                                                        behavior: "smooth"
                                                                    });
                                                                }}>Edit</span>

                                                                <span className='delete_List' onClick={
                                                                    () => handleDeleteProduct(item._id)}
                                                                >Delete</span>
                                                            </span>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                            }
                                        </tbody>
                                    </table>
                                    : <Loadding />
                            )
                            : <></>




                    }

                </Content>
                {active != 'List'
                    ? <table>
                        <thead style={{ textAlign: 'center' }}>
                            <tr>
                                <th>STT</th>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Control</th>
                            </tr>
                        </thead>
                        <tbody style={{ textAlign: 'center' }}>
                            {
                                loadding
                                    ? data && data.map((item, i) => {
                                        return (
                                            <tr key={item._id}>
                                                <td><span>{i + 1}</span></td>
                                                <td> <span>{item._id}</span></td>
                                                <td><span style={{ width: '40%' }}>{item.name}</span></td>
                                                <td><span>${item.price}</span></td>
                                                <td>
                                                    <span className='d-flex gap-3 justify-content-center'>
                                                        <span className='edit_List' onClick={() => {
                                                            setEdit(item);
                                                            setActive('Update');
                                                            window.scrollTo({
                                                                top: 0, // Vị trí đầu trang
                                                                behavior: "smooth"
                                                            });
                                                        }}>Edit</span>

                                                        <span className='delete_List' onClick={
                                                            () => handleDeleteProduct(item._id)}
                                                        >Delete</span>
                                                    </span>
                                                </td>
                                            </tr>
                                        )
                                    })
                                    : <Loadding />
                            }
                        </tbody>
                    </table>
                    : <></>

                }
            </Layout>

            <ToastContainer
                position="top-right"
                autoClose={1300}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </Layout>
    );
};

export default Dashboard