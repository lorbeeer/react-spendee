import React, { Component } from 'react';
import CategoryBox from './categoryBox'
import ExpnBox from './expnBox'
import shortid from 'shortid';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {expenses: [], categories: [], ctgEditing: false, selectedItem: '', showHome: true};
  }

   setSelectedItem(id){
    this.setState({selectedItem: id.toString()});
  }

  toggleForm(){
    this.setState((prevState) => {
      return {ctgEditing: !prevState.ctgEditing};
    });
  }

  toggleHome(){
    this.setState((prevState) => {
      return {showHome: !prevState.showHome};
    });
  }

   onSelect(id) {
    this.toggleForm();
    this.setSelectedItem(id);
  }


//----EXPENSES-----------------------------------------------------------------
  loadExpnFromServer() {
    let expenses = JSON.parse(localStorage.getItem('expenses'));
    this.setState({expenses: expenses});
  }

  expnAdd(description, sum, data, category){
    let expn = {
      id:shortid.generate(),
      description,
      sum,
      data,
      category
    };
    let expns = this.state.expenses;
    let newExpns = expns.concat([expn]);
    this.setState({expenses: newExpns});
    localStorage.setItem('expenses', JSON.stringify(newExpns));
    this.toggleForm();
  }

   expnRemove(id){
    const remainder = this.state.expenses.filter((expn) => {
      if(expn.id !== id) return expn;
    });
    this.setState({expenses: remainder});
    localStorage.setItem('expenses', JSON.stringify(remainder));
  }

  expnEdit(description, sum, data, category){
    const expns = this.state.expenses;
    const newItem = {"id":this.state.selectedItem, description, sum, data, category };
    const index = expns.findIndex((i)=>{return i.id === this.state.selectedItem})
    let newExpns = expns.filter((expn) => {
      if(expn.id.toString() !== this.state.selectedItem) return expn;
    });
    newExpns.splice( index, 0, newItem );
    this.setState({expenses: newExpns});
    localStorage.setItem('expenses', JSON.stringify(newExpns));
    this.toggleForm();
    this.setState({selectedItem: ''});
  }

//----CATEGORIES---------------------------------------------------------------
  loadCtgFromServer() {
    let categories = JSON.parse(localStorage.getItem('categories'));
    this.setState({categories: categories});
  }

  ctgRemove(id){
    const remainder = this.state.categories.filter((ctg) => {
      if(ctg.id !== id) return ctg;
    });
    this.setState({categories: remainder});
    localStorage.setItem('categories', JSON.stringify(remainder));
    
  }

  ctgAdd(name){
    let ctg = {
      id:shortid.generate(),
      name
    };
    let ctgs = this.state.categories;
    let newCategories = ctgs.concat([ctg]);
    this.setState({categories: newCategories});
    localStorage.setItem('categories', JSON.stringify(newCategories));
    this.toggleForm();
  }

  ctgEdit(newName){
    const ctgs = this.state.categories;
    const newItem = {"id":this.state.selectedItem, "name":newName};
    const index = ctgs.findIndex((i)=>{return i.id === this.state.selectedItem})
    let newCtgs = ctgs.filter((ctg) => {
      if(ctg.id.toString() !== this.state.selectedItem) return ctg;
    });
    newCtgs.splice( index, 0, newItem );
    this.setState({categories: newCtgs});
    localStorage.setItem('categories', JSON.stringify(newCtgs));
    this.toggleForm();
    this.setState({selectedItem: ''});
  }
//______________CATEGORIES_______________________________________________________________________

  componentDidMount() {
    this.loadExpnFromServer();
    this.loadCtgFromServer();
  }
  
  render() {
    return (
      <div className="App">
        {
          this.state.showHome ? (
          <ExpnBox 
              categories={this.state.categories} 
              expenses={this.state.expenses}
              ctgEditing={this.state.ctgEditing}
              selectedItem={this.state.selectedItem}
              select={this.onSelect.bind(this)}
              remove={this.expnRemove.bind(this)}
              showForm={this.toggleForm.bind(this)}
              add={this.expnAdd.bind(this)}
              edit={this.expnEdit.bind(this)}
              toggleHome={this.toggleHome.bind(this)}
          />
          ) : (
          <CategoryBox 
              categories={this.state.categories} 
              ctgEditing={this.state.ctgEditing}
              selectedItem={this.state.selectedItem}
              select={this.onSelect.bind(this)}
              remove={this.ctgRemove.bind(this)}
              showForm={this.toggleForm.bind(this)}
              add={this.ctgAdd.bind(this)}
              edit={this.ctgEdit.bind(this)}
              toggleHome={this.toggleHome.bind(this)}
          />
          )
        }
      </div>
    );
  }
}

export default App;
