
import { Radio, Space } from 'antd';
import queryString from 'query-string';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeCategory } from '../../../redux/slice/categorySoft';
import { getSearchProductData } from '../../../redux/slice/searchProduct';

const filterColor = [
    {
        id: 0,
        name: "All",
    },
    {
        id: 1,
        name: 'Black',
    },
    {
        id: 2,
        name: 'Orange',
    },
    {
        id: 3,
        name: 'Blue',
    },
    {
        id: 4,
        name: 'Yellow',
    },
    {
        id: 5,
        name: 'Pink',
    },
    {
        id: 6,
        name: 'Green',
    },
];
const filterSize = [
    {
        id: 0,
        name: "All",
    },
    {
        id: 1,
        name: "small",
    },
    {
        id: 2,
        name: "medium",
    },
    {
        id: 3,
        name: "large",
    },
    {
        id: 4,
        name: "x-large",
    },
];
const filterPrice = [
    {
        id: 0,
        name: "All",
    },
    {
        id: 1,
        name: "90",
    },
    {
        id: 2,
        name: "150",
    },
    {
        id: 3,
        name: "200",
    },
    {
        id: 4,
        name: "300",
    },
    {
        id: 5,
        name: "400",
    },
    {
        id: 6,
        name: "500",
    },
]
const popularTag = [
    {
        id: 0,
        name: "All",
    },
    {
        id: 1,
        name: 'Clothing & Apparel'
    },
    {
        id: 2,
        name: 'Consumer Electrics'
    },
    {
        id: 3,
        name: 'Phones & Accessories'
    },
    {
        id: 4,
        name: 'Computers & Technologies'
    },
    {
        id: 5,
        name: 'Babies & Moms'
    },
    {
        id: 6,
        name: 'Books & Office'
    },
    {
        id: 7,
        name: 'Sport & Outdoo'
    },
    {
        id: 8,
        name: 'Chairs & Stools'
    },
    {
        id: 9,
        name: 'Furniture & Acessories'
    },
    {
        id: 10,
        name: 'Kitchen & Tableware'
    },
    {
        id: 11,
        name: 'Lighting'
    },
    {
        id: 12,
        name: 'Armchairs & Chaises'
    },
];


