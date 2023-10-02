import { LightningElement } from 'lwc';
//import TRAILHEADWG_LOGO from '@salesforce/resourceUrl/trailhead_logo';
//import TRAILHEADWG_CHARACTERS from '@salesforce/resourceUrl/trailhead_characters';
import InlinePdfExampleStaticResource from '@salesforce/resourceUrl/InlinePdfExampleStaticResource';

export default class InlinePdfViewer extends LightningElement {

    resourceUrl = '';

    renderedCallback() {
        let renderedUrl = InlinePdfExampleStaticResource + '/Technivorm-Moccamaster-KBG-Select-Manual.pdf';
        console.warn(`'Setting renderedUrl to ${renderedUrl}`);
        this.resourceUrl = renderedUrl;
    }
}