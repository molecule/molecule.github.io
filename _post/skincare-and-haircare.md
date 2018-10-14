---
layout: post
date: 2018-08-26
image: 
sunscreens:
    -
        product: CANMAKE Mermaid Skin Gel UV (SPF50+ PA++++)
        link: https://www.amazon.com/gp/product/B00X3E456K/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00X3E456K&linkCode=as2&tag=molecule08-20&linkId=1fdddb3b6fd180a242ee87b70a0c6b9a
        img-src: //ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B00X3E456K&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL160_&tag=molecule08-20
        review: There's a reason Can Make is the favorite sunscreen of every single person who has ever tried it. It is better than any sunscreen has a right to be. It's like a gel moisturizer that just disappears into your skin. It's a joy to apply. It's not drying, it's not greasy, it's absolutely perfect.
    -
        product: Skin Aqua Super Moisture Gel pump (SPF50+ PA++++)
        link: https://www.amazon.com/gp/product/B01BM1USNO/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B01BM1USNO&linkCode=as2&tag=molecule08-20&linkId=6ab54ca34f3d7186f48c03ae02d0f34d
        img-src: //ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B01BM1USNO&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=molecule08-20
        review: A light, quickly absorbing sunscreen with all the UVB and UVA protection you could ever want. Two pumps are the full 1/4 teaspoon required for sun protection. Not quiiiite as nice as Can Make, but I love how huge the bottle is.
    -
        product: Kiss My Face SPF 30
        link: https://www.amazon.com/gp/product/B0014C8COY/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B0014C8COY&linkCode=as2&tag=molecule08-20&linkId=3e387cd83ddd064c6dade12d9ded2d04
        img-src: //ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B0014C8COY&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL110_&tag=molecule08-20
        review: For a Western sunscreen this is actually pretty great! I use this on days when I know I'll be sweating a bit (hiking, walking outdoors, etc.). It's much more waterproof than the Asian sunscreens I usually use. Cruelty-free and goes on smoothly - doesn't sting, and minimal white cast!
    -
    
moisturizers:
    -
        product: HADALABO Gokujyun Hyaluronic Lotion Moist
        link: https://www.amazon.com/gp/product/B074GX619Q/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B074GX619Q&linkCode=as2&tag=molecule08-20&linkId=c3ee6e00e1366d6984c3b7f3f55677ef
        img-src: //ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B074GX619Q&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=molecule08-20
        review: I thought this was a joke when I first tried it. It looks watery and weak, not at all the thick, goopy business I'm used to with Western moisturizers. This is hands-down the most hydrating product I've tried. Splash your face with water and pat 3-5 drops into your skin, then repeat as needed.
    -
        product: Stratia Liquid Gold
        link: https://www.stratiaskin.com/products/liquid-gold
        img-src: 
        review: Every once in a while I overexfoliate and my skin gets red, irritated, itchy, and stings w/ even gentle cleansing. This always soothes my skin immmediately. I like to mix it with a few drops of Rosehip Seed Oil just for fun.
    -
        product:
        link: https://www.amazon.com/gp/product/B00I4BUBN8/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00I4BUBN8&linkCode=as2&tag=molecule08-20&linkId=cae1e176937c799ed1b1dc5805d4fef7
        img-src: //ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B00I4BUBN8&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=molecule08-20
        review: This is the most heavy-duty, slightly occlusive moisturizing product I own. I slather on a bunch before I get on a plane, and if my face needs the extra moisture. But I probably won't buy it again, because I hate the packaging. 
    -
        product: HADALABO Gokujyun Hyaluronic Lotion Premium
        link: https://www.amazon.com/gp/product/B01JRXH3W8/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B01JRXH3W8&linkCode=as2&tag=molecule08-20&linkId=1b2dc6622f6d8074d4aaa6fda8e173fd
        img-src: //ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B01JRXH3W8&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=molecule08-20
        review: The same as the Moist, but w' 5 sizes of hyaluronic acid for deeper penetration. If you have super dry skin, I'd actually go with the Moist because it's so light you can do like 3-5 layers but they still sink in perfectly. This one is thicker and doesn't sink in as well for me. I don't notice any difference in their hydrating abilities!
    -

---

#### sunscreens

<div>
    <table>
    {% for sunscreen in page.sunscreens %}
        <tr>
            <td width="20%"><a target="_blank" href="{{sunscreen.link}}">
                <img border="0" src="{{ sunscreen.img-src }}"></a> </td>
            <td>    
                <a target="_blank" href="{{sunscreen.link}}">{{sunscreen.product}}</a>
                <br> {{sunscreen.review}} 
                </td>
        </tr>
    {% endfor %}
    </table>
</div><!--end of sunscreens-->

#### moisturizers and hydrating toners

<div>
    <table>
    {% for moisturizer in page.moisturizers %}
        <tr>
            <td width="20%"><a target="_blank" href="{{moisturizer.link}}">
                <img border="0" src="{{ moisturizer.img-src }}"></a> </td>
            <td>    
                <a target="_blank" href="{{moisturizer.link}}">{{moisturizer.product}}</a>
                <br> {{moisturizer.review}} 
                </td>
        </tr>
    {% endfor %}
    </table>
