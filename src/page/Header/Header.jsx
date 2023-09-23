import React, { useEffect, useState } from 'react';
import logoCigar from "../../assets/img/logo/logo.png";

import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { menuName } from '../../constant/menuName';
import { changeCategory } from '../../redux/slice/categorySoft';
import { getDetailProduct } from '../../redux/slice/detail_Product';
import { getProduct } from '../../service/api/product';
import { getSearchProductData } from '../../redux/slice/searchProduct';
import { useNavigate } from 'react-router-dom';

const category = [
    {
        id: 0,
        name: 'All'
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


function Header(props) {
    const [activeCategory, setActiveCategory] = useState('All')
    const [cartMain, setCartMain] = useState(false);
    const [cartCategori, setCartCategori] = useState(false);
    const [menu, setMenu] = useState(false)
    const [keySearch, setKeySearch] = useState('')
    const [suggest, setSuggest] = useState([])

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const select = useSelector(state => state.cart_Products);
    // console.log(select, 'select')

    //COMPONENT
    function MenuResponsive() {
        return (
            <nav className="mean-nav" onClick={() => setMenu(pre => !pre)}>
                <ul>
                    {
                        menuName.map((item) => {
                            return (
                                <li key={item.id}>
                                    <NavLink to={item.linkName} onClick={() => setActiveCategory('All')}>{item.name}</NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        )
    }
    function CartItem() {
        return (
            <div className="mini_cart d-block">
                <div className="items_nunber">
                    <span>{select.length} Items in Cart</span>
                </div>
                <div className="cart_button checkout">
                    <NavLink to={'/cart'} onClick={() => setCartMain(false)}> Proceed to Checkout</NavLink>
                </div>
                {select.map((item) => {
                    return (
                        <div className="cart_item" key={item._id}>
                            <div className="cart_img">
                                <NavLink to={`/detail/${item._id}`} onClick={() => { dispatch(getDetailProduct(item)); setCartMain(pre => !pre) }}><img src={item.image} alt="" /></NavLink>
                            </div>
                            <div className="cart_info">
                                <a>{item.name}</a>
                                <form action="#">
                                    <input value={item.qty} min="0" max="100" type="number" />
                                    <span>${item.price}</span>
                                </form>
                            </div>
                        </div>
                    )
                })}

                <div className="cart_button view_cart">
                    <NavLink to={'/cart'} onClick={() => setCartMain(false)}> View and Edit Cart</NavLink>
                </div>
            </div>
        )
    }
    function CartCategori() {

        return (
            <div className="categories_menu_inner d-block">
                <ul>
                    {
                        category.map((item) => {
                            return (
                                <li className="categorie_list" key={item.id}>
                                    <a onClick={() => {
                                        setActiveCategory(item.name);
                                        setCartCategori(pre => !pre)
                                        dispatch(getSearchProductData(''));
                                        dispatch(changeCategory(item.name));
                                    }
                                    }
                                        style={activeCategory == item.name ? { color: '#0062ffd8' } : {}}
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }

    //SEARCH
    const handleSearch = () => {
        console.log(keySearch, 'keySearch')

        dispatch(getSearchProductData(keySearch));
        navigate(`/shop?name=${keySearch}`)
        setKeySearch('')
    }
    const handleKeySearch = (e) => {
        console.log(e.target.value)
        setKeySearch(e.target.value);
    }

    const getApiSuggest = async () => {
        console.log(keySearch, keySearch.length, 'hhhh')

        const { data } = await getProduct();
        console.log(data)
        const newDataSuggest = await data.filter((item) => {
            return item.name.toLowerCase().includes(keySearch.toLowerCase());
        })
        console.log(newDataSuggest)
        if (keySearch) {
            console.log('ttt')
            setSuggest(newDataSuggest)
        }
        else {
            console.log('dd')
            setSuggest([])
        }

    }

    useEffect(() => {
        getApiSuggest()
    }, [keySearch])


    return (
        <header className="header_area">
            <div className="header_middel">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-md-4">
                            <div className="logo">
                                <a><img src={logoCigar} alt="" /></a>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-5">
                            <div className="search_bar" style={{ position: 'relative' }}>
                                {/* <form> */}
                                <input onChange={(e) => { handleKeySearch(e) }} value={keySearch} placeholder="Search entire store here..." type="text" />
                                <ul style={{ position: 'absolute', width: '100%', zIndex: '5', background: '#f6f3f3', borderRadius: '0 0 2px 2px' }}>
                                    {
                                        suggest && suggest.map((item) => {
                                            return <li
                                                onClick={() => {
                                                    setKeySearch(item.name); 
                                                    dispatch(getSearchProductData(item.name));
                                                    navigate(`/shop?name=${item.name}`)
                                                    setKeySearch('')
                                                }}
                                                key={item._id}
                                                className='suggest_search'
                                                style={{ padding: '3px 3px 3px 3px', borderTop: '1px solid #e6e6e6' }}
                                            >
                                                <i className="ion-ios-search-strong mr-2"></i>
                                                {item.name}
                                            </li>
                                        })
                                    }
                                </ul>
                                <button onClick={handleSearch}><i className="ion-ios-search-strong"></i></button>
                                {/* </form> */}
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-3">
                            <div className="cart_area">
                                <div className="wishlist_link">
                                    <NavLink to={'/dashboard'} className='d-flex'>
                                        <i className="ion-ios-person-outline"></i>
                                        <p className='set_user d-flex align-items-end setup_edit'>Edit</p>
                                    </NavLink>
                                </div>
                                <div className="cart_link">
                                    <a onClick={() => setCartMain(pre => !pre)}><i className="ion-ios-cart-outline"></i>Cart</a>
                                    <span className="cart_count">{select.length}</span>

                                    {cartMain ? <CartItem /> : <></>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="header_bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-5">
                            <div className="categories_menu">
                                <div className="categories_title" onClick={() => setCartCategori(pre => !pre)}>
                                    <h2 className="categori_toggle">{activeCategory == 'All' ? 'All Categories' : activeCategory.slice(0, 12) + '...'}</h2>
                                </div>
                                {cartCategori ? <CartCategori /> : <></>}
                            </div>
                        </div>
                        <div className="col-lg-7 position-relative">
                            <div className="main_menu_inner">
                                <div className="main_menu d-none d-lg-block">
                                    <ul>
                                        {
                                            menuName.map((item) => {
                                                return (
                                                    <li key={item.id} >
                                                        <NavLink
                                                            to={item.linkName}
                                                            onClick={() => {
                                                                setActiveCategory('All');
                                                                dispatch(changeCategory('All'))
                                                            }
                                                            }
                                                        >
                                                            {item.name}
                                                        </NavLink>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                                <div className="mobile-menu d-lg-none mean-container">
                                    <div className="mean-bar">
                                        <a className="meanmenu-reveal" onClick={() => setMenu(pre => !pre)}><span></span><span></span><span></span></a>
                                        {menu ? <MenuResponsive /> : <></>}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="contact_phone">
                                <div className="contact_icone">
                                    <span className="pe-7s-headphones"></span>
                                </div>
                                <div className="contact_number">
                                    <p>Call Us:</p>
                                    <span>(999) 1234 56789</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>


    )
}

export default Header;
