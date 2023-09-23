
import { Button, Form, Input, Select, Space } from 'antd';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getDataProducts } from '../../redux/slice/data_Products';
import { editProduct, getProduct } from '../../service/api/product';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { feildAdd } from '../../constant/feildAddDashboard';
const { Option } = Select;



const FormEditDashboard = ({ edit, setEdit }) => {

  const notifyUpdateSuccess = () => toast("Update Successful!");
  const notifyUpdateUnsuccess = () => toast("Failt !. Choose Product below to edit, please!");

  const dispatch = useDispatch();
  console.log(edit, 'edit')
  
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    console.log(edit, 'edit')

    const handleEditProduct = async () => {
      const newProductUpdate = {
        name: edit.name,
        rate: Number(edit.rate),
        color: edit.color,
        price: Number(edit.price),
        category: edit.category,
        discount: Number(edit.discount),
        image: edit.image,
        description: edit.description,
        size: edit.size
      };

      if (edit != 'Add') {
        await editProduct(edit._id, newProductUpdate);
        await handleGetData();
        setEdit({})

        notifyUpdateSuccess()
      }
      else {
        notifyUpdateUnsuccess()
      }
    }
    handleEditProduct();

  };

  const handleGetData = async () => {
    const { data } = await getProduct();
    console.log(data, 'data');

    dispatch(getDataProducts(data));
  };




  const handleSetEdit = (e) => {
    console.log(e.target.value, e.target.name, 'llllllllllooooooo')
    setEdit({...edit, [e.target.name] : e.target.value})
  }

  const handleSetSelectEdit = (e, name) => {
   console.log(e, name)
   setEdit({...edit, [name]: e});
  }




  return (
    <Form
      name="complex-form"
      onFinish={onFinish}
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
    >
      <div style={{ fontWeight: '800', textAlign: 'center', width: '149px', marginBottom: '15px' }}>Form Update Product</div>
      {
        edit != 'Add' ? <div style={{ fontWeight: '500' }}>{`(Editing ID: ${edit._id})`}</div> :
          <div style={{ fontWeight: '500' }}>{'(Choose Product to Update in List Products below!)'}</div>
      }
      {feildAdd.map((item) => {
        if (item.name != 'size' && item.name != 'color' && item.name != 'category') {
          return (
            <Form.Item label={item.label} key={item.id}>
              <Space>
                <Form.Item
                  // name={item.name}
                  noStyle
                  rules={[
                    {
                      required: true,
                      message: `${item.name} is required`,
                    },
                  ]}
                >
                  <Input
                    style={{
                      width: 500,
                    }}
                    placeholder="Please input"
                    name={item.name}
                    onChange={(e) => {
                      console.log(edit, 'eddđiiđiiđiiđiiidi', e.target.name),
                      handleSetEdit(e)
                    }}
                    value={edit[item.name]}
                  />
                </Form.Item>
              </Space>
            </Form.Item>
          )
        }
        else {
          return (
            <Form.Item label={item.label} key={item.id}>
              <Space.Compact>
                <Form.Item
                  // name={[`${item.name}`]}
                  noStyle
                  rules={[
                    {
                      required: true,
                      message: `${item.name} is required`,
                    },
                  ]}
                >
                  <Select onChange={(e) => handleSetSelectEdit(e, item.name)} value={edit[item.name]}  placeholder={item.label} style={{ padding: '0px 5px', width: '170px' }}>
                    {
                      item.children && item.children.map((item) => {
                        return (
                          <Option value={item.name} name={item.name} key={item.id} style={{ padding: '0px 20px' }}>{item.name}</Option>
                        )
                      })
                    }
                  </Select>
                </Form.Item>

              </Space.Compact>
            </Form.Item>
          )
        }
      })}

      <Form.Item label="" colon={false}>
        <Button type="primary" htmlType="submit" style={{ marginLeft: '0px' }}>
          Update
        </Button>
      </Form.Item>

      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Form>
  )
};
export default FormEditDashboard;