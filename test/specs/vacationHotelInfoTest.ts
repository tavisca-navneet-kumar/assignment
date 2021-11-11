import HomePage from "../../pages/vacation/homePage";
import { HotelInfo } from "../../pages/vacation/hotelInfoPage";
import { SearchResult } from "../../pages/vacation/searchResultPage";
import { AssertionData, TestData } from "../data/testData";
describe('Test Vacation Application:',function(){
    describe('Selected Hotel Info:',function(){

       let SearchResults:SearchResult;
       let HotelInfo:HotelInfo;

        before(function () {
            HomePage.launchPage();
            HomePage.goToHotelTab();
            SearchResults =  HomePage.searchHotels(TestData.SearchedDestinationPune, TestData.SearchedFromDate, TestData.SearchedToDate);
            HotelInfo = SearchResults.selectHotel(TestData.PuneSelectedHotelConrad);
        })

        it('Should have correct result for Hotel Name. @Smoke', () => {
            
            expect(HotelInfo.getHotleNameInfo()).toContain(AssertionData.PuneSelectedHotelConrad); 
        });

        it('Should have correct result for Hotel Star Rating. @Regression', () => {
            
            expect(HotelInfo.getHotleRatingInfo()).toContain(AssertionData.PuneConradStarRating); 
        });

        it('Should have correct result for Hotel Room Count Info. @Smoke', () => {
            
            expect(HotelInfo.getRoomCountInfo()).toContain(AssertionData.PuneConradRoomCount); 
        });

    })

})

   
