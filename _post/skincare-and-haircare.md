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
        product: HADALABO Gokujyun Hyaluronic Lotion Premium
        link: https://www.amazon.com/gp/product/B01JRXH3W8/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B01JRXH3W8&linkCode=as2&tag=molecule08-20&linkId=1b2dc6622f6d8074d4aaa6fda8e173fd
        img-src: //ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B01JRXH3W8&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=molecule08-20
        review: The same as the Moist, but with 5 sizes of hyaluronic acid for deeper penetration. For me, this is enough on it's own, and it doesn't pill under sunscreen so I use it every morning. The "Moist" layers better so if you want a Tahani-style 12-step skincare routine I'd go w/ Moist, but for a one-stop shop this one is hard to beat.
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
        product: Hada Labo Skin Plumping Gel
        link: https://www.amazon.com/gp/product/B00I4BUBN8/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00I4BUBN8&linkCode=as2&tag=molecule08-20&linkId=cae1e176937c799ed1b1dc5805d4fef7
        img-src: //ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B00I4BUBN8&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=molecule08-20
        review: This is the most heavy-duty, slightly occlusive moisturizing product I own. I slather on a bunch before I get on a plane, and if my face needs the extra moisture. But I probably won't buy it again, because I hate the packaging. 
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

In the U.S., sunscreen manufacturers are required to report the SPF protection provided by their sunscreen. SPF stands for sun protection factor. It measures a sunscreen's amount of protection from UVB rays. But remember, you want both UVB *and* UVA protection. So how do you get UVA protection? That's where Asian photo protectors come in.

Asian researchers use a measure called "PPD" to measure UVA protection. PPD stands for persistent pigment darkening. It's tested by applying a product to human skin and measuring how long it takes for the skin to darken (i.e. tan) compared to bare skin. Let's say it takes 10 minutes for bare skin to start to tan. If a product was applied and it took 160 minutes (2 hours 40 minutes) instead for the skin to tan, then the product has a PPD of 16, because it took 16 times longer for skin to darken as it normally would have. 

- PA+ = PPD 2-4
- PA++ = PPD 4-8
- PA+++ = PPD 8 to 16
- PA++++ = PPD 16 to 35

