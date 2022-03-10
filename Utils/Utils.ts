import { isTypeElement } from "typescript";

export class Utils {

    static async clickOnElement(element: WebdriverIO.Element) {
        await element.waitForClickable();
        await element.click();

    }

    static async scrollToTheElementAndClick(element: WebdriverIO.Element) {
        await element.scrollIntoView();
        await this.twoSecondsDeadWait();
        await element.click();
        await this.twoSecondsDeadWait();
    }

    static async setValueInTextBox(element: WebdriverIO.Element, value: string) {
        await element.waitForEnabled();
        await element.setValue(value);
    }

    static async setValueAndTab(element: WebdriverIO.Element, value: string) {
        await element.waitForEnabled();
        await element.setValue(value);
        await browser.keys("Enter");
    }

    static async getElementText(element: WebdriverIO.Element) {
        await element.waitForDisplayed();
        return await element.getText();
    }

    static async refreshPage() {
        await browser.refresh();
    }

    static async twoSecondsDeadWait() {
        await browser.pause(2000);
    }

    static async clickOnElementByText(value: string) {
        const hotel = $('a[title~=' + value + ']');
        await hotel.waitForClickable();
        await hotel.click();
    }

    static async getElementAttributeValue(element: WebdriverIO.Element, attribute: string) {
        await element.waitForDisplayed();
        await element.waitForEnabled();
        return await element.getAttribute(attribute);
    }
}