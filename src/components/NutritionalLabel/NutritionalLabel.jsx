import * as React from "react"
import { nutritionFacts } from "../../constants"
import "./NutritionalLabel.css"

export function NutritionalLabel(props) {
  return (
    <div className="nutritional-label">
      <h3 className="title">Nutrition Facts</h3>

      <h4 className="item-name">{props.itemName}</h4>

      <ul className="fact-list">{
        nutritionFacts.map((items) => {
          return <NutritionalLabelFact key={items.id} factLabel={items.label} factValue={items.attribute} item={props.item}></NutritionalLabelFact>
        })
      }</ul>
    </div>
  )
}

export function NutritionalLabelFact(props) {
  console.log('props: ', props);
  console.log(props.item[props.factValue]);

  if (props.item[props.factValue] === "fiber") {
    
  }
  return (
    <li className="nutrition-fact">
      <span className="fact-label">{props.factLabel}</span>{" "}
      <span className="fact-value">{props.item[props.factValue]}</span>
    </li>
  )
}

export default NutritionalLabel
