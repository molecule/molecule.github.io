---
layout: post
tags: [Travel, Santa Monica]
description: We're living in Santa Monica for 4 months in the summer of 2019. These are my notes about what we learned in the city!
date: 2019-05-10
image: https://github.com/molecule/molecule.github.io/blob/master/src/img/roses/thornless-kathleen-harrop.png

restaurants:
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
