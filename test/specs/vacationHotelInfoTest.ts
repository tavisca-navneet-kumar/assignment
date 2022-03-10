import HomePage from "../../pages/vacation/homePage";
import { HotelInfo } from "../../pages/vacation/hotelInfoPage";
import { SearchResult } from "../../pages/vacation/searchResultPage";
import { AssertionData, TestData } from "../data/testData";
describe('Test Vacation Application:',function(){
    describe('Selected Hotel Info:',function(){

       let SearchResults:SearchResult;
       let HotelInfo:HotelInfo;

         before(async function ()  {
            await HomePage.launchPage();
            await HomePage.goToHotelTab();
            SearchResults =  await HomePage.searchHotels(TestData.SearchedDestinationPune, TestData.SearchedFromDate, TestData.SearchedToDate);
            HotelInfo = await SearchResults.selectHotel(TestData.PuneSelectedHotelConrad);
        })

        it('Should have correct result for Hotel Name. @Smoke', async () => {
            
            expect(await HotelInfo.getHotleNameInfo()).toContain(AssertionData.PuneSelectedHotelConrad); 
        });

        it('Should have correct result for Hotel Star Rating. @Regression', async () => {
            
            expect(await HotelInfo.getHotleRatingInfo()).toContain(AssertionData.PuneConradStarRating); 
        });

        it('Should have correct result for Hotel Room Count Info. @Smoke', async () => {
            
            expect(await HotelInfo.getRoomCountInfo()).toContain(AssertionData.PuneConradRoomCount); 
        });

    })

})

   
