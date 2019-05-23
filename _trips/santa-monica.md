---
layout: post
tags: [Travel, Santa Monica]
description: We're living in Santa Monica for 4 months in the summer of 2019. These are my notes about what we learned in the city!
date: 2019-05-10
image: https://github.com/molecule/molecule.github.io/blob/master/src/img/roses/thornless-kathleen-harrop.png

restaurants:
    -
        name: Uovo 
        review: Fun location, cool ambience, food is...fine?
        link: https://www.yelp.com/biz/uovo-santa-monica
    -
        name: Huckleberry Cafe
        review: The breakfast combos with eggs and bacon are fantastic. Perfectly cooked potatoes. The biscuit that came with the Country Breakfast was melt-in-your-mouth delicious biscuit perfection. Pastries are good too.
        link: https://www.yelp.com/biz/huckleberry-santa-monica?osq=Huckleberry+Cafe+%26+Bakery
    -
        name: Blue Plate Tacos
        review: The pork belly tacos are subtle, flavorful, and have a delicious texture. 
        link: https://www.yelp.com/biz/blue-plate-taco-santa-monica
    -
        name: Tumbi Craft Indian Kitchen
        review: Fantastically delicious and rich. We tried and loved the Kashmiri Rogan Josh (a lamb dish), Butter Chicken (melt in your mouth), and a sweet potato dosa (this style of dosa is like an enormous extra-crispy crepe - so delicious). 
        link: https://tumbibar.com/menu
    -
        name: Merci Clement
        review: A dessert place only open at night. There's a high-def slow-mo video of dessert construction playing on loop to convince you these people are mad dessert scientists. The belgian waffle square w/ a scoop of ice cream is a joy. We're going back to try their insane cinnamon roll croissant.
        link: https://www.yelp.com/biz/merci-clement-santa-monica-5
    -
        name: Ms Chi
        review: Incredible and unique. Get the scallion pancakes, wontons in chili oil, sizzling pork potstickers, and for dessert a chocolate mochi donut and hedgehog bao. I didn't love the famous cheeseburger potstickers but they are VERY unique.
        link: https://www.yelp.com/biz/ms-chi-cafe-culver-city
    - 
---
From May to September, we're living in Santa Monica! Here are my favourite activities, restaurants, and other useful bits of info on living in the big city.

### Map

<iframe src="https://www.google.com/maps/d/u/0/embed?mid=1Q9APvH4IJ2AWszDQ0YZUKJrsuzWIpwS3" width="640" height="480"></iframe>

### Restaurants
Short reviews of my favourite restaurants in LA.

<div>
    <table>
    {% for eatery in page.restaurants %}
        <tr> 
            <td><a href="{{eatery.link}}">{{ eatery.name }}</a></td>
            <td>{{eatery.rating}}</td>
        </tr>
        <tr> 
            <td>{{eatery.review}} <br><br></td>
        </tr>

    {% endfor %}
    </table>
</div><!--end of restayrabts-->

### Public Transport
- BBB accepts Metro's EZ transit pass Zone Zero.
- EZ transit pass is a monthly-calendar pass that is loaded on your TAP card. It is good for local travel on 24 transit agencies, including Big Blue Bus. ($110).
- 30-Day Pass: Ride as many BBBs as you want in a consecutive 30 day period. ($50)
- TAP cards are good on [many transit agencies](https://www.metro.net/riding/fares/) (confirmed on BBB and Expo Line only so far)

### Parking
[Info about beach parking permits](https://www.smgov.net/Departments/PCD/Permits/Overnight-Resident-Beach-Parking-Permit/):

- Overnight Resident/Guest beach permits are valid in City of Santa Monica beach lots 1N through 9N, and 4S and 5S (excluding the two-hour short-term parking areas)
- Central Zone Overnight Resident/Guest beach permits are valid in the Central Zone lots 2S and 3S located at 1650, 1670 and 1750 Appian Way.

[Map of parking](https://www.smgov.net/uploadedFiles/Departments/PCD/Transportation/Motorists-Parking/City-Parking-Map-Web.pdf)