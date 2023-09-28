

import queryString from 'query-string';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation, useNavigate, useParams } from 'react-router-dom';
import { addProduct } from "../../../../redux/slice/cart_Products";
import { getDetailProduct } from '../../../../redux/slice/detail_Product';
import { getProduct } from '../../../../service/api/product';
import DetailPopUp from '../../../Detail/DetailPopUp';
import { get } from 'jquery';
import { getSearchProductData } from '../../../../redux/slice/searchProduct';
import Loadding from '../../../../component/Loadding';


function ShopProduct(props) {
    const { filter, setFilter } = props;
    console.log(filter)

    const [onPopUp, setOnPopUp] = useState(false);
    const [data, setData] = useState([])
    const [loadding, setLoadding] = useState(false)
    const dispatch = useDispatch();
    const navigate = useNavigate()
    // const data = useSelector(state => state.data_Products);
    // console.log(data)

    const paramsSearch = useLocation();
    const queryParams = new URLSearchParams(paramsSearch.search);
    console.log(queryParams)
    const _id = queryParams.get('_id')
    const color = queryParams.get('color')
    const price = queryParams.get('price')
    const category = queryParams.get('category')
    const size = queryParams.get('size');
    const name = queryParams.get('name');

    console.log(_id, color, price, category, size, name)
    console.log(paramsSearch.search)

    const params = useParams();
    console.log(paramsSearch.search[0], params, queryParams);

    // const query = queryString.stringify(filter);
    // console.log(query)

    const dataSearch = useSelector(state => state.searchProduct)
    console.log(dataSearch, 'dataSearch')



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

            console.log('trên')
        }
        else {
            console.log('dưới')
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
                    // console.log('Faild rồi:', error.message);
                    alert('wrong:', error.message)
                }
            }
        }
    };



    useEffect(() => {
        handleGetData();

        console.log('jjjjjj')
    }, [filter.changeFilter, dataSearch])
    console.log(data, 'selectDe')

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
                                    <div style={{ fontWeight: '600', marginBottom: '15px' }}>Keyword search: <span style={{ color: 'tomato' }}>{dataSearch}</span></div>
                                    {data && data.length > 0 ? data.map((item) => {
                                        return (
                                            <div className="col-lg-3 col-md-4 col-sm-6" key={item._id}>
                                                <div className="single_product">
                                                    <div className="product_thumb" onClick={() => dispatch(getDetailProduct({ ...item, qty: 1 }))}>
                                                        <NavLink to={`/detail/${item._id}`}><img src={item.image} alt="" /></NavLink>
                                                        <div className="btn_quickview">
                                                            <NavLink onClick={() => setOnPopUp(pre => !pre)}><i className="ion-ios-eye"></i></NavLink>
                                                        </div>
                                                    </div>
                                                    <div className="product_content">
                                                        <div className="product_ratting">
                                                            <ul>
                                                                <li><a><i className="ion-star"></i></a></li>
                                                                <li><a><i className="ion-ios-star-outline"></i></a></li>
                                                                <li><a><i className="ion-ios-star-outline"></i></a></li>
                                                                <li><a><i className="ion-ios-star-outline"></i></a></li>
                                                                <li><a><i className="ion-ios-star-outline"></i></a></li>
                                                            </ul>
                                                        </div>
                                                        <h3 style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}><NavLink to={`/detail/${item._id}`}>{item.name}</NavLink></h3>
                                                        <div className="product_price">
                                                            <span className="current_price">${item.price}</span>
                                                        </div>
                                                        <div className="product_action">
                                                            <ul>
                                                                <li className="product_cart"><NavLink to={'/cart'} title="Add to Cart" onClick={() => dispatch(addProduct(item))}>Add to Cart</NavLink></li>
                                                                <li className="add_links"><NavLink title="Add to Wishlist"><i className="ion-ios-heart-outline"></i></NavLink></li>
                                                                <li className="add_links"><NavLink title="Add to Compare"><i className="ion-loop"></i></NavLink></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
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