import React from "react";

export default function Home(){
    return(
      <div>

      <table className="table survey-table table-bordered table-striped">
            <thead>
              <tr>
                <th />
                <th className="text-center">
                  Strongly disagree
                  <br />
                </th>
                <th className="text-center">
                  Disagree
                  <br />
                </th>
                <th className="text-center">
                  Uncertain
                  <br />
                </th>
                <th className="text-center">
                  Agree
                  <br />
                </th>
                <th className="text-center">
                  Strongly agree
                  <br />
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="text-nowrap" scope="row">
                  Are you satisfied with our service?
                </th>
                <td><input type="radio" name="q1"/></td>
                <td><input type="radio" name="q1"/></td>
                <td><input type="radio" name="q1"/></td>
                <td><input type="radio" name="q1"/></td>
                <td><input type="radio" name="q1"/></td>
              </tr>
              <tr>
                <th className="text-nowrap" scope="row">
                Do you think we are doing better than our competitors?
                </th>
                <td><input type="radio" name="q2"/></td>
                <td><input type="radio" name="q2"/></td>
                <td><input type="radio" name="q2"/></td>
                <td><input type="radio" name="q2"/></td>
                <td><input type="radio" name="q2"/></td>
              </tr>
              <tr>
                <th className="text-nowrap" scope="row">
                Have you been looking for real estate for a long time?
                </th>
                <td><input type="radio" name="q3"/></td>
                <td><input type="radio" name="q3"/></td>
                <td><input type="radio" name="q3"/></td>
                <td><input type="radio" name="q3"/></td>
                <td><input type="radio" name="q3"/></td>
              </tr>
              <tr>
                <th className="text-nowrap" scope="row">
                Did the property always match the description we provided?
                </th>
                <td><input type="radio" name="q4"/></td>
                <td><input type="radio" name="q4"/></td>
                <td><input type="radio" name="q4"/></td>
                <td><input type="radio" name="q4"/></td>
                <td><input type="radio" name="q4"/></td>
              </tr>
              <tr>
                <th className="text-nowrap" scope="row">
                Was the broker well informed about the property?
                </th>
                <td><input type="radio" name="q5"/></td>
                <td><input type="radio" name="q5"/></td>
                <td><input type="radio" name="q5"/></td>
                <td><input type="radio" name="q5"/></td>
                <td><input type="radio" name="q5"/></td>
              </tr>
              <tr>
                <th className="text-nowrap" scope="row">
                Did you constantly receive additional information handouts about the properties viewed?
                </th>
                <td><input type="radio" name="q6"/></td>
                <td><input type="radio" name="q6"/></td>
                <td><input type="radio" name="q6"/></td>
                <td><input type="radio" name="q6"/></td>
                <td><input type="radio" name="q6"/></td>
              </tr>
              <tr>
                <th className="text-nowrap" scope="row">
                 You do your think sales commission was charged at a reasionable amount?</th>
                <td><input type="radio" name="q7"/></td>
                <td><input type="radio" name="q7"/></td>
                <td><input type="radio" name="q7"/></td>
                <td><input type="radio" name="q7"/></td>
                <td><input type="radio" name="q7"/></td>
              </tr>
              <tr>
                <th className="text-nowrap" scope="row">
                Are you likely to recommend us to a friend or a collegue?
                </th>
                <td><input type="radio" name="q8"/></td>
                <td><input type="radio" name="q8"/></td>
                <td><input type="radio" name="q8"/></td>
                <td><input type="radio" name="q8"/></td>
                <td><input type="radio" name="q8"/></td>
              </tr>

            </tbody>
          </table>
            <button type="button" className = "btn btn-success postButton survey-button">Submit</button>
          </div>

    )
}
