import React, {useState} from 'react';
import "../App.css"

function Time() {
       const [count, setCount] = useState(0);
   

    return (
        <div>
            
        <div>
            <p className="theater">KT Multivision Cinema: Andheri</p>
            <button type="button" class="btn btn-outline-success">11:00AM</button>&nbsp;&nbsp;
            <button type="button" class="btn btn-outline-success">12:00PM</button>&nbsp;&nbsp;
            <button type="button" class="btn btn-outline-success">02:30PM</button>&nbsp;&nbsp;
            <button type="button" class="btn btn-outline-success">03:30PM</button>&nbsp;&nbsp;
            <button type="button" class="btn btn-outline-success">06:00AM</button>&nbsp;&nbsp;
            <button type="button" class="btn btn-outline-success">09:00PM</button>
            
        </div>
            <br/>
        <div>
                <p className="theater">Balaji Movieplex: Kopar</p>
                <button type="button" class="btn btn-outline-success">11:30AM</button>&nbsp;&nbsp;
                <button type="button" class="btn btn-outline-success">12:15PM</button>&nbsp;&nbsp;
                <button type="button" class="btn btn-outline-success">01:30PM</button>&nbsp;&nbsp;
                <button type="button" class="btn btn-outline-success">03:30PM</button>&nbsp;&nbsp;
                <button type="button" class="btn btn-outline-success">06:30AM</button>&nbsp;&nbsp;
                <button type="button" class="btn btn-outline-success">09:30PM</button>

        </div>
            <br/>
            <div>
                <p className="theater">INOX: Palm Beach Galleria Mall, Navi Mumbai</p>
                <button type="button" class="btn btn-outline-success">11:00AM</button>&nbsp;&nbsp;
                <button type="button" class="btn btn-outline-success">12:00PM</button>&nbsp;&nbsp;
                <button type="button" class="btn btn-outline-success">02:30PM</button>&nbsp;&nbsp;
                <button type="button" class="btn btn-outline-success">03:30PM</button>&nbsp;&nbsp;
                <button type="button" class="btn btn-outline-success">06:00AM</button>&nbsp;&nbsp;
                <button type="button" class="btn btn-outline-success">09:00PM</button>

            </div>
        </div>
    );
}
export default Time