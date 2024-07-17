import React, { Component } from "react";
// import AlternatePaymentdetails from "./AlternatePaymentdetails";

// const AuthContext = React.createContext();


export class InvoiceAmountDetails extends Component {
  // state = {
  //   currency: "" || "INR",
  //   BasicAmt: "" || "15,000.00",
  //   TaxAmt: "" || "1,000.00",
  //   TotalInvAmt: "" || "16,000.00",
  //   AdvancePaid: "" || "0.00",
  //   TcsApplicable: "",
  //   NetPayableAmt: "" || "16,000.00",
  // };

  handleInvoicAmount = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };

  render() {

    const {handleInvoicAmount}=this
    const {
      currency,
      BasicAmt,
      TaxAmt,
      TotalInvAmt,
      AdvancePaid,
      TcsApplicable,
      NetPayableAmt,
    } = this.state;
    
    return (
      <>
       {/* <AuthContext.Provider value={{
        currency,
        BasicAmt,
        TaxAmt,
        TotalInvAmt,
        AdvancePaid,
        TcsApplicable,
        NetPayableAmt,
        handleInvoicAmount
       }}>           
               <Demo />
            </AuthContext.Provider>   */}

        <form className="d-flex gap-3 flex-column">
          <div className="d-flex justify-content-between">
            <label htmlFor="currency" style={{ fontSize: "14px" }}>
              Currency<span style={{ color: "red" }}>&#42;</span> :
            </label>
            <input
              type="text"
              id="currency"
              className="border border-0"
              name="currency"
              // defaultValue={"INR"}/
              size={"60"}
              value={this.state.currency}
              onChange={this.handleInvoicAmount}
            />
          </div>

          <div className="d-flex justify-content-between">
            <label htmlFor="BasicAmt" style={{ fontSize: "14px" }}>
              Inv BasicAmt<span style={{ color: "red" }}>&#42;</span> :
            </label>
            <input
              type="text"
              id="BasicAmt"
              className="border border-0 "
              name="BasicAmt"
              value={this.state.BasicAmt}
              size={"60"}
              onChange={this.handleInvoicAmount}
            />
          </div>

          <div className="d-flex justify-content-between">
            <label htmlFor="TaxAmt" style={{ fontSize: "14px" }}>
              Inv Tax Amt<span style={{ color: "red" }}>&#42;</span> :
            </label>
            <input
              type="text"
              id="TaxAmt"
              className="border border-0 "
              name="TaxAmt"
              value={this.state.TaxAmt}
              size={"60"}
              onChange={this.handleInvoicAmount}
            />
          </div>

          <div className="d-flex justify-content-between">
            <label htmlFor="TotalInvAmt" style={{ fontSize: "14px" }}>
              Total Inv Amt[Inclu. of tax]
              <span style={{ color: "red" }}>&#42;</span> :
            </label>
            <input
              type="text"
              id="TotalInvAmt"
              className="border border-0 "
              name="TotalInvAmt"
              value={this.state.TotalInvAmt}
              size={"60"}
              onChange={this.handleInvoicAmount}
            />
          </div>

          <div className="d-flex justify-content-between">
            <label htmlFor="AdvancePaid" style={{ fontSize: "14px" }}>
              Advance Paid<span style={{ color: "red" }}>&#42;</span> :
            </label>
            <input
              type="text"
              id="AdvancePaid"
              className="border border-none fw-bold"
              name="AdvancePaid"
              value={this.state.AdvancePaid}
              size={"50"}
              onChange={this.handleInvoicAmount}
            />
          </div>

          {/* <div className="d-flex justify-content-between">
            <label style={{ fontSize: "14px" }}>
              TCS applicable<span style={{ color: "red" }}>&#42;</span> :
            </label>

            <div
              className="d-flex gap-2"
              style={{ width: "480px" }}
              onChange={this.handleInvoicAmount}
            >
              <label htmlFor="yes">
                {" "}
                <input type="radio" name="Y/N" id="yes" value="yes" /> Yes{" "}
              </label>
              <label htmlFor="no">
                {" "}
                <input type="radio" name="Y/N" id="no" value="no" /> No{" "}
              </label>
            </div>
          </div> */}

          <div className="d-flex justify-content-between">
            <label htmlFor="NetPayableAmt" style={{ fontSize: "14px" }}>
              Net Payable Amt[Excul. of TDS]
              <span style={{ color: "red" }}>&#42;</span> :
            </label>
            <input
              type="text"
              id="BasicAmt"
              className="border border-0 "
              name="NetPayableAmt"
              value={this.state.NetPayableAmt}
              size={"60"}
              onChange={this.handleInvoicAmount}
            />
          </div>
        </form>
      </>
    );
  }
}


// export default AuthContext;