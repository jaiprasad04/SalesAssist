import './index.css'

const CategoryItem = props => {
    const {data, clickTabItem, isActive} = props
    const  {image, name, category} = data

    const onClickTabItem = () => {
        clickTabItem(category)
    }

    const selected = isActive && 'selected'

    return (
        <li className={`category-item ${selected}`} onClick={onClickTabItem}>
            <img src={image} alt='' className="category-list-img"/>
            <p className="bag-name">{name}</p>
        </li>
    )
}

export default CategoryItem