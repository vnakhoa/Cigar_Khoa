
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import FormAddDashboard from './FormAddDashboard';
import FormEditDashboard from './FormEditDashboard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

import { Button, Layout, theme } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { deleteProduct, getProduct, editProduct } from '../../service/api/product';
import { getDataProducts } from '../../redux/slice/data_Products';

const { Header, Sider, Content } = Layout;

const manage = [
    {
        id: 1,
        name: 'Add',
    },
    {
        id: 2,
        name: 'Update',
    },
    {
        id: 3,
        name: 'All List',
    },
]

const Dashboard = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [active, setActive] = useState('Add');
    const [edit, setEdit] = useState('Add');

    const notifyDelete = () => toast("Delete Successful!");
    const dispatch = useDispatch();
    const data = useSelector(state => state.data_Products);
    console.log(data)

    const handleGetData = async () => {
        const { data } = await getProduct();
        console.log(data, 'data');

        dispatch(getDataProducts(data));
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
                        active == 'All List' ? <ul
                            style={{
                                margin: '0px 16px 20px 16px',
                                padding: 24,
                                minHeight: "72vh",
                                background: colorBgContainer,

                            }}
                        >
                            <div className='mb-3' style={{ textAlign: 'center', fontWeight: '700' }}>LIST PRODUCTS</div>
                            {
                                data && data.map((item, i) => {
                                    return (
                                        <div className='d-flex justify-content-between list_product_dashboard' key={item._id}>
                                            <span>{i + 1}</span>
                                            <span>{item._id}</span>
                                            <span style={{ width: '40%' }}>{item.name}</span>
                                            <span>${item.price}</span>
                                            <span className='d-flex gap-2'>
                                                <span className='edit_List' onClick={() => {
                                                    setEdit(item);
                                                    setActive('Update');
                                                    window.scrollTo({
                                                        top: 0, // Vị trí đầu trang
                                                        behavior: "smooth"
                                                    });
                                                    console.log(item)
                                                }}>Edit</span>
                                                <span className='delete_List' onClick={() => handleDeleteProduct(item._id)}>Delete</span>
                                            </span>
                                        </div>
                                    )
                                })
                            }
                        </ul> : <></>
                    }

                </Content>
                {active != 'All List' ?
                    <ul
                        style={{
                            margin: '0px 16px 20px 16px',
                            padding: 24,
                            minHeight: 280,
                            background: colorBgContainer,
                        }}
                    >
                        <div className='mb-3' style={{ textAlign: 'center', fontWeight: '700' }}>LIST PRODUCTS</div>
                        {
                            data && data.map((item, i) => {
                                return (
                                    <div className='d-flex justify-content-between list_product_dashboard' key={item._id}>
                                        <span>{i + 1}</span>
                                        <span>{item._id}</span>
                                        <span style={{ width: '40%' }}>{item.name}</span>
                                        <span>${item.price}</span>
                                        <span className='d-flex gap-2'>
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
                                    </div>
                                )
                            })
                        }
                    </ul> :
                    <></>
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