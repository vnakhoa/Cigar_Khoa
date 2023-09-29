
import { Button, Form, Input, Select, Space } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { getDataProducts } from '../../redux/slice/data_Products';
import { addProduct, getProduct } from '../../service/api/product';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { feildAdd } from '../../constant/feildAddDashboard';



const { Option } = Select;

const FormAddDashboard = () => {
  const notify = () => toast("Add Successful!");
  const dispatch = useDispatch();
  // const data = useSelector(state => state.data_Products);

  const onFinish = (values) => {
    console.log('Received values of form: ', values);

    const handleAddProduct = async () => {
      await addProduct(
        {
          name: values.name,
          rate: Number(values.rate),
          color: values.color,
          price: Number(values.price),
          category: values.category,
          discount: Number(values.discount),
          image: values.image,
          description: values.description,
          size: values.size
        }
      );

      await handleGetData();
      notify();
    }
    handleAddProduct();
  };

  const handleGetData = async () => {
    const { data } = await getProduct();
    console.log(data, 'data');

    dispatch(getDataProducts(data));
  };


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
      <div style={{ fontWeight: '800', textAlign: 'center', width: '127px', marginBottom: '15px' }}>Form Add Product</div>
      {feildAdd.map((item) => {
        if (item.name != 'size' && item.name != 'color' && item.name != 'category') {
          return (
            <Form.Item label={item.label} key={item.id}>
              <Space>
                <Form.Item
                  name={item.name}
                  noStyle
                  rules={[
                    {
                      required: true,
                      message: `${item.name} is required`,
                    },
                  ]}
                >
                  {
                    item.name == 'description'
                      ? <Input.TextArea
                        style={{
                          width: 500,
                        }}
                        placeholder="Please input" />
                      :
                      <Input
                        style={{
                          width: 500,
                        }}
                        placeholder="Please input"
                      />
                  }
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
                  name={[`${item.name}`]}
                  noStyle
                  rules={[
                    {
                      required: true,
                      message: `${item.name} is required`,
                    },
                  ]}
                >
                  <Select placeholder={item.label} style={{ padding: '0px 5px', width: '170px' }}>
                    {
                      item.children && item.children.map((item) => {
                        return (
                          <Option value={item.name} key={item.id} style={{ padding: '0px 20px' }}>{item.name}</Option>
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

      <Form.Item label=" " colon={false}>
        <Button type="primary" htmlType="submit" style={{ marginLeft: '0px' }}>
          Submit
        </Button>
      </Form.Item>

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
    </Form>
  )
};
export default FormAddDashboard;  