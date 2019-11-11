import React, {Component, Fragment} from "react";
import Button from "./Button";
import { Profile } from './Profile';

class WhatsApp extends Component {
    render() {
        return (
            <div className="content">
                <Button url={'/admin/twitter'} class={'btn btn-twitter'} title={'Twitter'}/>
                <Button url={'/admin/facebook'} class={'btn btn-facebook'} title={'Facebook'}/>
                <Button url={'/admin/instagram'} class={'btn btn-instagram'} title={'Instagram'}/>
                <Profile portadaUrl="whatsapp.png"/>
            </div>
        );
    }
}

export default WhatsApp;