</div><!--end of moisturizers etc.-->

### Way more details than you ever wanted
#### Sunscreen

Most folks know that [dermatologists say the #1 thing you can do for anti-aging is wear sunscreen](https://sciencebecomesher.com/science-based-anti-aging-the-no-1-product-you-need/)! Unfortunately most Western sunscreens available in the U.S. are extremely terrible. They're thick, greasy, difficult to spread, and can leave a major "white cast" to your face. What's more, the FDA has very loose requirements on reporting sunscreen effectiveness, and has been slow to approve new UV filters. [Japanese and Korean sunscreens, however, are light-years beyond these pitiful FDA-approved options](https://www.reddit.com/r/SkincareAddiction/comments/8tdw0o/haul_just_got_these_babies_in_the_mail_today/e16tvky/?st=jj70617a&sh=aea45711). 

First, some quick info about the different kinds of damaging sun rays:
- UVB (B is for BURNING): causes sunburns and skin cancer.
- UVA (A is for AGING): causes wrinkles, tanning, hyperpigmentation, sun spots.

You need protection from both in order to have healthy skin! Remember that windows don't protect against all UV rays. Check out this amazing picture of a truck driver, and see if you can tell which side of his face was exposed to the sun through a window as he drove his truck for 28 years:

<div style="float: center; text-align:center; padding:10px; font-size:13px; line-height:8px">
<img src="/src/img/NewEnglandJournalofMedicine.png" alt="left side was exposed to sun through the window." style="width: 300px;"/>
<span style="display:block;"> <a href="https://www.nejm.org/doi/full/10.1056/NEJMicm1104059">Image from the New England Journal of Medicine</a>. </span>
</div>

In the U.S., sunscreen manufacturers are required to report the SPF protection provided by their sunscreen. SPF stands for sun protection factor. It measures a sunscreen's amount of protection from UVB rays. PPD, on the other hand, stands for persistent pigment darkening. It's tested by applying a product to human skin and measuring how long it takes for the skin to darken (i.e. tan) compared to bare skin. Let's say it takes 10 minutes for bare skin to start to tan. If a product was applied and it took instead 160 minutes (2 hours 40 minutes) for the skin to tan, then the product has a PPD of 16, because it took 16 times longer for skin to darken as it normally would have. 

- PA+ = PPD 2-4
- PA++ = PPD 4-8
- PA+++ = PPD 8 to 16
- PA++++ = PPD 16 to 35

([Source](https://theklog.co/spf-meaning/))

Remember, UVA rays are the ones responsible for aging and UVB rays are the ones responsible for burning. In the U.S., [sunscreens are only required to report whether they are "broad spectrum"](https://www.ecfr.gov/cgi-bin/retrieveECFR?gp=1&SID=0089115bdbc8686f591ab359c37abea0&ty=HTML&h=L&mc=true&n=pt21.5.352&r=PART#se21.5.352_173), not any PPD value. Unfortunately, even if a sunscreen claims "broad spectrum", you just don't know how much UVA protection it has. For example, many sunscreens use *avobenzone* for UVA protection, which degrades incredibly quickly in sunlight. [Avobenzone loses 50% of it's UV protective property in less than an hour](https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1365-2133.2004.06173.x). Several hours later you are nearly completely vulnerable to UVA if your sunscreen doesn't contain other UVA filters or Avobenzone stabilizers, like Tinosorb and Octisalate.

Asian sunscreens have much better filters and formulations. Not only do the sun filtering ingredients used in Asian sunscreens degrade less quickly than those in American suncreens, but they are far more cosmetically elegant. They sink in almost instantly, glide on smoothly, dry to a dewy or matte finish (as you prefer), AND the level of sun protection is *significantly* higher. All the sunscreens I recommend are minimum SPF 50 and PA++++.

This is my absolute, hands-down all-time favorite sunscreen:
<a target="_blank" href="https://www.amazon.com/gp/product/B00X3E456K/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00X3E456K&linkCode=as2&tag=molecule08-20&linkId=1fdddb3b6fd180a242ee87b70a0c6b9a">CANMAKE Mermaid Skin Gel UV</a><img src="//ir-na.amazon-adsystem.com/e/ir?t=molecule08-20&l=am2&o=1&a=B00X3E456K" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" /> 

There's a reason Can Make is the favorite sunscreen of every single person who has ever tried it. It is better than any sunscreen has a right to be. It's like a gel moisturizer that just disappears into your skin. It's a joy to apply: it's not drying, it's not greasy, it's absolutely perfect.

<a href="http://www.cosdna.com/eng/cosmetic_fae0300494.html">CosDNA of CANMAKE Mermaid Skin Gel</a>

Another popular one is [SkinAqua's Sarafit](https://www.reddit.com/r/AsianBeauty/comments/91ehyv/have_a_question_ask_here_daily_help_and_questions/e2ycfyh/?context=3).
 
#### Vitamin C
https://www.reddit.com/r/30PlusSkinCare/comments/54t5a6/ok_so_why_vitamin_c_serum/d8otp8e/?context=3


