import { isTypeElement } from "typescript";

export class Utils {

    static clickOnElement(element: WebdriverIO.Element) {
        element.waitForClickable();
        element.click();

    }

    static scrollToTheElementAndClick(element: WebdriverIO.Element){
        element.scrollIntoView();
        this.twoSecondsDeadWait();
        element.click();
        this.twoSecondsDeadWait();
    }

    static setValueInTextBox(element: WebdriverIO.Element, value: string) {
        element.waitForEnabled();
        element.setValue(value);
    }

    static setValueAndTab(element: WebdriverIO.Element, value: string) {
        element.waitForEnabled();
        element.setValue(value);
        browser.keys("Enter");
    }

    static getElementText(element: WebdriverIO.Element): string {
        element.waitForDisplayed();
        return element.getText();
    }
    
    static refreshPage(){
        browser.refresh();
    }

    static twoSecondsDeadWait(){
        browser.pause(2000);
    }

    static clickOnElementByText(value:string){
        const hotel = $('a[title~='+value+']');
        hotel.waitForClickable();
        hotel.click();
    }

    static getElementAttributeValue(element:WebdriverIO.Element,attribute:string){
        element.waitForDisplayed();
        element.waitForEnabled();
        return element.getAttribute(attribute);
    }
}