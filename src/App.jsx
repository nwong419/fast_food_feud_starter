import * as React from "react"
// IMPORT ANY NEEDED COMPONENTS HERE
import { createDataSet } from "./data/dataset"
import "./App.css"
import Header from "./components/Header/Header"
import Instructions from "./components/Instructions/Instructions"
import Chip from "./components/Chip/Chip";
import { useState } from 'react';
import NutritionalLabel from './components/NutritionalLabel/NutritionalLabel';

// don't move this!
export const appInfo = {
  title: `Fast Food Feud 🍔!`,
  tagline: `Folks' Favorite Friendly Fuel Finder For Food Facts`,
  description: `Finding healthy food is hard. Sometimes we just settle for what's available. That doesn't mean we shouldn't know what's going into our bodies! Fast Food Feud is here to arm the public with all the nutritional facts needed to make informed decisions about fast food consumption.`,
  dataSource: `All data pulled from the MenuStat.org interactive online database.`,
  instructions: {
    start: `Start by clicking on a food category on the left and a fast food joint from the list above. Afterwards, you'll be able to choose from a list of menu items and see their nutritional content.`,
    onlyCategory: `Now select a fast food restaurant from the list above!`,
    onlyRestaurant: `Now select a category from the list on the left!`,
    noSelectedItem: `Almost there! Choose a menu item and you'll have the fast food facts right at your fingertips!`,
    allSelected: `Great choice! Amazing what a little knowledge can do!`,
  },
}
// or this!
const { data, categories, restaurants } = createDataSet()

export function App() {
  const[cat, setCategory] = useState(null);
  const[rest, setRestaurant] = useState(null);
  const[selectedItem, setSelectedItem] = useState(null);

  const currentMenuItems = data.filter((data) => {
    return data.food_category === cat && data.restaurant === rest;
  });
  //iterate over the currentMenuItems and render a Chip for each one
  // currentMenuItems.map((item) => {
  //   <Chip label={item} key={item} handleClick={(item) => {
  //       setSelectedItem(item);
  //   }}>item</Chip>
  // })
  //
  return (
    
    <main className="App">
      {/* CATEGORIES COLUMN */}
      <div className="CategoriesColumn col">
        <div className="categories options">
          <h2 className="title">Categories</h2>
          {categories.map((category) => {
            return (
              <React.Fragment key={category}>
                  <Chip label={category} key={category} handleClick={() => {
                  setCategory(category);
                  }} isActive={cat == category}>{category}</Chip>
              </React.Fragment>
            )
          })}
        </div>
      </div>

      {/* MAIN COLUMN */}
      <div className="container">
        {/* HEADER GOES HERE */}
        {/*Pass the values from the appinfo object into the Header component as props*/}
        <Header title={appInfo.title}
          tagline={appInfo.tagline}
          description={appInfo.description}/>

        {/* RESTAURANTS ROW */}
        <div className="RestaurantsRow">
          <h2 className="title">Restaurants</h2>
          <div className="restaurants options">
            {restaurants.map((restaurant) => {
              return (
                <React.Fragment key={restaurant}>
                  <Chip label={restaurant} key={restaurant} handleClick={() => {
                    setRestaurant(restaurant);
                   }} isActive={restaurant == rest}>{restaurant}</Chip>
                </React.Fragment>
              )
            })}
          </div>
        </div>

        {/* INSTRUCTIONS GO HERE */}
        <Instructions instructions={appInfo.instructions.start}/>

        {/* MENU DISPLAY */}
        <div className="MenuDisplay display">
          <div className="MenuItemButtons menu-items">
            <h2 className="title">Menu Items</h2>
            {/* YOUR CODE HERE */}
            {currentMenuItems.map((item)=> {
              
              return (
                <React.Fragment key={item.id}>
                  <Chip label={item.item_name} key={item.id} handleClick={() => {
                    setSelectedItem(item);
                  }} isActive={item == selectedItem} />
                 </React.Fragment>
              )
            })}
          </div>

          {/* NUTRITION FACTS */}
          <div className="NutritionFacts nutrition-facts">
           {selectedItem ? <NutritionalLabel itemName={selectedItem.item_name} item={selectedItem}></NutritionalLabel> : null}
          </div>
        </div>

        <div className="data-sources">
          <p>{appInfo.dataSource}</p>
        </div>
      </div>
    </main>
  )
}

export default App
