---
layout: post
date: 2018-05-26
image: https://github.com/molecule/molecule.github.io/blob/master/src/img/roses/thornless-kathleen-harrop.png
roses:
    -
        name: Barbra Streisand
        shade: NO.
        scent: strong sweet scent
        disease-resistant: Good.
        climbing: No.
        notes: Gorgeous shape. 5in blooms. Repeat.
        feelings: Top 3.
        imag: /src/img/roses/thornless-barbra-streisand.png
        link: https://www.regannursery.com/rose/Barbra-Streisand
    -
        name: Wollerton Old Hall 
        shade: NO.
        scent: Most.
        disease-resistant: Somewhat.
        climbing: No.
        notes: Continual blooming. 
        feelings: Top 3. Plant where it's easy to enjoy lovely smell.
        imag: /src/img/roses/thornless-wollerton-old-hall.png
        link: https://www.heirloomroses.com/wollerton-old-hall.html
    -
        name: Brother Cadfael
        shade: 4hrs sun OK
        scent: Very.
        disease-resistant: Good.
        imag: /src/img/roses/thornless-brother-cadfael.png
        link: https://www.regannursery.com/rose/Brother-Cadfael
        climbing: Both.
        notes: Repeat.
        feelings: Ideal for pots.
    -
        name: Mortimer Sackler 
        shade: NO?
        scent: old rose w fruit
        disease-resistant: Excellent.
        climbing: X
        notes: Repeat flowering.
        feelings: Seem lovely.
        imag: /src/img/roses/thornless-mortimer-sackler.png
        link: https://www.davidaustinroses.com/us/mortimer-sackler-english-climbing-rose
    -
        name: Secret
        shade: X
        scent: Exceptionally strong.
        disease-resistant:
        climbing:
        notes: Prob better than Barbra due to shade tolerance.
        feelings: Boring color.
        imag: /src/img/roses/thornless-secret.png
        link: https://www.heirloomroses.com/secret.html
    -
        name: Generous Gardener
        shade: NO?
        scent: strong old rose, musk and myrrh
        disease-resistant: Very.
        climbing: No.
        notes: 
        feelings: Scent?
        imag: /src/img/roses/thornless-generous-gardener.png
        link: https://www.regannursery.com/rose/The-Generous-Gardener
    -
        name: Paul Neyron
        shade: NO.
        scent: Strong.
        disease-resistant: "?"
        climbing: No.
        notes: 6in blooms. Repeat.
        feelings: Scent?
        imag: /src/img/roses/thornless-paul-neyron.png
        link: https://www.heirloomroses.com/roses/old-garden-roses/hybrid-perpetuals/paul-neyron.html
    -
        name: James Galway
        shade: X
        scent: light "old rose"
        disease-resistant: Excellent
        imag: /src/img/roses/thornless-james-galway.png
        link: https://www.regannursery.com/rose/James-Galway
        climbing: Both.
        notes: Repeat.
        feelings: Scent?
    -
        name: Deja Blu
        shade: X?
        scent: Very.
        disease-resistant: "?"
        imag: /src/img/roses/thornless-deja-blu.png
        link: https://www.regannursery.com/rose/Deja-Blu
        climbing: Both.
        notes: "?"
        feelings: Scent?
    -
        name: Zéphirine Drouhin
        shade: X
        scent: Very.
        disease-resistant: "?"
        climbing: X
        notes: Continual 4in blooms.
        feelings: Many flowers.
        imag: /src/img/roses/thornless-zephirine-drouhin.png
        link: https://www.heirloomroses.com/zephirine-drouhin.html
    -
        name: A Shropshire Lad
        shade: X
        scent: Somewhat.
        disease-resistant: Excellent.
        climbing: Both.
        notes: Repeat. <a href="https://www.davidaustinroses.com/us/a-shropshire-lad-shrub-rose">Good in pots!</a>
        feelings: Eh.
        imag: /src/img/roses/thornless-a-shropshire-lad.png
        link: https://www.heirloomroses.com/a-shropshire-lad.html
    -
        name: Queen of Sweden
        shade: NO.
        scent: Slight.
        disease-resistant: Very.
        climbing: Both.
        notes:
        feelings: No scent, no point
        imag: /src/img/roses/thornless-queen-of-sweden.png
        link: https://www.regannursery.com/rose/Queen-of-Sweden
    - 
        
---

#### Mandarin Semi-Dwarf Clementine
1. Roots sensitive to too much water, so don't use potting mixes that retain water. Best may be rose garden soil mixes (formulated for outside use).[1]
2. Water about once per week. Only water if soil is dry ~2 inches down into soil. Yellow or cupped leaves may be overwatered. Citrus prefer infrequent, deep watering to frequent, shallow sprinklings.
3. Potting instructions[1]. In a container, water deeply once or twice a week [3].
4. Need full sun, 8 hours / day.
5. After first year, add citrus fertilizer (slow-release) in the Spring.
6. Pruning is fine except in winter. Well-pruned trees have higher fruit output and are less prone to branch breakage [1].
7. Citrus Problem Solver.[2]

#### Apache Thornless Blackberries
0. Thornless, but still taste good.
1. Needs rich, moist, soil and full sun exposure to thrive. 
2. Prefer slightly acidic soil with a pH ranging from 6.5 to 7. 
3. Space plants about 5 feet apart.
4. Require about an inch of water per week
5. If you don’t wish to trellis your plant, trim the tops of new canes during the summer months, limiting growth to about 3 to 4 feet.
6. In the spring, before new growth forms, prune lateral branches back to about 12 inches to encourage larger fruit production.
7. Don't grow true to seed, so may have thorns if grown from seed.

