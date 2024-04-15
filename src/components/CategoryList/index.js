import { useState, useEffect } from 'react'

import CategoryItem from '../CategoryItem'

import { MdCurrencyRupee } from "react-icons/md";
import { IoBookmarkOutline } from "react-icons/io5";
import { LuDot } from "react-icons/lu";

import './index.css'

const categoryList = [
    {image: "https://res.cloudinary.com/dkwwcq9yc/image/upload/v1713110873/Frame_461_m4alkz.png",
     name: "All Bags",
     category: ""
    },
    {image: "https://res.cloudinary.com/dkwwcq9yc/image/upload/v1713110873/Frame_50_dr9kag.png",
     name: "Vanity Pouch",
     category: "VANITYPOUCH"
    },
    {image: "https://res.cloudinary.com/dkwwcq9yc/image/upload/v1713110872/Frame_49_xo3t2c.png",
     name: "Tote Bag",
     category: "TOTE"
    },
    {image: "https://res.cloudinary.com/dkwwcq9yc/image/upload/v1713110872/Frame_13_zpdcm8.png",
     name: "Duffle Bag",
     category: "DUFFLE"
    },
    {image: "https://res.cloudinary.com/dkwwcq9yc/image/upload/v1713110872/Frame_49_1_oo1aab.png",
     name: "Laptop Sleeve",
     category: "LAPTOPSLEEVE"
    },
    {image: "https://res.cloudinary.com/dkwwcq9yc/image/upload/v1713110872/Frame_49_2_mkynej.png",
     name: "Messenger Bags",
     category: "MESSENGER"
    },
    {image: "https://res.cloudinary.com/dkwwcq9yc/image/upload/v1713110872/Frame_22_dd0ios.png",
     name: "Slings Bags",
     category: "SLINGS"
    },
    {image: "https://res.cloudinary.com/dkwwcq9yc/image/upload/v1713110872/Frame_20_jjgr83.png",
     name: "Handbags",
     category: "HAND"
    },
    {image: "https://res.cloudinary.com/dkwwcq9yc/image/upload/v1713110873/Group_306_1_e1xkjz.png",
     name: "Bucket Bag",
     category: "BUCKET"
    }
]

const apiStatusConstants = {
    initial: 'INITIAL',
    success: 'SUCCESS',
    inProgress: 'IN_PROGRESS',
}

const CategoryList = () => {
    const [activeTabId, setActiveTabId] = useState(categoryList[0].category)
    const [productList, setProductList] = useState([])
    const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial)    

    useEffect(() => {
        const getProductData = async () => {
            setApiStatus(apiStatusConstants.inProgress)
            const apiUrl = "https://dev-zhzc5vrrcvlv2jg.api.raw-labs.com/mock/3"
            const options = {
                method: 'GET',
            }
          
            const response = await fetch(apiUrl, options)

            if (response.ok) {
                const data = await response.json()
                setProductList(data)
                setApiStatus(apiStatusConstants.success)
            } 
        }

        getProductData()

    }, [])

    const clickTabItem = tabId => {
        setActiveTabId(tabId)
    }

    const filteredProducts = productList.filter(each => (
        each.category === activeTabId
    ))

    const filterItems = filteredProducts.length !== 0 ? filteredProducts : productList

    return (
        <div className="category-list-container">
            <div className="category-list-responsive-container">
                <ul className="category-list">
                    {categoryList.map((each, index) => (
                        <CategoryItem key={index} clickTabItem={clickTabItem} isActive={activeTabId === each.category} data={each} />
                    ))}
                </ul>
                <p className="bags-backpack">Bags <LuDot size={22} /> Backpack</p>
                {apiStatus === apiStatusConstants.inProgress ? (
                    <div className="box"><div className="box1"></div></div>
                ) : (
                    <ul className="product-list">
                    {filterItems.map((each, index) => (
                        <li key={index} className="product-list-item">
                            <IoBookmarkOutline color='#0C0C0C' size={28} className="bookmark-icon" />
                            <img src={each.image} alt='' className="product-img" />
                            <div className="product-details">
                                <p className="product-name">{each.name}</p>
                                <div className="product-rate-container">
                                    <div className="product-rate-container2">
                                        <p className="product-rate"><MdCurrencyRupee />{each.price}</p>
                                        <p className="product-full-rate">8999</p>
                                        <p className="product-discount">(50% Off)</p>
                                    </div>
                                    <img src={process.env.PUBLIC_URL + '/assets/Group 451.png'} alt='' className="icon2" />
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
                )}
                
            </div>
        </div>
    )
}

export default CategoryList