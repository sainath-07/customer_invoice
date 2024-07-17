import { Component } from "react";
import axios from "axios";

class Data extends Component {
  state = {
    AlternatePayee1: "",
    AlternatePayee2: "",
    city: "",
    Street: "",
    Country: "",
    Bankkey: "",
    BankAccno: "",
    reference: "",
  };

  

  // eachfield functions
  handleAlternatePayee1 = (e) => {
    this.setState({
      AlternatePayee1: e.target.value,
    });
  };

  handleAlternatePayee2 = (e) => {
    this.setState({
      AlternatePayee2: e.target.value,
    });
  };
  handlecity = (e) => {
    this.setState({
      city: e.target.value,
    });
  };
  handleStreet = (e) => {
    this.setState({
      Street: e.target.value,
    });
  };
  handleCountry = (e) => {
    this.setState({
      Country: e.target.value,
    });
  };
  handleBankkey = (e) => {
    this.setState({
      Bankkey: e.target.value,
    });
  };
  handleBankAccno = (e) => {
    this.setState({
      BankAccno: e.target.value,
    });
  };
  handlereference = (e) => {
    this.setState({
      reference: e.target.value,
    });
  };

  handlesubmit = (e) => {
    e.preventDefault();
    const obj = {
      AlternatePayee1: this.state.AlternatePayee1,
      AlternatePayee2: this.state.AlternatePayee2,
      city: this.state.city,
      Street: this.state.Street,
      Country: this.state.Country,
      Bankkey: this.state.Bankkey,
      BankAccno: this.state.BankAccno,
      reference: this.state.reference,
    };
    console.log(obj);

    axios.post("http://localhost:5000/formdata", obj).then(
      (x) => console.log(x.data),
      (y) => console.log(y)
    );

    this.setState({
        
        AlternatePayee1:"",
        AlternatePayee2:"",
        city:"",
        Street:"",
        Country:"",
        Bankkey:"",
        BankAccno:"",
        reference:""
    })

    
  };

  render() {
    return (
      <>
        <form className="d-flex flex-column" onSubmit={this.handlesubmit}>
          <label htmlFor="AlternatePayee1">
            Alternate Payee1
            <input
              type="text"
              id="AlternatePayee1"
              value={this.state.AlternatePayee1}
              onChange={this.handleAlternatePayee1}
            />
          </label>

          <label htmlFor="AlternatePayee2">
            Alternate Payee2
            <input
              type="text"
              id="AlternatePayee1"
              value={this.state.AlternatePayee2}
              onChange={this.handleAlternatePayee2}
            />
          </label>

          <label htmlFor="city">
            city
            <input
              type="text"
              id="city"
              value={this.state.city}
              onChange={this.handlecity}
            />
          </label>

          <label htmlFor="Street">
            Street
            <input
              type="text"
              id="Street"
              value={this.state.Street}
              onChange={this.handleStreet}
            />
          </label>

          <label htmlFor="Country">
            Country
            <input
              type="text"
              id="Country"
              value={this.state.Country}
              onChange={this.handleCountry}
            />
          </label>

          <label htmlFor="Bankkey">
            Bankkey/IFSC code:
            <input
              type="text"
              id="Bankkey"
              value={this.state.Bankkey}
              onChange={this.handleBankkey}
            />
          </label>

          <label htmlFor="BankAccno">
            BankAcc no:
            <input
              type="text"
              id="BankAccno"
              value={this.state.BankAccno}
              onChange={this.handleBankAccno}
            />
          </label>

          <label htmlFor="reference">
            reference:
            <input
              type="text"
              id="reference"
              value={this.state.reference}
              onChange={this.handlereference}
            />
          </label>

          <input type="submit" className="w-25" />
        </form>
      </>
    );
  }
}

export default Data;