#### Thornless, Fragrant Roses
0. [List of thornless roses.](https://www.heirloomroses.com/info/care/roses/thornless-roses/). [Another list.](https://www.davidaustinroses.com/us/specific-planting-situations/thornless-roses?mode=list)

<table class='roses' style="width:100%">
<tr class="rose">
    <th width="30%">Blooms</th>
    <th width="10%">Name</th>
    <th width="10%">Shade OK?</th>
    <th width="10%">Scent?</th>
    <th width="10%">Disease Resistant?</th>
    <th width="10%">Climbing or Shrub?</th>
    <th width="10%">Notes</th>
    <th width="10%">Feelings</th>
</tr>

{% for rose in page.roses %}
<tr class="rose">
    <td><img src="{{ rose.imag }}" style="width:250px"/></td>
    <td><medium>{{ rose.name }}</medium></td>
    <td>{{ rose.shade }}</td>
    <td><small>{{ rose.scent }}</small></td>
    <td><small>{{ rose.disease-resistant }}</small></td>
    <td><small>{{ rose.climbing }}</small></td>
    <td><small>{{ rose.notes }}</small></td>
    <td>{{ rose.feelings }}</td>
</tr> <!--end rose-->
{% endfor %}
</table> <!--end roses-->

0. "Alba" sub-type can tolerate "less than ideal sun conditions."[4]
0. Most roses need very large pots, at least 20″ tall and deep. Recommend using varieties that don’t grow more than 4′.
0. Fertilize once a month during growing season.
0. In pots, water when the soil is dry 1/2 inch down. Water deeply (more than a sprinkling).
0. In early spring, when the rose is showing first signs of growth (usually late February or early March), feed with an all-purpose Rose & Flower food. 
0. Most roses benefit from being completely defoliated in winter, to encourage a deeper dormancy and to remove diseased tissue. 
0. Source: [Berkeley Hort.](http://berkeleyhort.com/how-to/how-to-grow-roses/)
0. [Info about bare root plants.](https://www.mercurynews.com/2015/02/18/ask-the-garden-coach-bare-root-season/)
1. [Excellent intro to growing roses from SFGate.](https://www.sfgate.com/homeandgarden/article/Roses-for-beginners-3204687.php). Suggests this starter set for the Bay Area:
- **Iceberg**: A longtime favorite floribunda, it is considered one of the best 10 roses worldwide and remains the No. 1 white landscape rose. Plants shower themselves with icy-white blooms formed in clusters on good cutting stems. Foliage is midgreen and lush.
- **Julia Child**: An All-America floribunda in 2006, it has quickly become America's favorite yellow rose, and for good reason. Fragrant, butter-yellow to golden blooms form in clusters that just don't give up all season long.
- 'Gemini': An All-America Rose selection in 2000, it's a classic hybrid tea and one of the highest-rated roses in America. Exquisitely formed blossoms are a blend of pinky-coral and cream atop long cutting stems. Fragrance is mild, but rosy.
- 'Ingrid Bergman': This is my idea of a classic red hybrid tea. First, it's truly red, with petals that don't "blue" as they age. Fragrance is nothing special, but it's definite, and the deep glossy green foliage is most complementary to 'Ingrid's' vivid-red blossoms. Bushes are medium growers and are densely foliated.
- 'About Face': An All-America Rose selection in 2005, it is a bicolor, upright and tall grandiflora. Part of the charm of this winner is that its petals are golden-orange on their insides and bronzy-red on the outside. Fragrance is mild and thought to be apple-like.
- **Barbra Streisand**: A hybrid tea introduced in 2001, it is right up the alley of fragrance fanciers and those fond of deep lilac to mauve large blossoms. Plants reach medium heights and are notably bushy. Fragrance isn't just powerful, it's deep-rose.
- 'Hot Cocoa': An All-America floribunda in 2003, it caused quite a stir in rosedom when it was introduced because the color spread across rose petals was virtually unknown. As moderately scented blooms mature, deep rust, pointy buds open into a chocolate smoky haze of petals that eventually take on a purply case. At every stage, a knockout.

#### Sugar Snap Peas
1. Sow 2 or 3 times, 7 to 10 days apart, to extend harvest. [5]
2. To save space, sow in double rows 3" apart with 2 1/2 to 3' of space between double rows.[5]
3. Peas are a warm season crop, so growing peas in a container should begin in the spring when temperatures warm to over 60 F.[5]
4. 12 inches across. Fill the container with soil leaving a 1 inch space at the top.[5]
5. Keep the seeds in a lightly shaded area until germination (9-13 days). [6]
6. Peas prefer cool conditions, so plant them early in the season. When it gets too warm, they stop producing.[6]

[1]:https://www.fourwindsgrowers.com/tips-and-advice/growing-dwarf-citrus/in-containers.html
[2]:https://www.fourwindsgrowers.com/tips-and-advice/problem-solver.html
[3]:https://www.fourwindsgrowers.com/growing-essentials/watering-guidelines.html
[4]:https://hedgerowrose.com/rose-gardening/2012/09/06/growing-madame-plantier-or-the-brides-rose/
[5]:https://www.gardeningknowhow.com/edible/vegetables/peas/grow-peas-in-containers.htm
[6]: https://www.thespruce.com/growing-peas-in-container-gardens-848242