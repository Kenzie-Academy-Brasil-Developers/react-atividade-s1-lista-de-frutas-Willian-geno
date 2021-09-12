function FruitList (props) {

    return (
        <div>
          {props.item.map(fruta => <li>{fruta.name}</li>)} 
        </div>
    )
}

export default FruitList;