function ShopSidebar(props) {
    const { filter, setFilter } = props;
    console.log(filter)
    
    const dispatch = useDispatch()
    const ref = useRef(0);

    const selectCategory = useSelector(state => state.categorySoft);
    if(selectCategory != 'All'){
        ref.current = 1;
    }
    console.log(selectCategory)

    const navigate = useNavigate();
    const [reFilter, setRefilter] = useState(undefined)
    const [valueColor, setValueColor] = useState(filter.color);
    const [valueSize, setValueSize] = useState(filter.size);
    const [valuePrice, setValuePrice] = useState(filter.price);
    const [valueCategory, setValueCategory] = useState(selectCategory)

    
    // const searchProduct = useSelector(state => state.searchProduct);
    // console.log(searchProduct)



    const onChangeColor = (e) => {
        console.log('radio checked', e.target.value);
        if (e.target.value == 'All') {
            setValueColor(null)
        }
        else {
            setValueColor(e.target.value);
        }
        dispatch(getSearchProductData(''))

        ////// Run lại
        setRefilter(pre => !pre)
    };
    const onChangeSize = (e) => {
        console.log('radio checked', e.target.value);
        if (e.target.value == 'All') {
            setValueSize(null)
        }
        else {
            setValueSize(e.target.value);
        }
        dispatch(getSearchProductData(''))
        setRefilter(pre => !pre)
    };
    const onChangePrice = (e) => {
        console.log('radio checked', e.target.value);
        if (e.target.value == 'All') {
            setValuePrice(null)
        }
        else {
            setValuePrice(e.target.value);
        }
        dispatch(getSearchProductData(''))
        setRefilter(pre => !pre)
    };
    const onChangePopular = (item) => {
        dispatch(changeCategory(item))
        setValueCategory(item)

        dispatch(getSearchProductData(''))
        setRefilter(pre => !pre)
    };


    const handleSetFilter = async () => {
        console.log(reFilter, 'rèilter')
        if (selectCategory != 'All') {
            const query = queryString.stringify({
                ...filter,
                color: valueColor,
                size: valueSize,
                name: filter.name == '' ? null : filter.name,
                price: typeof (valuePrice) == 'string' ? Number(valuePrice) : valuePrice,
                changeFilter: !filter.changeFilter,
                category: selectCategory == 'All' ? null : selectCategory,
            })
            console.log(query)
            console.log(ref.current, 'ref.curent')
            if (reFilter != undefined || ref.current >0)
            navigate(`/shop?${query}`)
    }
        else {
            const query = queryString.stringify({
                name: filter.name == '' ? null : filter.name,
                color: valueColor,
                size: valueSize,
                price: typeof (valuePrice) == 'string' ? Number(valuePrice) : valuePrice,
                changeFilter: !filter.changeFilter
            })
            console.log(query)
            console.log(ref.current, 'ref.curent')
            if (reFilter != undefined || ref.current > 0)
                navigate(`/shop?${query}`)
        }

        console.log(reFilter)
        console.log(valueColor, valuePrice, valueSize)
    }

    useEffect(() => {
        console.log('ooopppp')

        handleSetFilter();
        setFilter(pre => ({
            ...pre,
            color: valueColor,
            size: valueSize,
            price: typeof (valuePrice) == 'string' ? Number(valuePrice) : valuePrice,
            changeFilter: !filter.changeFilter,
            category: selectCategory == 'All' ? null : selectCategory,
        }));
        
    }, [reFilter, selectCategory])


    return (
        <div class="col-lg-3 col-md-12">
            <div class="sidebar_widget">

                <div class="widget_list widget_color">
                    <h3>Select By Color</h3>
                    <ul>
                        <Radio.Group onChange={onChangeColor} value={valueColor}>
                            <Space direction="vertical">
                                {
                                    filterColor.map((item) => {
                                        return (
                                            <Radio value={item.name != "All" ? item.name : null} key={item.id}>{item.name}</Radio>
                                        )
                                    })
                                }
                            </Space>
                        </Radio.Group>

                    </ul>
                </div>

                <div class="widget_list manufacturer">
                    <h3>Size</h3>
                    <ul>
                        <Radio.Group onChange={onChangeSize} value={valueSize}>
                            <Space direction="vertical">
                                {
                                    filterSize.map((item) => {
                                        return (
                                            <Radio value={item.name != "All" ? item.name : null} key={item.id}>{item.name}</Radio>
                                        )
                                    })
                                }
                            </Space>
                        </Radio.Group>
                    </ul>
                </div>

                <div class="widget_list price">
                    <h3>Pricer</h3>
                    <ul>
                        <Radio.Group onChange={onChangePrice} value={valuePrice}>
                            <Space direction="vertical">
                                {
                                    filterPrice.map((item) => {
                                        return (
                                            <Radio value={item.name != "All" ? item.name : null} key={item.id}>{item.name}</Radio>
                                        )
                                    })
                                }
                            </Space>
                        </Radio.Group>
                    </ul>
                </div>

                <div class="widget_list tag_widget  ">
                    <h3>popular tags</h3>
                    <div class="block_tags d-flex flex-wrap gap-2">
                        {popularTag.map((item) => {
                            return (
                                <a
                                    key={item.id}
                                    style={item.name == valueCategory ? { cursor: 'pointer' ,background: '#1c66c7', color: '#fff'} : { cursor: 'pointer'}}
                                    onClick={() => onChangePopular(item.name)}
                                >
                                    {item.name}
                                </a>
                            )
                        })}
                    </div>
                </div>

                <div class="widget_list banner">
                    <div class="banner_thumb">
                        <a><img src="assets/img/banner/banner9.png" alt="" /></a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ShopSidebar