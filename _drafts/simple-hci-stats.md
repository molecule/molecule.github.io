### Simple HCI stats

1. Look at your data.
2. Check for the assumptions
    - Normality
       - To understand why normality failed: Homoscedasticity, sphericity.
    - Independence (not really a test, good experiment design).
3. Shapiro-Wilk tests for normality. You have to run it on the residuals. Here's an example running on preference.

```
# Shapiro-Wilk normality test on response
shapiro.test(overall[overall$condition == "off",]$preference)
shapiro.test(overall[overall$condition == "auto",]$preference)
shapiro.test(overall[overall$condition == "manual",]$preference)
# A statistically significant result here indicates a departure from normality.
# But a lot of the tests are fairly robust to non-normal data
# also influenced by how many data points you have.

# but really what matters most is the residuals
m = aov(preference ~ condition, data=overall) # fit model
shapiro.test(residuals(m)) # test residuals
# p value from this test is statistically significant so we need to run
# the nonparametric version of this test.
# the line in this plot indicates what would be conforming to a normal distribution
# so depending on how much your data deviates there, you can see how normal your data is.
qqnorm(residuals(m)); qqline(residuals(m)) # plot residuals

```

4. Since we have a departure from normality, we need to use nonparametric tests.
4. We have Within-subjects, 3 levels (3 modes), 1 factor (participant ID) (I think).
5. So that means Friedman test.
6. Post-hoc (flavor of the day).

### Terms
1. Paired vs non-paired
    - "This data is described as unpaired or independent when the sets of data arise from separate individuals or paired when it arises from the same individual at different points in time" - [wikipedia](https://en.m.wikipedia.org/wiki/Paired_data)
2. Sample: Variable. I.e., asked their opinion on one question. (Binary?)
    - Single sample: preference for website A, B or C (3 response categories) or A, B (2 response categories).
    - Two sample: preferences but their sex, male or female. Is there a difference in what males prefer to what females prefer with respect to these website preferences that we're testing.
3. Test of proportions: when you find yourself counting subjects. Like "how many subjects preferred X over Y?"
4. Nominal/categorical. Subject ID (as if it were a name / label)

### Notes
1. Chi-squared test of proportions is used to identify significance. You need one variable/sample but can use it with multiple response categories.
2. The 'exact' version of the chi-squared is binomial (for 2 response categories) or multinomial (for >2 response categories).
3. W >2 response categories, the degrees of freedom for chi-square test should be 2. (sanity check).
4. After chi-squared test, if you have statistical significance from that test, you need to do a post-hoc.

### Questions
2. Chi-squared vs Friedman for Ranking?
3. Wilcox vs Wilcoxon Signed Rank? Parametric vs nonparametric? When to use these?
4. How can an analysis of varience test show statistical significance but the post-hoc doesn't? (Indication something is wrong?) 
5. Exact vs. ____?
6. Post-hoc test: binomial/multinomial vs wilcox?

## Link
There are four principal assumptions which justify the use of linear regression models for purposes of inference or prediction:
(i) linearity and additivity of the relationship between dependent and independent variables:
   (a) The expected value of dependent variable is a straight-line function of each independent variable, holding the others fixed.
   (b) The slope of that line does not depend on the values of the other variables.
   (c)  The effects of different independent variables on the expected value of the dependent variable are additive.
(ii) statistical independence of the errors (in particular, no correlation between consecutive errors in the case of time series data)
(iii) homoscedasticity (constant variance) of the errors
   (a) versus time (in the case of time series data)
   (b) versus the predictions
   (c) versus any independent variable
(iv) normality of the error distribution.

http://people.duke.edu/~rnau/testing.htm
