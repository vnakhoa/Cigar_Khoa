
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import Loadding from '../../../../component/Loadding';
import { getProduct } from '../../../../service/api/product';
import DetailPopUp from '../../../Detail/DetailPopUp';

import CardProduct from '../../../../component/cardProducts/CardProduct';
import sortDataProduct from '../../../../service/sortDataProduct/sortDataProduct';


function ShopProduct(props) {
    const { filter, setFilter, sortProduct } = props;

    const [onPopUp, setOnPopUp] = useState(false);
    const [data, setData] = useState([])
    const [loadding, setLoadding] = useState(false)


    const paramsSearch = useLocation();
    const queryParams = new URLSearchParams(paramsSearch.search);

    const _id = queryParams.get('_id')
    const color = queryParams.get('color')
    const price = queryParams.get('price')
    const category = queryParams.get('category')
    const size = queryParams.get('size');
    const name = queryParams.get('name');

    const params = useParams();

    const dataSearch = useSelector(state => state.searchProduct)

    const handleGetData = async () => {
        if (dataSearch != undefined && dataSearch != '') {
            console.log(dataSearch.toLowerCase())
            const { data } = await getProduct();
            console.log(data)
            const newData = await data.filter((item) => {
                return item.name.toLowerCase().includes(dataSearch.toLowerCase()) || dataSearch.toLowerCase().includes(item.name.toLowerCase())
            })
            console.log(newData)
            setData(newData)
        }
        else {
            if (paramsSearch.search[0] == '?') {
                setLoadding(true)
                const { data } = await getProduct({
                    _id: _id == '' || _id == null ? null : _id,
                    color: color == '' || color == null ? null : color,
                    price: price == '' || price == null ? null : Number(price),
                    category: category == 'All' || category == null ? null : category,
                    size: size == '' || size == null ? null : size,
                    name: name == '' || name == null ? null : name
                });
                console.log(data, 'data1111');
                setData(data)
                setLoadding(false)
            }
            else {
                try {
                    setLoadding(true)
                    const { data } = await getProduct(params.id);
                    console.log(data, 'data');
                    setData(data)
                    setLoadding(false)
                }
                catch (error) {
                    alert('wrong:', error.message)
                }
            }
        }
    };



    useEffect(() => {
        handleGetData();

        console.log('jjjjjj')
    }, [filter.changeFilter, dataSearch])

    useEffect(() => {
        let newData = sortDataProduct(sortProduct, data)

        if (newData) {
            setData(newData)
        }
    }, [sortProduct])


    return (
        <>
            {loadding
                ? <Loadding />
                :
                <>
                    <div className="shop_tab_product">
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="large" role="tabpanel">
                                <div className="row">
                                    <div style={{ fontWeight: '600', marginBottom: '15px' }}>
                                        Keyword search: <span style={{ color: 'tomato' }}>{dataSearch}</span>
                                    </div>
                                    {data && data.length > 0 ? data.map((item) => {
                                        return (
                                            <div className="col-lg-4 col-md-4 col-sm-6" key={item._id}>
                                                <CardProduct
                                                    size={'small'}
                                                    item={item}
                                                    image={item.image}
                                                    price={item.price}
                                                    name={item.name}
                                                    key={item._id}
                                                />
                                            </div>
                                        )
                                    }) : <div style={{ textAlign: 'center', marginTop: '25px' }}>This search haven't any products!</div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                    {onPopUp ? <DetailPopUp setOnPopUp={setOnPopUp} /> : <></>}
                </>
            }
        </>
    )
}

export default ShopProduct;