([Source](https://theklog.co/spf-meaning/))

Remember, UVA rays are the ones responsible for aging and UVB rays are the ones responsible for burning. In the U.S., [sunscreens are only required to report whether they are "broad spectrum"](https://www.ecfr.gov/cgi-bin/retrieveECFR?gp=1&SID=0089115bdbc8686f591ab359c37abea0&ty=HTML&h=L&mc=true&n=pt21.5.352&r=PART#se21.5.352_173), not any PPD value. Unfortunately, even if a sunscreen claims "broad spectrum", you just don't know how much UVA protection it has. For example, many sunscreens use *avobenzone* for UVA protection, which degrades incredibly quickly in sunlight. [Avobenzone loses 50% of it's UV protective property in less than an hour](https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1365-2133.2004.06173.x). Several hours later you are nearly completely vulnerable to UVA if your sunscreen doesn't contain other UVA filters or Avobenzone stabilizers, like Tinosorb and Octisalate.

Asian sunscreens have these improved filters and formulations. That means higher, more complete, and longer-lasting protection.

Not only do the sun filtering ingredients used in Asian sunscreens degrade less quickly than those in American suncreens, but they are far more cosmetically elegant. They sink in almost instantly, glide on smoothly, dry to a dewy or matte finish (as you prefer), AND the level of sun protection is *significantly* higher. All the sunscreens I recommend are minimum SPF 50 and PA++++.

Even if you've always hated sunscreen, please give Asian sunscreens a try! They are absolutely wonderful.

<div>
    <table>
    {% for sunscreen in page.sunscreens %}
        <tr>
            <td width="20%"><a target="_blank" href="{{sunscreen.link}}">
                <img border="0" src="{{ sunscreen.img-src }}"></a> </td>
            <td>    
                <a target="_blank" href="{{sunscreen.link}}">{{sunscreen.product}}</a>
                </td>
        </tr>
    {% endfor %}
    </table>
</div><!--end of sunscreens-->

### Notes

Another popular one is [SkinAqua's Sarafit](https://www.reddit.com/r/AsianBeauty/comments/91ehyv/have_a_question_ask_here_daily_help_and_questions/e2ycfyh/?context=3).

### My Routine

#### AM
- Splash face w/ cool water. ~~Wait 15 minutes.~~ ([No need to wait to reset skin pH](https://theacidqueenblog.com/2015/12/04/skin-ph-and-urban-legends-an-argument-against-wait-times-and-ph-adjusting-toners/)). 
- Moisturize/Hydrate
  - [Hada Labo Gokujyun Lotion Moist] - (1-2 layers, applied on damp skin)
  - [Hada Labo Premium Lotion] - (If my skin feels extra dry)
  - [Stratia Liquid Gold] - (1 pump or 2, if needed) mixed with 3 drops of [TO - 100% Organic Cold-Pressed Rose Hip Seed Oil]
- Actives (Monday, Wednesday, Friday)
  - [20% VITAMIN C + E FERULIC ACID SERUM 1 OZ] - (after Moist)
  - [TO - Lactic Acid 10% HA 2%] - (20 mins after Vit C, only on trouble areas of chin and forehead)
- Actives (Tuesday, Thursday)
  - [TO - Niacinamide 10% and Zinc 1%] - (after Moist but before Premium on moisturizing days). Will probably switch to Stratia Rewind which has a better-supported formulation when this runs out.
  - [Azelaic Acid Suspension 10%] - (after Niacinamide). Will probably switch to Garden of Wisdom when this runs out as I've seen lots of amazing reviews of it.
- Sunscreen:
  - [CANMAKE Mermaid Skin Gel PA++++ SPF 50+], AND
  - [Australian Gold Botanical SPF 50 tinted], (just for the tint and because it dries a beautiful matte texture - it's basically makeup for me. I don't apply enough to get SPF benefits from it). 
  - For neck/torso/arms or if I'll be sweating: [Kiss My Face SPF 30]
  
#### PM
- Cleanse
  - [Garnier SkinActive Micellar Cleansing Water](https://smile.amazon.com/gp/product/B017PCGABI/ref=oh_aui_detailpage_o03_s00?ie=UTF8&th=1) - Only if I'm removing makeup. (For me, water was not enough to remove this and I was getting red, itchy, irritated skin but with a 2nd cleanser this works fine).
  - [Hada Labo Gokujun Cleansing Oil]
  - [Vanicream Gentle Cleanser] - ([pH 6-7](https://www.reddit.com/r/SkincareAddiction/comments/8zbu6q/psa_vanicream_cleanser_ph_levels_from_the_company/), which is a little high. I'd like to switch to the [Hada Labo Gentle Hydrating Cleanser](https://smile.amazon.com/Hada-Labo-Tokyo-Hydrating-Cleanser/dp/B01AAX6C26/ref=sr_1_3_a_it?ie=UTF8&qid=1534477928&sr=8-3&keywords=hada+labo+tokyo+gentle+hydrating+cleanser) or the [Hada Labo Foaming Cleanser](https://smile.amazon.com/Hada-Labo-Gokujyn-Hyaluronic-Cleansing/dp/B01CE5P580/ref=sr_1_4_a_it?ie=UTF8&qid=1534477928&sr=8-4&keywords=hada%2Blabo%2Btokyo%2Bgentle%2Bhydrating%2Bcleanser&th=1) (both are [pH 5-6](https://docs.google.com/spreadsheets/d/1VqO_uF8m4oKBzzk5ass37gHcjIk-_2Tv4W2KgJJmUQc/edit#gid=1844869261))).
- Actives
   - Monday night, [Hada Labo Gokujyun Lotion Moist], let dry, pea-size amount of Tret 0.04% micro gel.
   - Tuesday night, [Hada Labo Gokujyun Lotion Moist], [Hada Labo Premium Lotion], [Hada Labo Skin Plumping Gel].
   - Wednesday night, [Hada Labo Gokujyun Lotion Moist], let dry, pea-size amount of Tret 0.04% micro gel.
   - Thursday night, [Hada Labo Gokujyun Lotion Moist], [Hada Labo Premium Lotion], [Stratia Liquid Gold], [TO - 100% Organic Cold-Pressed Rose Hip Seed Oil].
   - Friday night, [Hada Labo Gokujyun Lotion Moist], let dry, pea-size amount of Tret 0.04% micro gel.
   - Saturday night, [Hada Labo Gokujyun Lotion Moist], let dry, pea-size amount of Tret 0.04% micro gel.
    - Sunday night, Hydration only.
 

[Hada Labo Gokujyun Lotion Moist]: https://www.amazon.com/gp/product/B074GX619Q/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B074GX619Q&linkCode=as2&tag=molecule08-20&linkId=c3ee6e00e1366d6984c3b7f3f55677ef
[Hada Labo Premium Lotion]: https://www.amazon.com/gp/product/B01JRXH3W8/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B01JRXH3W8&linkCode=as2&tag=molecule08-20&linkId=1b2dc6622f6d8074d4aaa6fda8e173fd
[Stratia Liquid Gold]: https://www.stratiaskin.com/products/liquid-gold
[TO - 100% Organic Cold-Pressed Rose Hip Seed Oil]: https://theordinary.com/product/rdn-100pct-organic-cold-pressed-rose-hip-seed-oil-30ml?ccm=6afb414ca0a748bd85ed7ead6c4e6729f133993f2fd49d2697d9aa1f3700dc05f70102cb1d00da802a8fe86a4f7a904b2cc58b019d79610ab89b7e00b33f328bc753a4096d6833cfdfd104393f7b6d2ea9c94c428c7dfb98df67373effa002ea0bb4ccc0631fe620f433ce3ceb247add1301e999e842b00448683c81f4fa84bd637043838043f764bfcc52c6ab2b852c&ccvis=1
[TO - Niacinamide 10% and Zinc 1%]: https://theordinary.com/product/rdn-niacinamide-10pct-zinc-1pct-30ml
[20% VITAMIN C + E FERULIC ACID SERUM 1 OZ]: https://www.timelessha.com/products/20-vitamin-c-e-ferulic-acid-serum-1-oz
[Salicylic Acid 2% Solution]: https://theordinary.com/product/rdn-salicylic-acid-2pct-solution-30ml
[TO - Lactic Acid 10% HA 2%]: https://theordinary.com/product/rdn-lactic-acid-10pct-ha-2pct-30ml?redir=1

[CANMAKE Mermaid Skin Gel PA++++ SPF 50+]: https://www.amazon.com/gp/product/B00X3E456K/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00X3E456K&linkCode=as2&tag=molecule08-20&linkId=1fdddb3b6fd180a242ee87b70a0c6b9a
[Australian Gold Botanical SPF 50 tinted]: https://www.amazon.com/gp/product/B01M8G39OW/ref=as_li_tl?ie=UTF8&tag=molecule08-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B01M8G39OW&linkId=bbd606980100762118a308d48259ce3b
[Skin Aqua Super Moisture Gel pump SPF 50 PA++++]: https://smile.amazon.com/gp/product/B01BM1USNO/ref=oh_aui_search_detailpage?ie=UTF8&psc=1
[Kiss My Face SPF 30]: https://www.amazon.com/gp/product/B0014C8COY/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B0014C8COY&linkCode=as2&tag=molecule08-20&linkId=3e387cd83ddd064c6dade12d9ded2d04?

[Azelaic Acid Suspension 10%]: https://theordinary.com/product/rdn-azelaic-acid-suspension-10pct-30ml?ccm=6afb414ca0a748bd85ed7ead6c4e6729f133993f2fd49d2697d9aa1f3700dc05f70102cb1d00da802a8fe86a4f7a904b2cc58b019d79610ab89b7e00b33f328bc753a4096d6833cfdfd104393f7b6d2e2913e5314e84bd999a0878da8fd4b5c871b29d78438faf6bffca77ad9dad5fdf14f9784956a839aad36da8cf1a7a6d13e1d0a421aaf86906677449624723d2d9&ccvis=1


[Hada Labo Gokujun Cleansing Oil]: https://www.amazon.com/gp/product/B004OQHZ2M/ref=as_li_tl?ie=UTF8&tag=molecule08-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B004OQHZ2M&linkId=7f4789fbfb1eaf0ffc78fe9a9305e265
[Vanicream Gentle Cleanser]: https://www.amazon.com/gp/product/B00QY1XZ4W/ref=as_li_tl?ie=UTF8&tag=molecule08-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B00QY1XZ4W&linkId=8be4c28ad4f1e13c8667c362dd53d756
[Hada Labo Skin Plumping Gel]: https://www.amazon.com/gp/product/B00I4BUBN8/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00I4BUBN8&linkCode=as2&tag=molecule08-20&linkId=cae1e176937c799ed1b1dc5805d4fef7
 
#### Vitamin C
- LAA is both pH dependent and also should not be combined with niacinamide, so best to wait 30 min in between using those two.
- Most common actives require a 15-20 minute absorption/activation window in the right pH for that product, and in the event that you include multiple actives in a single routine, you'll want to follow an order of lowest pH to highest pH. 
- For people who use LAA-based Vitamin C serums (which are pH dependent), that will usally be Vitamin C >> BHA >> AHA.
- Vit C needs to go on a 'bare' face.
- ~~You can wait 15-20 min after washing your face for your skin to naturally go back down to pH 4.2-5.6 on its own.~~ ([No need to wait to reset skin pH](https://theacidqueenblog.com/2015/12/04/skin-ph-and-urban-legends-an-argument-against-wait-times-and-ph-adjusting-toners/))
- Vit C has a 15 min absorption time/effectiveness window.
- Vit C can increase photoprotective skin behavior, but degrades in UV, so may be good to use at night! Ugh!

[source](http://www.snowwhiteandtheasianpear.com/2015/01/skincare-discovery-putting-your.html). Even [more info about Vitamin C](https://www.reddit.com/r/30PlusSkinCare/comments/54t5a6/ok_so_why_vitamin_c_serum/d8otp8e/?context=3)


