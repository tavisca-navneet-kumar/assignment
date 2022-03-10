import HomePage from "../../pages/google/homePage";
import { AssertionData } from "../data/testData";

describe('Test Google', () => {


    it('Should have title "Google". @Smoke', async() => {
        await HomePage.launchPage()
        expect(await HomePage.getPageTitle()).toBe(AssertionData.GoogleTitle);
    });

    it("Should have content I'm Feeleing Lucky. @Regression", async () => {
        await HomePage.launchPage();
        expect(await HomePage.getPageContent()).toBe(AssertionData.GooglePageText);

    })

});