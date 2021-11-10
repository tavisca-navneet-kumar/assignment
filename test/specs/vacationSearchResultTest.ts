import HomePage from "../../pages/vacation/homePage";
import { HotelInfo } from "../../pages/vacation/hotelInfoPage";
import { SearchResult, STARRATING } from "../../pages/vacation/searchResultPage";

describe('Test Vacation Applicaion', () => {
    let SearchResults:SearchResult;
    let HotelInfo:HotelInfo;

    before(function () {
        HomePage.launchPage();
        HomePage.goToHotelTab();
        SearchResults =  HomePage.searchHotel("Pune", "11/28/21", "11/29/21");
    })
    it('Should have correct hotel count. @Regression', () => {
       
        expect(SearchResults.getHotelCount()).toContain("8 Hotels");
        
    });

    it('Should have correct Destination. @Smoke', () => {
        expect(SearchResults.getSearchCriteria()).toContain("Pune");
        
    });

    it('Should have correct ChecIn and CheckOut Dates. @Regression', () => {
        expect(SearchResults.getSearchCriteria()).toContain("28, 2021");
        expect(SearchResults.getSearchCriteria()).toContain("29, 2021");
        
    });

    it('Should have correct result for Star Filter. @Smoke', () => {
        SearchResults.applyStarFilter(STARRATING.FIVESTAR);
        expect(SearchResults.getHotelCount()).toContain("3 Hotels");
        
    });
    
    it('Should have correct result for Name Filter. @Regression', () => {
        SearchResults.removeFilters();
        SearchResults.applyNameFilter("Hyatt");
        expect(SearchResults.getHotelCount()).toContain("2 Hotels");
        
    });

});