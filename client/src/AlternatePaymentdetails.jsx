import { Component } from "react";
import axios from "axios";

class AlternatePaymentdetails extends Component {
  // static contextType = AuthContext;

  // state = {
  //   AlternatePayee1: "",
  //   AlternatePayee2: "",
  //   city: "",
  //   Street: "",
  //   Country: "",
  //   Bankkey: "",
  //   BankAccno: "",
  //   reference: "",
  // };

  // eachfield functions
  // handleAlternatePayee1 = (e) => {
  //   this.setState({
  //     ...this.state,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // handlesubmit = (e) => {
  //   e.preventDefault();
  //   const obj = {
  //     AlternatePayee1: this.state.AlternatePayee1,
  //     AlternatePayee2: this.state.AlternatePayee2,
  //     city: this.state.city,
  //     Street: this.state.Street,
  //     Country: this.state.Country,
  //     Bankkey: this.state.Bankkey,
  //     BankAccno: this.state.BankAccno,
  //     reference: this.state.reference,
  //   };
  //   console.log(obj);

  //   axios.post("http://localhost:5000/formdata", obj).then(
  //     (x) => console.log(x.data),
  //     (y) => console.log(y)
  //   );

  //   this.setState({
  //     AlternatePayee1: "",
  //     AlternatePayee2: "",
  //     city: "",
  //     Street: "",
  //     Country: "",
  //     Bankkey: "",
  //     BankAccno: "",
  //     reference: "",
  //   });
  // };

  render() {
    return (
      <>
        <form className="d-flex flex-column gap-3" onSubmit={this.handlesubmit}>
          <div className="d-flex justify-content-between">
            <label htmlFor="AlternatePayee1">
              Alternate Payee1 <span style={{ color: "red" }}>&#42;</span> :
            </label>
            <input
              type="text"
              id="AlternatePayee1"
              name="AlternatePayee1"
              value={this.state.AlternatePayee1}
              onChange={this.handleAlternatePayee1}
              size={"50"}
              className="border border-none"
            />
          </div>

          <div className="d-flex justify-content-between">
            <label htmlFor="AlternatePayee2">
              Alternate Payee2 <span style={{ color: "red" }}>&#42;</span> :
            </label>
            <input
              type="text"
              id="AlternatePayee2"
              name="AlternatePayee2"
              size={"50"}
              className="border border-none"
              value={this.state.AlternatePayee2}
              onChange={this.handleAlternatePayee1}
            />
          </div>

          <div className="d-flex justify-content-between">
            <label htmlFor="city">
              city <span style={{ color: "red" }}>&#42;</span> :
            </label>
            <input
              type="text"
              id="city"
              name="city"
              size={"50"}
              className="border border-none"
              value={this.state.city}
              onChange={this.handleAlternatePayee1}
            />
          </div>

          <div className="d-flex justify-content-between">
            <label htmlFor="Street">
              Street <span style={{ color: "red" }}>&#42;</span> :
            </label>
            <input
              type="text"
              id="Street"
              name="Street"
              size={"50"}
              className="border border-none"
              value={this.state.Street}
              onChange={this.handleAlternatePayee1}
            />
          </div>

          <div className="d-flex justify-content-between">
            <label htmlFor="Country">
              Country <span style={{ color: "red" }}>&#42;</span> :
            </label>
            <input
              type="text"
              id="Country"
              name="Country"
              size={"50"}
              className="border border-none"
              value={this.state.Country}
              onChange={this.handleAlternatePayee1}
            />
          </div>

          <div className="d-flex justify-content-between">
            <label htmlFor="Bankkey" style={{ fontSize: "14px" }}>
              Bankkey/IFSC code <span style={{ color: "red" }}>&#42;</span> :
            </label>
            <input
              type="text"
              id="Bankkey"
              name="Bankkey"
              size={"50"}
              className="border border-none"
              value={this.state.Bankkey}
              onChange={this.handleAlternatePayee1}
            />
          </div>

          <div className="d-flex justify-content-between">
            <label htmlFor="BankAccno" style={{ fontSize: "14px" }}>
              BankAcc no <span style={{ color: "red" }}>&#42;</span> :
            </label>
            <input
              type="text"
              id="BankAccno"
              name="BankAccno"
              value={this.state.BankAccno}
              size={"50"}
              className="border border-none"
              onChange={this.handleAlternatePayee1}
            />
          </div>

          <div className="d-flex justify-content-between">
            <label htmlFor="reference" style={{ fontSize: "14px" }}>
              Reference <span style={{ color: "red" }}>&#42;</span> :
            </label>
            <input
              type="text"
              id="reference"
              name="reference"
              size={"50"}
              className="border border-none"
              value={this.state.reference}
              onChange={this.handleAlternatePayee1}
            />
          </div>

          <input type="submit" className="w-25" />
        </form>
      </>
    );
  }
}

export default AlternatePaymentdetails;
