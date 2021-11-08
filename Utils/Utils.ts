export class Utils {

    static clickOnElement(element: WebdriverIO.Element) {
        element.waitForEnabled();
        element.click();

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
}