import HomePage from "../../pages/vacation/homePage";
import { HotelInfo } from "../../pages/vacation/hotelInfoPage";
import { SearchResult } from "../../pages/vacation/searchResultPage";
describe('Test Vacation Application',function(){
    describe(':Selected Hotel Info',function(){

       let SearchResults:SearchResult;
       let HotelInfo:HotelInfo;

        before(function () {
            HomePage.launchPage();
            HomePage.goToHotelTab();
            SearchResults =  HomePage.searchHotel("Pune", "11/28/21", "11/29/21");
            HotelInfo = SearchResults.selectHotel("Conrad");
        })

        it('Should have correct result for Hotel Name. @Smoke', () => {
            
            expect(HotelInfo.getHotleNameInfo()).toContain("Conrad Pune"); 
        });

        it('Should have correct result for Hotel Star Rating. @Regression', () => {
            
            expect(HotelInfo.getHotleRatingInfo()).toContain("5"); 
        });

        it('Should have correct result for Hotel Room Count Info. @Smoke', () => {
            
            expect(HotelInfo.getRoomCountInfo()).toContain("5"); 
        });

    })

})

   
