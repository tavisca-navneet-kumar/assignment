import HomePage from "../../pages/google/homePage";
import { AssertionData } from "../data/testData";

describe('Test Google', () => {


    it('Should have title "Google". @Smoke', () => {
        HomePage.launchPage()

        expect(HomePage.getPageTitle()).toBe(AssertionData.GoogleTitle);
    });

    it("Should have content I'm Feeleing Lucky. @Regression", () => {
        HomePage.launchPage();
        expect(HomePage.getPageContent()).toBe(AssertionData.GooglePageText);

    })

});