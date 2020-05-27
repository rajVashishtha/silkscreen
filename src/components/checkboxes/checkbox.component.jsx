import React from 'react'
import './checkbox.style.css'

const CheckBox = () =>{

    return(
    <div className="extrasearch">
        <h4>Don't get what looking  ?</h4>
        <form action="">
        <div className="panel">

        <div className="panel-body">
        <ul className="input-list">
            <li>
                <div className="pure-checkbox">
                <input id="checkbox1" name="checkbox" type="checkbox" />
                <label htmlFor="checkbox1">Festival</label>
                </div>
            </li>

            <li>
                <div className="pure-checkbox">
                <input id="checkbox2" name="checkbox" type="checkbox" />
                <label htmlFor="checkbox2">Sports</label>
                </div>
            </li>

            <li>
                <div className="pure-checkbox">
                <input id="checkbox3" name="checkbox" type="checkbox" />
                <label htmlFor="checkbox3">Media Advertising</label>
                </div>
            </li>
            <li>
                <div className="pure-checkbox">
                <input id="checkbox4" name="checkbox" type="checkbox" />
                <label htmlFor="checkbox4">Invitation</label>
                </div>
            </li>
            <li>
                <div className="pure-checkbox">
                <input id="checkbox5" name="checkbox" type="checkbox" />
                <label htmlFor="checkbox5">Industries</label>
                </div>
            </li>
            <li>
                <div className="pure-checkbox">
                    <input id="checkbox6" name="checkbox" type="checkbox" />
                    <label htmlFor="checkbox6">Holidays & travel</label>
                </div>
            </li>
            <button>Submit</button>
        </ul>
        
        </div>

        </div>
</form>
</div>
)
}

export default CheckBox