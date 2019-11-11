import React, {Component} from "react";
import Button from "./Button";
import { Profile } from './Profile';

class Twitter extends Component {
    render() {
        return (
            <div className="content">
                <Button url={'/admin/whatsapp'} class={'btn btn-whatsapp'} title={'WhatsApp'}/>
                <Button url={'/admin/facebook'} class={'btn btn-facebook'} title={'Facebook'}/>
                <Button url={'/admin/instagram'} class={'btn btn-instagram'} title={'Instagram'}/>
                <Profile portadaUrl="twitter.png"/>
            </div>
        );
    }
}

export default Twitter;
