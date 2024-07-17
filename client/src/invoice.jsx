import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";
import { CircleArrowRight, CircleChevronLeft } from 'lucide-react';
import Swal from 'sweetalert2'



import { Component } from "react";
import axios from "axios";

class Invoice extends Component {
  state = {
    currency: "" || "INR",
    BasicAmt: "" || "15,000.00",
    TaxAmt: "" || "1,000.00",
    TotalInvAmt: "" || "16,000.00",
    AdvancePaid: "" || "0.00",
    TCSApplicable: "",
    NetPayableAmt: "" || "16,000.00",

    AlternatePayee1: "",
    AlternatePayee2: "",
    city: "",
    Street: "",
    Country: "",
    Bankkey: "",
    BankAccno: "",
    reference: "",
  };

  handleInputChange = (e) => {
    console.log(e.target.value, e.target.name);
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleAlternatePayee1 = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handlesubmit = (e) => {
    e.preventDefault();

    const {
      currency,
      BasicAmt,
      TaxAmt,
      TotalInvAmt,
      AdvancePaid,
      TCSApplicable,
      NetPayableAmt,
      AlternatePayee1,
      AlternatePayee2,
      city,
      Street,
      Country,
      Bankkey,
      BankAccno,
      reference,
    } = this.state;
    console.log(this.state);
    const obj = {
      currency,
      BasicAmt,
      TaxAmt,
      TotalInvAmt,
      AdvancePaid,
      TCSApplicable, 
      NetPayableAmt,
      AlternatePayee1,
      AlternatePayee2,
      city,
      Street,
      Country,
      Bankkey,
      BankAccno,
      reference,
    };
    console.log(obj);

    axios.post("http://localhost:5000/formdata", obj).then(
      (x) => console.log(x.data),
      (y) => console.log(y)
    );
    Swal.fire("Submitted successfully");


    this.setState({
      AlternatePayee1: "",
      AlternatePayee2: "",
      city: "",
      Street: "",
      Country: "",
      Bankkey: "",
      BankAccno: "",
      reference: "",
    });
  };

  render() {
    return (
      <>
        <div className="container-fluid lh-lg">
          <div className="row">

            {/* document */}
            <div className="col-6 border border-2">
              <h1>Field and Template Search</h1>
              <p>
                You can search for documents and folders, in the{" "}
                <a href="#">Search Pane</a>, by assigned template, field value,
                or multiple field values, using the field search type.
              </p>

              <p>
                The <a href="#">Quick Search</a> and{" "}
                <a href="#">Basic Search</a> types also let you search across
                all fields in the repository. Or, increase the power of your
                searches by using the{" "}
                <a href="#">advanced fields and templates search syntax</a>.
              </p>
              <p>
                To specify a field and value to search for, type the value you
                want to search for in the field. The search values you can input
                depend on the field type and any constraints on the field. For
                instance, you cannot search for alphabet characters in a number
                field, and if an administrator has constrained the phone number
                format that can be typed in a phone number field, you will not
                be able to type the number in a non-matching format. Likewise,
                when performing a Date, Time or Date/Time search, you will only
                be able to input date and time values that match the date and
                time formatting for that field.
              </p>
              <p>
                When searching on a date field, you can search for a date range.
                Learn about the <a href="#">types of date searches</a>.
              </p>
              <b>To perform a field and/or template search</b>
              <p>
                To search by field value or template in the Laserfiche Windows
                client
              </p>
              <ol>
                <li>
                  In the <a href="#">Search Pane</a>, click Customize Search and
                  select Field Search.
                </li>
                <li>
                  Choose the search you want to run by selecting one or both of
                  the following:
                  <ul style={{ listStyleType: "disc" }}>
                    <li>
                      To search by field, select Search across selected fields.
                    </li>
                  </ul>
                </li>
              </ol>
            </div>

             {/* input fields  */}
            <div className="col-6 ">
              <Accordion defaultActiveKey="2">
                <Accordion.Item eventKey="0">
                  <Accordion.Header  style={{
                    fontWeight:"900"
                  }}>
                    <p className="fw-bold">INVOICE AMOUNT DETAILS</p>
                    </Accordion.Header>
                  <Accordion.Body>
                    <form className="d-flex gap-3 flex-column">
                      <div className="d-flex justify-content-between">
                        <label
                          htmlFor="currency"
                          style={{ fontSize: "14px", fontWeight: "600" }}
                        >
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
                          onChange={this.handleAlternatePayee1}
                        
                        />
                      </div>

                      <div className="d-flex justify-content-between">
                        <label
                          htmlFor="BasicAmt"
                          style={{ fontSize: "14px", fontWeight: "600" }}
                        >
                          Inv BasicAmt
                          <span style={{ color: "red" }}>&#42;</span> :
                        </label>
                        <input
                          type="text"
                          id="BasicAmt"
                          className="border border-0 "
                          name="BasicAmt"
                          value={this.state.BasicAmt}
                          size={"60"}
                          onChange={this.handleAlternatePayee1}
                        />
                      </div>

                      <div className="d-flex justify-content-between">
                        <label
                          htmlFor="TaxAmt"
                          style={{ fontSize: "14px", fontWeight: "600" }}
                        >
                          Inv Tax Amt<span style={{ color: "red" }}>&#42;</span>{" "}
                          :
                        </label>
                        <input
                          type="text"
                          id="TaxAmt"
                          className="border border-0 "
                          name="TaxAmt"
                          value={this.state.TaxAmt}
                          size={"60"}
                          onChange={this.handleAlternatePayee1}
                        />
                      </div>

                      <div className="d-flex justify-content-between">
                        <label
                          htmlFor="TotalInvAmt"
                          style={{ fontSize: "14px", fontWeight: "600" }}
                        >
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
                          onChange={this.handleAlternatePayee1}
                        />
                      </div>

                      <div className="d-flex justify-content-between">
                        <label
                          htmlFor="AdvancePaid"
                          style={{ fontSize: "14px", fontWeight: "600" }}
                        >
                          Advance Paid
                          <span style={{ color: "red" }}>&#42;</span> :
                        </label>
                        <input
                          type="text"
                          id="AdvancePaid"
                          className="border border-none fw-bold"
                          name="AdvancePaid"
                          value={this.state.AdvancePaid}
                          size={"50"}
                          onChange={this.handleAlternatePayee1}
                        />
                      </div>

                      <div className="d-flex justify-content-between">
                        <label style={{ fontSize: "14px", fontWeight: "600" }}>
                          TCS applicable
                          <span style={{ color: "red" }}>&#42;</span> :
                        </label>

                        <div
                          className="d-flex gap-2"
                          style={{ width: "480px" }}
                        >
                          <label htmlFor="Yes">
                            {" "}
                            <input
                              type="radio"
                              name="TCSApplicable"
                              onChange={this.handleInputChange}
                              id="Yes"
                              value="Yes"
                            />{" "}
                            Yes{" "}
                          </label>
                          <label htmlFor="No">
                            {" "}
                            <input
                              type="radio"
                              name="TCSApplicable"
                              onChange={this.handleInputChange}
                              id="No"
                              value="No"
                            />{" "}
                            No{" "}
                          </label>
                        </div>
                      </div>

                      <div className="d-flex justify-content-between">
                        <label
                          htmlFor="NetPayableAmt"
                          style={{ fontSize: "14px", fontWeight: "600" }}
                        >
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
                          onChange={this.handleAlternatePayee1}
                        />
                      </div>
                    </form>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <p className="fw-bold">ALTERNATE PAYEE DETAILS</p>
                    </Accordion.Header>
                  <Accordion.Body className="grid gap-3">
                    {/* imported the result component */}
                    <form className="d-flex flex-column gap-3">
                      <div className="d-flex justify-content-between">
                        <label
                         htmlFor="validationDefaultUsername" className="form-label"
                          style={{ fontSize: "14px", fontWeight: "600" }}
                        >
                          Alternate Payee1{" "}
                          <span style={{ color: "red" }}>&#42;</span> :
                        </label>
                        <input
                          type="text"
                          // id="AlternatePayee1"
                          name="AlternatePayee1"
                          value={this.state.AlternatePayee1}
                          onChange={this.handleAlternatePayee1}
                          size={"50"}
                          className="border border-none"
                          id="validationDefaultUsername"
                        />
                      </div>

                      <div className="d-flex justify-content-between">
                        <label
                          htmlFor="AlternatePayee2"
                          style={{ fontSize: "14px", fontWeight: "600" }}
                        >
                          Alternate Payee2{" "}
                          <span style={{ color: "red" }}>&#42;</span> :
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
                        <label
                          htmlFor="city"
                          style={{ fontSize: "14px", fontWeight: "600" }}
                        >
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
                        <label
                          htmlFor="Street"
                          style={{ fontSize: "14px", fontWeight: "600" }}
                        >
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
                        <label
                          htmlFor="Country"
                          style={{ fontSize: "14px", fontWeight: "600" }}
                        >
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
                        <label
                          htmlFor="Bankkey"
                          style={{ fontSize: "14px", fontWeight: "600" }}
                        >
                          Bankkey/IFSC code{" "}
                          <span style={{ color: "red" }}>&#42;</span> :
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
                        <label
                          htmlFor="BankAccno"
                          style={{ fontSize: "14px", fontWeight: "600" }}
                        >
                          BankAcc no <span style={{ color: "red" }}>&#42;</span>{" "}
                          :
                        </label>
                        <input
                          type="tel"
                          id="BankAccno"
                          name="BankAccno"
                          value={this.state.BankAccno}
                          size={"50"}
                          className="border border-none"
                          onChange={this.handleAlternatePayee1}
                          
                        />
                      </div>

                      <div className="d-flex justify-content-between">
                        <label
                          htmlFor="reference"
                          style={{ fontSize: "14px", fontWeight: "600" }}
                        >
                          Reference <span style={{ color: "red" }}>&#42;</span>{" "}
                          :
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

                      {/* <input type="submit" className="w-25" /> */}
                    </form>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <p className="fw-bold">LINE ITEM DETAILS</p>
                    </Accordion.Header>
                  <Accordion.Body>
                    <table className="table border border-2 ">
                      <thead>
                        <tr>
                          <th scope="col" className="bg-light">
                            <input type="checkbox" />
                          </th>
                          <td scope="col" className="bg-light w-50 fw-bold">Select Debit</td>
                          <td scope="col" className="bg-light fw-bold">GL Desc</td>
                          <td scope="col" className="bg-light fw-bold">GL Code</td>
                          <td scope="col" className="bg-light fw-bold">
                            Text(Do not enter special character)
                          </td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="bg-primary-subtle">
                            <input type="checkbox" />
                          </td>
                          <td className="bg-primary-subtle">
                            <form>
                              <select name="" id="">
                                <option value="">Debit</option>
                              </select>
                            </form>
                          </td>
                          <td className="bg-primary-subtle">
                            <form>
                              <select name="" id="">
                                <option value="">
                                  Original cost-plant &..
                                </option>
                              </select>
                            </form>
                          </td>
                          <td className="bg-primary-subtle">00202000000</td>
                          <td className="bg-primary-subtle">
                            <input type="text" className="border border-none" />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    {/* sysmbols */}
                    <div className="border border-0 d-flex justify-content-end gap-3 mb-3">
                    <CircleChevronLeft size={35} color="#c9c5c5" strokeWidth={1} />
                    <p className="d-flex justify-content-center align-items-center text-white" style={
                      {borderRadius:"50%",
                        height:"35px",
                        width:"35px",
                        backgroundColor:"#551a8b"
                      }
                    }>1</p>
                    <CircleArrowRight size={35} color="#c9c5c5" strokeWidth={1} />
                    <select name="" id="" className="h-25 p-2">
                      <option value="">200/page</option>
                    </select>
                    </div>
                    <div className="border border-0 d-flex justify-content-end gap-3">
                      <button
                        className=" text-white border border-0 p-1 px-3"
                        style={{ backgroundColor: "#551a8b" }}
                      >
                        Calculate
                      </button>
                      <button
                        className=" text-white border border-0 px-3 p-1"
                        style={{ backgroundColor: "#551a8b" }}
                      >
                        Add
                      </button>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>

            {/* bottom layer position fixed */}
          <div
            className="fixed-bottom  z-3 border rounded  d-flex justify-content-between align-items-center bg-light"
            style={{ height: "50px", backgroundColor: "#d9d9d9" }}
          >
            <div className="d-flex justify-content-center align-items-center mt-3">
              <div className="d-flex gap-1">
                <p
                  className="p-1 rounded fw-bold ms-1"
                  style={{ backgroundColor: "#e8e1ef" }}
                >
                  Currency :{" "}
                  <span className="fw-bold" style={{ color: "#6fd371" }}>
                    INR
                  </span>
                </p>
                <p
                  className="p-1  rounded fw-bold"
                  style={{ backgroundColor: "#e8e1ef" }}
                >
                  Inv Basic Amt :{" "}
                  <span className="fw-bold" style={{ color: "#6fd371" }}>
                    15,000.00
                  </span>
                </p>
                <p
                  className="p-1  rounded fw-bold"
                  style={{ backgroundColor: "#e8e1ef" }}
                >
                  Basic Tax Amt :{" "}
                  <span className="fw-bold" style={{ color: "#6fd371" }}>
                    1,000.00
                  </span>
                </p>
                <p
                  className="p-1  rounded fw-bold"
                  style={{ backgroundColor: "#e8e1ef" }}
                >
                  Inv Total Amt :{" "}
                  <span className="fw-bold" style={{ color: "#6fd371" }}>
                    16,000.00
                  </span>
                </p>
                <p
                  className="p-1  rounded fw-bold"
                  style={{ backgroundColor: "#e8e1ef" }}
                >
                  TDS :{" "}
                  <span className="fw-bold" style={{ color: "#6fd371" }}>
                    15.00
                  </span>
                </p>
                <p
                  className="p-1  rounded fw-bold"
                  style={{ backgroundColor: "#e8e1ef" }}
                >
                  Net Payable Amt :{" "}
                  <span style={{ color: "#6fd371" }}>
                    16,000.00
                  </span>
                </p>
                <p
                  className="p-1  rounded fw-bold"
                  style={{ backgroundColor: "#e8e1ef" }}
                >
                  Basic Amt Diff :{" "}
                  <span className=" text-danger">NA</span>
                </p>
              </div>
            </div>

            <div className="d-flex gap-2 me-1">
              <select name="" id="" className="fw-bold pe-3">
                <option value="">Select Action</option>
              </select>
              <button className="border border-danger rounded bg-white text-danger">
                Reject
              </button>

              <button
                onClick={this.handlesubmit}
                value="submit"
                style={{ backgroundColor: "#551a8b", color: "white" }}
                className="border border-0  rounded "
              >
                Approve
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Invoice;
