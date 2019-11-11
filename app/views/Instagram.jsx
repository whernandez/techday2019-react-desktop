import React, {Component} from "react";
import Button from "./Button";
import { Profile } from './Profile';

class Instagram extends Component {
    render() {
        return (
            <div className="content">
                <Button url={'/admin/twitter'} class={'btn btn-info'} title={'Twitter'}/>
                <Button url={'/admin/whatsapp'} class={'btn btn-whatsapp'} title={'WhatsApp'}/>
                <Button url={'/admin/facebook'} class={'btn btn-facebook'} title={'Facebook'}/>
                <Profile portadaUrl="instagram.jpg"/>
            </div>
        );
    }
}

export default Instagram;
